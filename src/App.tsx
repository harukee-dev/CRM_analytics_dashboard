import { AreaChartComponent } from './Components/Charts/AreaChart/AreaChart'
import { BarChartComponent } from './Components/Charts/BarChart/BarChart'
import { LineChartComponent } from './Components/Charts/LineChart/LineChart'
import { PieChartComponent } from './Components/Charts/PieChart/PieChart'

function App() {
  return (
    <div style={{ backgroundColor: '#1F1F1F' }}>
      {/* <h1>Hello world!</h1>
      <AreaChartComponent />
      <BarChartComponent />
      <LineChartComponent /> */}
      <PieChartComponent />
    </div>
  )
}

export default App
