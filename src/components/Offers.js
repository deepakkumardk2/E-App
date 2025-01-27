import React from 'react';

function Offers() {
  return (
    <div className="offers">
      <h2>Current Offers</h2>
      <div className="offer-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/Unrec/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB582928607_.jpg" alt="Offer 1" />
        <p>Up to 50% off on Electronics</p>
      </div>
      <div className="offer-item">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/b0b5b6d2e4fcbe1b.jpg?q=20" alt="Offer 2" />
        <p>Free Shipping on Orders over $50</p>
      </div>
    </div>
  );
}

export default Offers;
