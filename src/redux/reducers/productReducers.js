import initialState from "./../initialState/index";

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return state.filter(
        (product) => product.id !== action.payload.product_id
      );
    default:
      return state;
  }
};

export default productReducer;
