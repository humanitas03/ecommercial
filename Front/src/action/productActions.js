import axios from 'axios';
import { ADD_PRODUCT } from './types';



export const addProduct = (product) => dispatch => {
  axios
    .post('http://localhost:8080/product/insert',product)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    )
};

