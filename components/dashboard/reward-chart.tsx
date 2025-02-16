"use client"

import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from '@/components/ui/chart';
import {Bar, BarChart, CartesianGrid, Cell, XAxis} from 'recharts';
import {chartData} from '@/data/mockData';

const chartConfig = {
  points: {
    label: "Points",
    color: "hsl(var(--primary))",
  }
} satisfies ChartConfig

  export default function RewardChart() {
    return (
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false}/>
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => {
              const date = new Date(value)
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="w-[150px]"
                nameKey="points"
                labelFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                }}
              />
            }
          />
          <Bar dataKey="points" fill={`var(--color-points)`}>
            {chartData.map((entry, index) => (
              <Cell key={index}
                    fill={entry.source === "use" ? "hsl(var(--foreground))" : entry.source === "earn" ? "hsl(var(--primary))" : "hsl(var(--chart-2))"}/>
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    )
  };
