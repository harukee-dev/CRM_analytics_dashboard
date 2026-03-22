import { PieChartComponent } from '../../Charts/PieChart/PieChart'
import cl from './channelsPie.module.css'

export const ChannelsPie = () => {
  return (
    <div className={cl.container}>
      <p className={cl.title}>Channels</p>
      <PieChartComponent />
    </div>
  )
}
