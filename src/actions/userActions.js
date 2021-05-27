import axios from 'axios';
import baseUrl from '../actions/baseUrl';
import { authenticateUser } from './authActions';
import { GET_USER, GET_ERRORS } from './types';

//GET user details
export const getUser = (address) => (dispatch) => {
  axios
    .get(`${baseUrl}/user/${address}`)
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

//POST username
//Arguments (userName);
export const updateUsername = (userName, address) => (dispatch) => {
  let userData = {
    username: userName,
    address: address,
  };
  axios
    .patch(`${baseUrl}/user/username`, userData)
    .then((res) => {
      console.log(res.data);
      dispatch(authenticateUser(userData.address));
      // dispatch({
      //   type: UPDATE_USER,
      //   payload: res.data,
      // });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};
