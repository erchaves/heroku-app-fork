import createStore from './createStore';
import reducer from './reducer';

const Store = {};

Store.create = function (initialState) {
  return createStore(reducer, initialState);
};

export default Store;
