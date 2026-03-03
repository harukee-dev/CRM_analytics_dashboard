import { useState, useEffect } from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

export const AreaChartComponent = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/revenue')
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  if (!data) return <p>loading</p>

  return (
    <div>
      <h1>area chart</h1>
      <AreaChart width={800} height={600} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="5 5" />
        <Area
          type="natural"
          dataKey="deals"
          fill="#3af65057"
          stroke="#3cf774"
        />
      </AreaChart>
    </div>
  )
}
