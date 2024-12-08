// pages/api/order.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullName, email, address, items } = req.body;

        // Validation basique
        if (!fullName || !email || !address || !items) {
            return res.status(400).json({ message: 'Données de commande manquantes.' });
        }

        // Création du transporteur
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour les autres ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Contenu de l'e-mail
        let mailOptions = {
            from: '"Votre Boutique" <no-reply@votreboutique.com>',
            to: 'votre-email@domaine.com', // Remplacez par votre e-mail
            subject: 'Nouvelle Commande',
            text: `
                Vous avez reçu une nouvelle commande !

                Nom: ${fullName}
                E-mail: ${email}
                Adresse: ${address}

                Articles:
                ${items.map(item => `- Produit ID: ${item.productId}, Taille: ${item.size}, Quantité: ${item.quantity}`).join('\n')}
            `,
            html: `
                <h2>Nouvelle Commande</h2>
                <p><strong>Nom:</strong> ${fullName}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Adresse:</strong> ${address}</p>
                <h3>Articles:</h3>
                <ul>
                    ${items.map(item => `<li>Produit ID: ${item.productId}, Taille: ${item.size}, Quantité: ${item.quantity}</li>`).join('')}
                </ul>
            `,
        };

        try {
            // Envoi de l'e-mail
            await transporter.sendMail(mailOptions);
            console.log('E-mail de commande envoyé');

            // Réponse réussie
            return res.status(200).json({ message: 'Commande reçue avec succès.' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            return res.status(500).json({ message: 'Erreur lors du traitement de la commande.' });
        }
    } else {
        // Méthode non autorisée
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
