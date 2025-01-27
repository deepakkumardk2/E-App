import React from 'react';

function ProductCarousel() {
  return (
    <div className="carousel">
      <h2>Featured Products</h2>
      <div className="carousel-container">
        <div className="carousel-item">
          <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/winter-2024-new-product-launch/phones-new/images/all-phones/all-huawei-mate-x6.png" alt="phone" />
          <p>Phone</p>
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg" alt="camera" />
          <p>cameras</p>
        </div>
        <div className="carousel-item">
          <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-kids-apparel-combo/o/e/c/8-9-years-jumpsuit-pink-ma-krupa-creation-original-imagnhvwkbkugfch.jpeg?q=90&crop=false" alt="Product 3" />
          <p>fashion</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
