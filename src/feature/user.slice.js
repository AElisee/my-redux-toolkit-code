import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
  },
  reducers: {
    setusersData: (state, action) => {
      state.users = action.payload;
    },
    addUserLike: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, likes: action.payload.likes };
        } else return user;
      });
    },
  },
});

export const { setusersData, addUserLike } = usersSlice.actions;
export default usersSlice.reducer;
