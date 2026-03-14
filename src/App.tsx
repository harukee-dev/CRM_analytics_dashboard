import { BrowserRouter } from 'react-router-dom'
// import { AreaChartComponent } from './Components/Charts/AreaChart/AreaChart'
// import { BarChartComponent } from './Components/Charts/BarChart/BarChart'
// import { LineChartComponent } from './Components/Charts/LineChart/LineChart'
// import { PieChartComponent } from './Components/Charts/PieChart/PieChart'
import { Header } from './Components/Header/Header'
import { ChannelsPie } from './Components/Dashboard/ChannelsPie/ChannelsPie'
import { useAppDispatch, useAppSelector } from './store/hooks/redux'
import { TimeIntervalSlice } from './store/reducers/TimeIntervalSlice'

function App() {
  const { time_interval } = useAppSelector((state) => state.timeIntervalReducer)
  const { setTimeInterval } = TimeIntervalSlice.actions
  const dispatch = useAppDispatch()

  const handleClick = (state: 'month' | 'quarter' | 'year') => {
    dispatch(setTimeInterval(state))
  }

  return (
    <BrowserRouter>
      <div
        style={{ backgroundColor: '#131313', width: '100vw', height: '100vh' }}
      >
        <button onClick={() => handleClick('month')}>month</button>
        <button onClick={() => handleClick('quarter')}>quarter</button>
        <button onClick={() => handleClick('year')}>year</button>
        {/* <h1>Hello world!</h1>
      <AreaChartComponent />
      <BarChartComponent />
      <LineChartComponent /> */}
        <Header />
        <ChannelsPie />
      </div>
    </BrowserRouter>
  )
}

export default App
