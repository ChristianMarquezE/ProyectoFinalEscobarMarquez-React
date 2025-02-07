import { createContext, useState } from 'react';

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function getTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.count * item.price;
    });

    return totalPrice;
  }

  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function addItem({ price, id, title, img, count, stock, freeDelivery}) {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      existingItem.count += count;
      if (existingItem.count <= stock) {
        setCartItems([...cartItems]);
      } else {
        alert('No puedes agregar mas productos de lo que hay en stock');
        existingItem.count -= count;
      }
    } else {
      setCartItems([...cartItems, { id, title, img, count, price, freeDelivery }]);
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
        getTotalPrice,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
