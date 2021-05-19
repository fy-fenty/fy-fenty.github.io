import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'news',
  initialState: {
    list: [{
      title: 'news1',
      author: 'news',
      content: 'hello news.'
    }]
  },
  reducers: {
    fetch: (state, list) => {
      state.list = state.list.concat(list);
    }
  }
})
