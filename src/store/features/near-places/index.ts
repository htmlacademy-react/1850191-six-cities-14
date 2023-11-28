import { createSlice } from '@reduxjs/toolkit';
import { fetchNearPlaces } from './thunk-near-places';
import { NearPlacesType } from '../../../types/near-place';


interface nearPlacesState {
  offers: NearPlacesType;
  loading: boolean;
}

const initialState: nearPlacesState = {
  offers: [],
  loading: false,
};

const nearPlacesSlice = createSlice({
  name: 'nearPlaces',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearPlaces.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loading = false;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default nearPlacesSlice.reducer;

