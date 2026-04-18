import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import Navbar from './Home/Nabar';
import Footer from './Home/Footer';
import { useTranslation } from 'react-i18next';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const { t } = useTranslation();

  return (
    <div className="cart-page bg-dark text-white min-vh-100">
      <Navbar />
      <div className="container py-5 mt-5">
        <h1 className="mb-5 text-center section-title">{t('nutrition.cart') || 'Your Shopping Cart'}</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h2 className="opacity-50">Your cart is empty 🛍️</h2>
            <Link to="/smart-nutrition" className="btn btn-primary mt-4">
              Return to Products
            </Link>
          </div>
        ) : (
          <div className="row">
            {/* Items List */}
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div key={item.id} className="card bg-secondary-dark mb-3 p-3 border-0 rounded-4 shadow-lg animate-fade-in">
                  <div className="d-flex align-items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="rounded-3 shadow"
                      style={{ width: '100px', height: '100px', objectFit: 'contain', background: 'rgba(255,255,255,0.05)' }} 
                    />
                    <div className="ms-4 flex-grow-1">
                      <h4 className="mb-1">{item.name}</h4>
                      <p className="text-primary fw-bold mb-0">{item.price}</p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button 
                        className="btn btn-outline-light btn-sm rounded-circle"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="fw-bold fs-5">{item.quantity}</span>
                      <button 
                        className="btn btn-outline-light btn-sm rounded-circle"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="btn btn-link text-danger ms-4"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="col-lg-4">
              <div className="card bg-secondary-dark p-4 border-0 rounded-4 shadow-lg sticky-top" style={{ top: '100px' }}>
                <h3 className="mb-4">Order Summary</h3>
                <div className="d-flex justify-content-between mb-2">
                  <span>Items ({cartCount})</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-4 border-top pt-3">
                  <h4 className="mb-0">Total</h4>
                  <h4 className="mb-0 text-primary">${cartTotal.toFixed(2)}</h4>
                </div>
                <button className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow">
                  Checkout Now 🚀
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;