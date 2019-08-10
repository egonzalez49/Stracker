import { FETCH_STORE } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_STORE:
      return (state = action.payload);
    default:
      return state;
  }
}
