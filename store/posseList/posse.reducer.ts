import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../data/schema/Character";
import { Posse } from "../../data/schema/Posse";
import { MOCK_POSSE_LIST } from "../../mocks/PosseList";

export type PosseState = {
  posseList: Posse[];
  selectedPosse?: Posse;
};

const initialState: PosseState = {
  posseList: MOCK_POSSE_LIST,
  selectedPosse: undefined,
};

export const posseSlice = createSlice({
  name: "Posse",
  initialState: initialState,
  reducers: {
    addNewPosse: (state, action: PayloadAction<Posse>) => {
      state.posseList.push(action.payload);
    },
    addNewCharacter: (state, action: PayloadAction<Character>) => {
      state.selectedPosse?.characters.push(action.payload);
    },
  },
});

export default posseSlice.reducer;

export const { addNewPosse, addNewCharacter } = posseSlice.actions;
