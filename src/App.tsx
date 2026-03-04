import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AreaChartComponent } from './Components/Charts/AreaChart/AreaChart'
import { BarChartComponent } from './Components/Charts/BarChart/BarChart'
import { LineChartComponent } from './Components/Charts/LineChart/LineChart'
import { PieChartComponent } from './Components/Charts/PieChart/PieChart'
import { Header } from './Components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#131313' }}>
        {/* <h1>Hello world!</h1>
      <AreaChartComponent />
      <BarChartComponent />
      <LineChartComponent /> */}
        <Header />
        <PieChartComponent />
      </div>
    </BrowserRouter>
  )
}

export default App
