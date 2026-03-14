import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux'
import { TimeIntervalSlice } from '../../../store/reducers/TimeIntervalSlice'
import cl from './timeIntervalPicker.module.css'

export const TimeIntervalPicker = () => {
  const dispatch = useAppDispatch()
  const { setTimeInterval } = TimeIntervalSlice.actions
  const { time_interval } = useAppSelector((state) => state.timeIntervalReducer)

  const handleClick = (state: 'month' | 'quarter' | 'year') => {
    dispatch(setTimeInterval(state))
  }

  return (
    <div className={cl.container}>
      <button
        className={time_interval === 'month' ? cl.buttonActive : cl.button}
        onClick={() => handleClick('month')}
      >
        Month
      </button>
      <button
        className={time_interval === 'quarter' ? cl.buttonActive : cl.button}
        onClick={() => handleClick('quarter')}
      >
        Quarter
      </button>
      <button
        className={time_interval === 'year' ? cl.buttonActive : cl.button}
        onClick={() => handleClick('year')}
      >
        Year
      </button>
    </div>
  )
}
