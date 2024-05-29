import { useAppSelector } from 'store/hooks';


// basic reducer to return the posse state
export const selectPosseListReducer = useAppSelector((state) => state.posseState);

export const selectPosseList = useAppSelector((state) => state.posseState.posseList);

// export const selectPosseById = useAppSelector((state) => state.posseState.posseList.find(x => x.posseId));


// or
// requires the package "reselect"
// const selectPosseById = createSelector([selectPosseListReducer], (state: PosseState) => state.posseList.find(x => x.posseId));