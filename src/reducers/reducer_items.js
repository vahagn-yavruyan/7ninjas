import _ from 'lodash';

import { FETCH_ITEMS } from '../actions';
import { DELETE_ITEM } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload.data;
    case DELETE_ITEM:
      return _.filter(state, ({id}) => id !== action.payload.data.id);
    default:
      return state;
  }
};

