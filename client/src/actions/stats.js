import axios from 'axios';

import { FETCH_STATS, FETCH_MATCHES } from './types';

export const fetchStats = (username, history = null) => dispatch => {
  if (!username.trim()) {
    dispatch({
      type: FETCH_STATS,
      payload: {
        error: 'Invalid Username'
      }
    });
  } else {
    axios.get(`/stats/pc/${username}`).then(res => {
      if (!res.data.error) {
        if (history) {
          history.push(`/user/${username}`);
        }
      }

      dispatch({
        type: FETCH_STATS,
        payload: res.data
      });
    });
  }
};

export const clearStats = () => {
  return {
    type: FETCH_STATS,
    payload: null
  };
};

export const fetchMatches = id => async dispatch => {
  const res = await axios.get(`/stats/matches/${id}`);

  dispatch({
    type: FETCH_MATCHES,
    payload: res.data
  });
};

export const clearMatches = () => {
  return {
    type: FETCH_MATCHES,
    payload: null
  };
};
