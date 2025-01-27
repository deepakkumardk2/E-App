import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/128/9368/9368624.png" alt="E-Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands, and more" />
        <button>Search</button>
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="https://www.amazon.in/">Home</a></li>
          <li><a href="https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics">Categories</a></li>
          <li><a href="https://www.amazon.in/s?bbn=84514735031&rh=n%3A84514735031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=50f0b59b-3411-4bd1-af15-898620ce5c6e&pd_rd_w=1XVur&pd_rd_wg=ACpOd&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=0HGR00ECF9DGQS2KPZZY&ref=pd_hp_d_atf_unk">Offers</a></li>
        </ul>
      </div>
      <div className="icons">
  <button>
    <img 
      src="https://cdn-icons-png.flaticon.com/256/4825/4825038.png" 
      alt="Profile Icon" 
      style={{ width: '20px', height: '20px', marginRight: '8px' }} 
    />
    Profile
  </button>
  <button>
    <img 
      src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" 
      alt="Cart Icon" 
      style={{ width: '20px', height: '20px', marginRight: '8px' }} 
    />
    Cart
  </button>
</div>

    </header>
  );
}

export default Header;
