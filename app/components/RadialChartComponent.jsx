import { PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RadialChartComponent({ value, title, description }) {
  const chartData = [{ name: "Value", value: value, fill: "#ff7300" }] // Ensure a valid color

  const endAngle = 90 - (value / 100) * 360 // Recharts uses 90° as the top

  return (
    <Card className="w-full">
      <CardHeader className="p-4">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="aspect-square h-24 w-24 mx-auto">
          <RadialBarChart 
            width={100} 
            height={100} 
            cx="50%" 
            cy="50%" 
            innerRadius="60%" 
            outerRadius="100%" 
            data={chartData} 
            startAngle={90} // Start from top
            endAngle={endAngle} // Dynamically set
          >
            <PolarGrid gridType="circle" radialLines={false} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <RadialBar dataKey="value" background={{ fill: "#eee" }} />
          </RadialBarChart>
        </div>
        <div className="mt-2 text-center">
          <span className="text-2xl font-bold">{value}%</span>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
