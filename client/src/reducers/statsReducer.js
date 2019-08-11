import { FETCH_STATS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_STATS:
      return (state = action.payload);
    default:
      return state;
  }
}
