import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface HoverState {
  hoveredOfferId: string | null;
}

const initialState: HoverState = {
  hoveredOfferId: null,
};

export const hoverSlice = createSlice({
  name: 'hover',
  initialState,
  reducers: {
    setHoveredOfferId: (state, action: PayloadAction<string>) => {
      state.hoveredOfferId = action.payload;
    },
    resetHoveredOfferId: (state) => {
      state.hoveredOfferId = null;
    },
  },
});

export const { setHoveredOfferId, resetHoveredOfferId } = hoverSlice.actions;
export default hoverSlice.reducer;
