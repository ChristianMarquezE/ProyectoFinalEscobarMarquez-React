import { createContext, useState } from 'react';

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function addItem({ price, id, title, img, count }) {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      existingItem.count += count;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { id, title, img, count, price }]);
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  return (
    <cartContext.Provider 
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        clearCart,
      }}
      
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
