import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

export const BarChartComponent = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/manager_stats')
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  if (!data) return <p>loading</p>
  return (
    <BarChart width={800} height={600} data={data}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Bar fill="#3bf573" dataKey="totalRevenue" />
    </BarChart>
  )
}
