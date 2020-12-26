import axios from 'axios';
import { GET_USERS, ADD_USER, DELETE_USER, GET_ERROR } from './types';
import { createMessage } from './message';
export const getUsers = () => (dispatch) => {
  axios
    .get('users/')
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, 'err');
    });
};

export const addUser = (user) => (dispatch) => {
  axios
    .post('users/', user)
    .then((res) => {
      dispatch(createMessage({ userAdded: 'user added' }));
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log('Err', err);
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERROR,
        payload: errors,
      });
    });
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`users/${id}/`)
    .then((res) => {
      dispatch(createMessage({ userDeleted: 'user deleted' }));
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => {
      console.log('Err', err);
    });
};
