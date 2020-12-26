import { GET_ERROR } from './types';

export const getError = (msg) => (dispatch) => {
  dispatch({
    type: GET_ERROR,
    payload: msg,
  });
};
