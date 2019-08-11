import axios from 'axios';

import { FETCH_STATS, FETCH_MATCHES } from './types';

export const fetchStats = (username, history = null) => async dispatch => {
  const res = await axios.get(`/stats/pc/${username}`);

  if (history) {
    history.push(`/user/${username}`);
  }

  dispatch({
    type: FETCH_STATS,
    payload: res.data
  });
};

export const fetchMatches = id => async dispatch => {
  const res = await axios.get(`/stats/matches/${id}`);

  dispatch({
    type: FETCH_MATCHES,
    payload: res.data
  });
};
