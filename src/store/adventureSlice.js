import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adventures: [],
};

const adventureSlice = createSlice({
  name: "adventures",
  initialState,
  reducers: {
    getAdventures: (state, action) => {
      state.adventures = action.payload;
    },
  },
});

export const { getAdventures } = adventureSlice.actions;
export default adventureSlice.reducer;
