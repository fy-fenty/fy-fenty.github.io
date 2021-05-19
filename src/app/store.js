import { combineReducers, configureStore } from '@reduxjs/toolkit';
import article from '../store/article';
import news from '../store/news';

const reducers = combineReducers({
  article,
  news
});

export default configureStore({
  reducer: reducers
});
