import React from 'react';

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/n/i/y/xxl-ts58-vebnor-original-imah4jvvere9eyhe.jpeg?q=70', // Placeholder image link
      price: '$20',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-lehenga-choli/z/t/n/6-7-years-cs-k-lc60-clothes-shop-original-imagxgh7c8gfdwgx.jpeg?q=90&crop=false', // Placeholder image link
      price: '$30',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/w/c/n/-original-imah2as2hkktdfgp.jpeg?q=70', // Placeholder image link
      price: '$40',
    }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
