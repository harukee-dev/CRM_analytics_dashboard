import { combineReducers, configureStore } from '@reduxjs/toolkit'
import timeIntervalReducer from './reducers/TimeIntervalSlice'

const rootReducer = combineReducers({
  timeIntervalReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
