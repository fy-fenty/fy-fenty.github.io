import { createSlice } from '@reduxjs/toolkit'

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    list: [{
      title: '标题',
      author: '作者',
      content: '这是文章的标题.'
    }]
  },
  reducers: {
    fetch: (state, { payload }) => {
      state.list = state.list.concat(payload)
    }
  }
});

export const { fetch } = articleSlice.actions

export default articleSlice.reducer;
