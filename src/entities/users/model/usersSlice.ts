import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User, UsersState } from './types';

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  currentUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {     // полезно для ручного обновления
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
  // extraReducers убраны, потому что загрузка идёт через RTK Query
});

export const {
  addUser,
  removeUser,
  setCurrentUser,
  setUsers,
  clearUsers
} = usersSlice.actions;

export default usersSlice.reducer;