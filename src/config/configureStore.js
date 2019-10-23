import { createStore, combineReducers } from 'redux';
// import createLogger from 'redux-logger';
// import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers
    }),
    {}
  );
}