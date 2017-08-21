import { CHANGE_PRICE } from '../actions';

const INITIAL_STATE = { price: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_PRICE':
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

