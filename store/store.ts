import { configureStore } from '@reduxjs/toolkit'
import { posseSlice } from './posseList/posse.reducer'

export const store = configureStore({
	reducer: {
		// posseState: posseSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;