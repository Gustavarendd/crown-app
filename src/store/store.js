import { compose, applyMiddleware, legacy_createStore } from 'redux';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// const loggerMiddleware = store => next => action => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('currentState: ', action.getState());

//   next(action);

//   console.log('next state: ', store.getState());
// };

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers,
);
