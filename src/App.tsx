import { BrowserRouter } from 'react-router-dom'
// import { AreaChartComponent } from './Components/Charts/AreaChart/AreaChart'
// import { BarChartComponent } from './Components/Charts/BarChart/BarChart'
// import { LineChartComponent } from './Components/Charts/LineChart/LineChart'
// import { PieChartComponent } from './Components/Charts/PieChart/PieChart'
import { Header } from './Components/Header/Header'
import { ChannelsPie } from './Components/Dashboard/ChannelsPie/ChannelsPie'
import { TimeIntervalPicker } from './Components/Dashboard/TimeIntervalPicker/TimeIntervalPicker'

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ backgroundColor: '#131313', width: '100vw', height: '100vh' }}
      >
        {/* <h1>Hello world!</h1>
      <AreaChartComponent />
      <BarChartComponent />
      <LineChartComponent /> */}
        <Header />
        <ChannelsPie />
        <TimeIntervalPicker />
      </div>
    </BrowserRouter>
  )
}

export default App
