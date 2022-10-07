export const deleteProduct = (product_id) => (dispatch) => {
  dispatch({
    type: "DELETE_PRODUCT",
    payload: {
      product_id,
    },
  });
};
