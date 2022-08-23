import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {
    setpostsData: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    addLike: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, likes: action.payload.likes };
        } else return post;
      });
    },
  },
});

export const { setpostsData, addPost, addLike } = postsSlice.actions;
export default postsSlice.reducer;
