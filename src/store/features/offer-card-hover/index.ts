import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type HoverState = {
  hoveredOfferId: string | null;
}

const initialState: HoverState = {
  hoveredOfferId: null,
};

export const hoverSlice = createSlice({
  name: 'hover',
  initialState,
  reducers: {
    hoveredOfferId: (state, action: PayloadAction<string>) => {
      state.hoveredOfferId = action.payload;
    },
    hoveredOfferIdReset: (state) => {
      state.hoveredOfferId = null;
    },
  },
});

export const { hoveredOfferId, hoveredOfferIdReset} = hoverSlice.actions;
export default hoverSlice.reducer;
