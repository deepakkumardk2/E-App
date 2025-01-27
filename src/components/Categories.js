import React from 'react';

function Categories() {
  const categories = [
    { name: 'Electronics', link: '/electronics' },
    { name: 'Fashion', link: '/fashion' },
    { name: 'Home & Furniture', link: '/home-furniture' },
    { name: 'Sports', link: '/sports' },
    { name: 'Beauty', link: '/beauty' },
    { name: 'Toys', link: '/toys' }
  ];

  return (
    <div className="categories">
      <h2>Shop by Categories</h2>
      <br />
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <a href={category.link}>
              <img 
                src="https://m.media-amazon.com/images/I/41gULG+LD1L.AC_SX250.jpg" 
                alt={category.name} 
              />
              <p>{category.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
