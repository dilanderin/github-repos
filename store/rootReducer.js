import { combineReducers } from 'redux';
import repository from './repository/reducers';

const rootReducers = combineReducers({
  repository,
});

export default rootReducers;
