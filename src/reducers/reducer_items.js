import { FETCH_ITEMS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return action.payload.data;
    default:
      return state;
  }
};

