import { useAppSelector } from "../hooks";
import { createSelector } from "reselect";
import { PosseState } from "./posse.reducer";

// basic reducer to return the posse state
// export const selectPosseListReducer = useAppSelector(
//   (state) => state.posseState,
// );

// export const selectPosseList = useAppSelector(
//   (state) => state.posseState.posseList,
// );

// export const selectPosseById = useAppSelector((state) =>
//   state.posseState.posseList.find((x) => x.posseId),
// );

// or
// requires the package "reselect"

const selectAllPossesReducer = (state: PosseState) => state.posseList;
const selectSelectedPosseReducer = (state: PosseState) => state.selectedPosse;
// export const selectAllPosses = createSelector(
//   [selectAllPossesReducer],
//   (posseState: PosseState) => posseState.posseList,
// );
const selectPosseById = createSelector(
  [selectAllPossesReducer, id],
  (state: PosseState) => state.posseList.find(x => x.posseId == ),
);
