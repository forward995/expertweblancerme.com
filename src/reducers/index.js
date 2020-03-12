import { combineReducers } from 'redux';

import { registration } from './registration.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  registration,
  alert
});

export default rootReducer;