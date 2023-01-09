import { GET_PRODUCTS, ORDER_PRODUCTS, GET_CATEGORIES, ALL_PRODUCTS } from "../actions";

const initialState = {
    allProducts:[],
    products:[],
    categories:[],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_PRODUCTS:
    return { ...state, products: action.payload, allProducts: action.payload };

    case ORDER_PRODUCTS:
      const producto = state.allProducts.filter(product => product.category === action.payload)
    return {...state, products: producto }

    case ALL_PRODUCTS:
      return {...state, products: state.allProducts }

    case GET_CATEGORIES:
      let category = action.payload.map((e) => e.category);
      let categoryArr = new Set(category);
      let result = [...categoryArr];
    return { ...state, categories: result };

    default:
      return { ...state };
  }
};

export default reducer