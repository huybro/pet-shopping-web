import React from "react";

const Cart = ({ CartItem, setCartItem, addToCart, decreaseQty }) => {
  const totalQuantity = CartItem.reduce((total, item) => total + item.qty, 0);

  const handleRemove = (item) => {
    const updatedCart = CartItem.filter((cartItem) => cartItem.code !== item.code);
    setCartItem(updatedCart);
  };

  return (
    <>
      <section className='cart-items'>
        <div className='cart-details'>
          {CartItem.length === 0 && <h1 className='no-items product'>No Items are added to the Cart</h1>}
          {CartItem.map((item) => {
            const productQty = item.qty;
            return (
              <div className='cart-list product d_flex' key={item.code}>
                <div className='product-details'>
                  <img className='product-image' src={item.img} alt={item.name} />
                  <h3 className='product-code'>{item.code}</h3>
                  <p className='product-quantity'>Quantity: {productQty}</p>
                </div>
                <div className='cart-items-function'>
                  <div className='removeCart'>
                    <button className='removeButton' onClick={() => handleRemove(item)}>
                      Remove
                    </button>
                  </div>
                  <div className='cartControl d_flex'>
                    <button className='incCart' onClick={() => addToCart(item)}>
                      <i className='fa-solid fa-plus'></i>
                    </button>
                    <button
                      className='desCart'
                      onClick={() => {
                        decreaseQty(item);
                        setCartItem(CartItem.map((cartItem) => (cartItem.code === item.code ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem)));
                      }}
                    >
                      <i className='fa-solid fa-minus'></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className='cart-total'>
        <h2 className='total-quantity'>Total Quantity: {totalQuantity}</h2>
      </div>
    </>
  );
};

export default Cart;
