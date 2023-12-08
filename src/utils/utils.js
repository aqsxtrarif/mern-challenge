/* =====================================
    utility functions
  ==================================== */

// Function to calculate the total price of items in the shopping cart
export const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
};

