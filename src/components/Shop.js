import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Sweet thibross de ville',
      description:
        'Un sweat-shirt confortable et élégant, parfait pour toutes les saisons.',
      price: 120,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791733/vesteNoirFinalTR_mtnbab.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 7,
      name: 'T-Shirt CSTR Gris',
      description: 'T-shirt CSTR, idéal pour un usage quotidien.',
      price: 49.99,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736792342/tshirtFinalTR_mdmajx.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 8,
      name: 'Polo CSTR Noir',
      description: 'Polo CSTR, idéal pour un usage quotidien.',
      price: 60,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736792342/poloNoirFinalTR_fcxyiv.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 9,
      name: 'Maillot court éditions CSTR',
      description: 'Maillot sportif en tissu respirant,',
      price: 110,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736792342/maillotGrisFinalTR_vosqex.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 2,
      name: 'Maillot court pink édition',
      description:
        'Maillot sportif en tissu respirant, idéal pour vos entraînements.',
      price: 110.0,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791733/maillotRoseFinalTR_up0bgr.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 4,
      name: 'Maillot automne long avec gillet intégré',
      description:
        'Sweat-shirt robuste avec double boutonnage pour une durabilité accrue.',
      price: 189,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791732/jacquetNoirFinalTR_lktbwy.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 5,
      name: 'Veste thermique hiver',
      description:
        'Veste inspirée des modèles LASER, alliant style et fonctionnalité.',
      price: 160,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791732/jacquet2NoirFinalTR_fiy3nj.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 10,
      name: 'Cuissard court été',
      description: 'Cuissard noir CSTR, idéal pour vos entraînements.',
      price: 160,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736792342/saloppetteNoirFinalTR_vms6lb.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 3,
      name: 'Cuissard court automne',
      description: 'Cuissard chaud, parfait pour les journées fraîches.',
      price: 149.99,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791733/shortNoirFinalTR_rtvzaq.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
    {
      id: 6,
      name: 'Cuissard long hiver',
      description:
        'Cuissard en polaire douce, offrant chaleur et confort tout au long de la journée.',
      price: 169,
      image:
        'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791733/longNoirFinalTR_h9xivi.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2Xl', '3XL', '4XL', '5Xl', '6XL'],
    },
  ];

  const [order, setOrder] = useState({
    fullName: '',
    email: '',
    address: '',
    items: {},
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Gestion des champs texte du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Stockage explicite de l'ID du produit lors du changement de taille
  const handleSizeChange = (e, productId) => {
    const { value } = e.target;
    setOrder((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [productId]: {
          ...prev.items[productId],
          productId, // Stocke l'ID du produit
          size: value,
        },
      },
    }));
  };

  // Stockage explicite de l'ID du produit lors du changement de quantité
  const handleQuantityChange = (e, productId) => {
    const { value } = e.target;
    setOrder((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [productId]: {
          ...prev.items[productId],
          productId, // Stocke l'ID du produit
          quantity: parseInt(value) || 0,
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs obligatoires
    if (!order.fullName || !order.email || !order.address) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Enrichir les éléments sélectionnés avec le nom du produit grâce à l'ID
    const selectedItems = Object.values(order.items)
      .filter((item) => item.quantity > 0 && item.size)
      .map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
          productId: item.productId,
          productName: product ? product.name : 'Produit inconnu',
          size: item.size,
          quantity: item.quantity,
        };
      });

    if (selectedItems.length === 0) {
      setError('Veuillez sélectionner au moins un produit avec une taille.');
      return;
    }

    // Préparation des paramètres pour EmailJS, avec le nom du produit inclus
    const templateParams = {
      fullName: order.fullName,
      email: order.email,
      address: order.address,
      orderDetails: selectedItems
        .map(
          (item) =>
            `Produit: ${item.productName} (ID: ${item.productId}), Taille: ${item.size}, Quantité: ${item.quantity}`
        )
        .join('\n'),
    };

    // Affichage dans la console pour vérification
    console.log('Template Parameters:', templateParams);

    // Envoi de l'email via EmailJS
    emailjs
      .send(
        'service_1ylfboe',
        'template_x1l9rqq', // Remplacez par l'ID exact de votre template EmailJS
        templateParams,
        'yQspMM7OvirPxix3y'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setError(null);
          // Réinitialisation du formulaire
          setOrder({
            fullName: '',
            email: '',
            address: '',
            items: {},
          });
        },
        (error) => {
          console.error(error.text);
          setError("Erreur lors de l'envoi de la commande.");
        }
      );
  };

  if (submitted) {
    return (
      <div className="shop">
        <h2>Merci pour votre commande !</h2>
        <p>Nous vous contacterons bientôt pour confirmer votre commande.</p>
        <style>{`
          .shop {
            text-align: center;
            padding: 50px;
            border-radius: 12px;
            background-color: #f5f5f5;
            color: #2c3e50;
          }
          h2 {
            color: #0b0b0b;
            font-size: 2.5em;
            margin-bottom: 20px;
          }
          p {
            font-size: 1.2em;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="shop" id="shop">
      <h2>Notre Boutique</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="image_container">
              <img src={product.image} alt={product.name} width="450" />
            </div>
            <h3 className="titrenoir">{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">CHF: {product.price.toFixed(2)}</p>
            <div className="selectors">
              <label htmlFor={`size-${product.id}`}>Taille:</label>
              <select
                id={`size-${product.id}`}
                onChange={(e) => handleSizeChange(e, product.id)}
                value={order.items[product.id]?.size || ''}
              >
                <option value="" disabled>
                  Sélectionnez une taille
                </option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="number"
              min="0"
              placeholder="Quantité"
              onChange={(e) => handleQuantityChange(e, product.id)}
              value={order.items[product.id]?.quantity || ''}
            />
          </div>
        ))}
      </div>

      <form className="order-form" onSubmit={handleSubmit}>
        <h3>Formulaire de Commande</h3>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="fullName">Nom Complet</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={order.fullName}
            onChange={handleInputChange}
            required
            placeholder="Entrez votre nom complet"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={order.email}
            onChange={handleInputChange}
            required
            placeholder="Entrez votre adresse e-mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse de Livraison</label>
          <textarea
            id="address"
            name="address"
            value={order.address}
            onChange={handleInputChange}
            required
            placeholder="Entrez votre adresse de livraison"
          ></textarea>
        </div>
        <button type="submit">Commander</button>
      </form>

      <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

          .shop {
              padding: 60px 20px;
              background-color: #ba3c3c;
          }
          h2 {
              text-align: center;
              margin-bottom: 40px;
              font-size: 2.5em;
              color: #2c3e50;
          }
          .products {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
              margin-bottom: 60px;
          }
          .product {
              border-radius: 12px;
              background-color: #fff;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              padding: 20px;
              text-align: center;
              transition: transform 0.3s, box-shadow 0.3s;
          }
          .product:hover {
              transform: translateY(-5px);
          }
          .image_container {
              position: relative;
              width: 100%;
              height: 250px;
              border-radius: 8px;
              overflow: hidden;
              margin-bottom: 15px;
              background-color: #fff;
          }
          h3,
          h6 {
              font-size: 1.5em;
              margin-bottom: 10px;
              color: #000;
          }
          p {
              font-size: 1em;
              margin-bottom: 10px;
              color: #000;
              min-height: 60px;
          }
          .titrenoir {
              color: #000;
          }
          .price {
              font-size: 1.2em;
              font-weight: bold;
              color: #ba3c3c;
              margin-bottom: 15px;
          }
          .selectors {
              margin-bottom: 10px;
              text-align: left;
          }
          .selectors label {
              display: block;
              margin-bottom: 5px;
              color: #2c3e50;
              font-weight: 500;
          }
          .selectors select {
              width: 100%;
              padding: 8px 10px;
              border: 1px solid #ccc;
              border-radius: 6px;
              font-size: 1em;
              transition: border-color 0.3s, box-shadow 0.3s;
          }
          .selectors select:focus {
              border-color: #ba3c3c;
              outline: none;
          }
          input[type='number'] {
              width: 100%;
              padding: 8px 10px;
              border: 1px solid #ccc;
              border-radius: 6px;
              font-size: 1em;
              transition: border-color 0.3s, box-shadow 0.3s;
          }
          input[type='number']:focus {
              border-color: #ba3c3c;
              outline: none;
          }
          .order-form {
              max-width: 700px;
              margin: 0 auto;
              padding: 30px 25px;
              background-color: #fff;
              border-radius: 12px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .order-form h3 {
              text-align: center;
              margin-bottom: 25px;
              font-size: 2em;
              color: #2c3e50;
          }
          .form-group {
              margin-bottom: 20px;
          }
          label {
              display: block;
              margin-bottom: 8px;
              color: #2c3e50;
              font-weight: 500;
          }
          input[type='text'],
          input[type='email'],
          textarea,
          select {
              width: 100%;
              padding: 10px 12px;
              border: 1px solid #ccc;
              border-radius: 6px;
              font-size: 1em;
              transition: border-color 0.3s, box-shadow 0.3s;
          }
          input[type='text']:focus,
          input[type='email']:focus,
          textarea:focus,
          select:focus {
              border-color: #ba3c3c;
              outline: none;
          }
          textarea {
              resize: vertical;
              height: 100px;
          }
          button {
              width: 100%;
              padding: 12px 0;
              background-color: #ba3c3c;
              color: #fff;
              border: none;
              border-radius: 6px;
              font-size: 1.2em;
              font-weight: bold;
              cursor: pointer;
              transition: background-color 0.3s, transform 0.2s;
          }
          button:hover {
              background-color: #ba3c3c;
              transform: translateY(-2px);
          }
          .error {
              color: #ba3c3c;
              margin-bottom: 15px;
              text-align: center;
              font-weight: bold;
          }
          @media (max-width: 768px) {
              .products {
                  grid-template-columns: repeat(2, 1fr);
                  gap: 20px;
              }
          }
          @media (max-width: 576px) {
              .products {
                  grid-template-columns: 1fr;
                  gap: 20px;
              }
          }
      `}</style>
    </div>
  );
};

export default Shop;
