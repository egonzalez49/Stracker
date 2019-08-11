import { FETCH_MATCHES } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MATCHES:
      return (state = action.payload);
    default:
      return state;
  }
}
