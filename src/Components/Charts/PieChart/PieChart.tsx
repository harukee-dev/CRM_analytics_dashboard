import { useEffect, useState } from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'
import cl from './customTooltip.module.css'
import { useAppSelector } from '../../../store/hooks/redux'

export const PieChartComponent = () => {
  const [data, setData] = useState<any>(null)

  const { time_interval } = useAppSelector((state) => state.timeIntervalReducer)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/revenue')
      const json = await response.json()

      if (time_interval == 'month') {
        const lastMonth = json[json.length - 1]

        const channels = Object.entries(lastMonth.channels).map(
          ([name, value]) => ({
            name,
            value,
          }),
        )

        setData(channels)
      } else {
        const lastMonths =
          time_interval == 'quarter'
            ? json.slice(json.length - 4, json.length - 1)
            : json
        const channelsSum: Record<string, number> = {}

        for (let i = 0; i < lastMonths.length; i++) {
          const channels = lastMonths[i].channels

          Object.entries(channels).forEach(([name, value]) => {
            if (!channelsSum[name]) {
              channelsSum[name] = 0
            }
            channelsSum[name] += value as number
          })
        }

        const channels = Object.entries(channelsSum).map(([name, value]) => ({
          name,
          value,
        }))

        setData(channels)
      }
    }

    fetchData()
  }, [time_interval])

  if (!data) return <p>loading</p>

  return (
    <PieChart width={400} height={400}>
      <Pie
        fill="#3af65057"
        data={data}
        dataKey="value"
        nameKey="name"
        label
        innerRadius="50%"
      />
      {/* @ts-ignore */}
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  )
}

interface ICustomToolip {
  active: any
  payload: any
  label: any
}

const CustomTooltip = ({ active, payload }: ICustomToolip) => {
  if (active && payload && payload.length) {
    return (
      <div className={cl.container}>
        <p className={cl.textLabel}>{payload[0].name}</p>
        <p className={cl.textPayload}>{payload[0].value}</p>
      </div>
    )
  }
  return null
}
