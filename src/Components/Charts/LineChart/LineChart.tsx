import { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts'

export const LineChartComponent = () => {
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
    <LineChart width={800} height={600} data={data}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <Tooltip />
      <Line stroke="#38f972" type="monotone" dataKey="revenue" />
    </LineChart>
  )
}
