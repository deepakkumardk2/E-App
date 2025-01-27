import React from 'react';
import './App.css'; // Import the CSS file
import Header from './components/Header';
import ProductCarousel from './components/ProductCarousel';
import Categories from './components/Categories';
import Offers from './components/Offers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCarousel />
      <Categories />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
