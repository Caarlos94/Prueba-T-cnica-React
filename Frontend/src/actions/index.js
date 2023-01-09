export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_CATEGORIES = "GET_CATEGORIES"
export const ORDER_PRODUCTS = "ORDER_PRODUCTS"
export const ALL_PRODUCTS = "ALL_PRODUCTS"

export const getProducts = () => {
  return function (dispatch) {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_PRODUCTS, payload: data }));
  };
};

export const getCategories = () => {
  return function (dispatch) {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_CATEGORIES, payload: data }));
  };
};

export const orderProducts = (category) => {
  return { type: ORDER_PRODUCTS, payload: category}
}

export const allProducts = () => {
  return { type: ALL_PRODUCTS }
}