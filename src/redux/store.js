import { configureStore } from '@reduxjs/toolkit';
import NewReducer from './reducers';

export default configureStore({
  reducer: {
    todos: NewReducer,
  },
});