export function addToCart(cart, data, count) {
  const currentCart = [...cart];
  const itemIndex = currentCart.findIndex((item) => item.id === data.id);
  let newCart = currentCart;

  if (data.count + count <= 0) {
    newCart.splice(itemIndex, 1);
    return newCart;
  }

  if (itemIndex === -1) {
    let itemToAdd = {
      id: data.id,
      name: data.title,
      price: data.price,
      count: count,
    };
    newCart.push(itemToAdd);
  } else {
    newCart[itemIndex].count += count;
  }
  return newCart;
}

export function getTotal(cart) {
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.count;
  });
  return total;
}
