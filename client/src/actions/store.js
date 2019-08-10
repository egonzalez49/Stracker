import axios from 'axios';

import { FETCH_STORE } from './types';

export const fetchStore = () => async dispatch => {
  const res = await axios.get('/store');

  dispatch({
    type: FETCH_STORE,
    payload: res.data
  });
};
