// pages/api/order.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullName, email, address, items } = req.body;

        // Validation des données
        if (!fullName || !email || !address || !items) {
            return res.status(400).json({ message: 'Données de commande manquantes.' });
        }

        // Créer le transporteur Nodemailer
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Préparer le contenu de l'email
        const itemsList = items.map(item => `- Produit ID: ${item.productId}, Taille: ${item.size}, Quantité: ${item.quantity}`).join('\n');

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Vous pouvez envoyer l'email à une autre adresse si nécessaire
            subject: 'Nouvelle Commande sur Votre Boutique',
            text: `
                Vous avez reçu une nouvelle commande !

                Nom: ${fullName}
                E-mail: ${email}
                Adresse de Livraison: ${address}

                Articles Commandés:
                ${itemsList}
            `,
            html: `
                <h2>Nouvelle Commande</h2>
                <p><strong>Nom:</strong> ${fullName}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Adresse de Livraison:</strong> ${address}</p>
                <h3>Articles Commandés:</h3>
                <ul>
                    ${items.map(item => `<li>Produit ID: ${item.productId}, Taille: ${item.size}, Quantité: ${item.quantity}</li>`).join('')}
                </ul>
            `,
        };

        try {
            // Envoyer l'email
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Commande reçue avec succès.' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return res.status(500).json({ message: 'Erreur lors de la soumission de la commande.' });
        }
    } else {
        // Méthode non autorisée
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
