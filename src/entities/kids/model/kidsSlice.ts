// entities/kids/model/kidsSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Kid, KidsState } from './types';

const initialState: KidsState = {
  kids: [],
  loading: false,
  error: null,
  currentKid: null,
};

const kidsSlice = createSlice({
  name: 'kids',
  initialState,
  reducers: {
    addKid: (state, action: PayloadAction<Kid>) => {
      state.kids.push(action.payload);
    },
    removeKid: (state, action: PayloadAction<number>) => {
      state.kids = state.kids.filter(kid => kid.id !== action.payload);
    },
    setCurrentKid: (state, action: PayloadAction<Kid | null>) => {
      state.currentKid = action.payload;
    },
    setKids: (state, action: PayloadAction<Kid[]>) => {   // на всякий случай
      state.kids = action.payload;
    },
    clearKids: (state) => {
      state.kids = [];
    },
  },
});

export const {
  addKid,
  removeKid,
  setCurrentKid,
  setKids,
  clearKids
} = kidsSlice.actions;

export default kidsSlice.reducer;