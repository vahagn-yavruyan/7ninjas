import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import CartReducer from './reducer_cart';

const rootReducer = combineReducers({
  items: ItemsReducer,
  cart: CartReducer
});

export default rootReducer;
