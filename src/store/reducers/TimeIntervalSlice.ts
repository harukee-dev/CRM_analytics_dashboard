import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface TimeIntervalState {
  time_interval: 'month' | 'quarter' | 'year'
}

const initialState: TimeIntervalState = {
  time_interval: 'month',
}

export const TimeIntervalSlice = createSlice({
  name: 'time_interval',
  initialState,
  reducers: {
    setTimeInterval(
      state,
      action: PayloadAction<'month' | 'quarter' | 'year'>,
    ) {
      state.time_interval = action.payload
    },
  },
})

export default TimeIntervalSlice.reducer
