import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adventures: [],
};

const adventureSlice = createSlice({
  name: "adventures",
  initialState,
  reducers: {
    setAdventures: (state, action) => {
      state.adventures = action.payload;
    },
  },
});

export const { setAdventures } = adventureSlice.actions;
export default adventureSlice.reducer;
