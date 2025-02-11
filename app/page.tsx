"use client"

import {Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, XAxis} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {Progress} from '@/components/ui/progress';
import {Avatar, AvatarFallback} from '@/components/ui/avatar';

const chartData = [
  { date: "2024-04-01", points: 222 },
  { date: "2024-04-02", points: 97 },
  { date: "2024-04-03", points: 167 },
  { date: "2024-04-04", points: 242 },
  { date: "2024-04-05", points: 373 },
  { date: "2024-04-06", points: 301 },
  { date: "2024-04-07", points: 245 },
  { date: "2024-04-08", points: 409 },
  { date: "2024-04-09", points: 59 },
  { date: "2024-04-10", points: 26 },
  { date: "2024-04-11", points: 327 },
  { date: "2024-04-12", points: 292 },
  { date: "2024-04-13", points: 342 },
  { date: "2024-04-14", points: 137 },
  { date: "2024-04-15", points: 120 },
  { date: "2024-04-16", points: 138 },
  { date: "2024-04-17", points: 446 },
  { date: "2024-04-18", points: 364 },
  { date: "2024-04-19", points: 243 },
  { date: "2024-04-20", points: 89 },
  { date: "2024-04-21", points: 137 },
  { date: "2024-04-22", points: 224 },
  { date: "2024-04-23", points: 138 },
  { date: "2024-04-24", points: 387 },
  { date: "2024-04-25", points: 215 },
  { date: "2024-04-26", points: 75 },
  { date: "2024-04-27", points: 383 },
  { date: "2024-04-28", points: 122 },
  { date: "2024-04-29", points: 315 },
  { date: "2024-04-30", points: 454 },
  { date: "2024-05-01", points: 165 },
  { date: "2024-05-02", points: 293 },
  { date: "2024-05-03", points: 247 },
  { date: "2024-05-04", points: 385 },
  { date: "2024-05-05", points: 481 },
  { date: "2024-05-06", points: 498 },
  { date: "2024-05-07", points: 388 },
  { date: "2024-05-08", points: 149 },
  { date: "2024-05-09", points: 227 },
  { date: "2024-05-10", points: 293 },
  { date: "2024-05-11", points: 335 },
  { date: "2024-05-12", points: 197 },
  { date: "2024-05-13", points: 197 },
  { date: "2024-05-14", points: 448},
  { date: "2024-05-15", points: 473 },
  { date: "2024-05-16", points: 338 },
  { date: "2024-05-17", points: 499 },
  { date: "2024-05-18", points: 315 },
  { date: "2024-05-19", points: 235 },
  { date: "2024-05-20", points: 177 },
  { date: "2024-05-21", points: 82 },
  { date: "2024-05-22", points: 81 },
  { date: "2024-05-23", points: 252 },
  { date: "2024-05-24", points: 294 },
  { date: "2024-05-25", points: 201 },
  { date: "2024-05-26", points: 213 },
  { date: "2024-05-27", points: 420 },
  { date: "2024-05-28", points: 233 },
  { date: "2024-05-29", points: 78 },
  { date: "2024-05-30", points: 340 },
  { date: "2024-05-31", points: 178 },
  { date: "2024-06-01", points: 178 },
  { date: "2024-06-02", points: 470 },
  { date: "2024-06-03", points: 103 },
  { date: "2024-06-04", points: 439 },
  { date: "2024-06-05", points: 88 },
  { date: "2024-06-06", points: 294 },
  { date: "2024-06-07", points: 323 },
  { date: "2024-06-08", points: 385 },
  { date: "2024-06-09", points: 438},
  { date: "2024-06-10", points: 155 },
  { date: "2024-06-11", points: 92 },
  { date: "2024-06-12", points: 492 },
  { date: "2024-06-13", points: 81 },
  { date: "2024-06-14", points: 426 },
  { date: "2024-06-15", points: 307 },
  { date: "2024-06-16", points: 371 },
  { date: "2024-06-17", points: 475 },
  { date: "2024-06-18", points: 107 },
  { date: "2024-06-19", points: 341 },
  { date: "2024-06-20", points: 408 },
  { date: "2024-06-21", points: 169 },
  { date: "2024-06-22", points: 317 },
  { date: "2024-06-23", points: 480 },
  { date: "2024-06-24", points: 132 },
  { date: "2024-06-25", points: 141 },
  { date: "2024-06-26", points: 434 },
  { date: "2024-06-27", points: 448 },
  { date: "2024-06-28", points: 149 },
  { date: "2024-06-29", points: 103 },
  { date: "2024-06-30", points: 446 },
]

const chartConfig = {
  points: {
    label: "Points",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig


export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>James Suderman</CardTitle>
            <CardDescription>Active reward member since January 5, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full flex flex-col gap-1">
              <Progress value={60} className="w-full" />
              <div className="text-sm ml-auto">Next Reward @ 1600</div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="ml-auto flex gap-2">
              <Avatar>
                <AvatarFallback>XP</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>EP</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>GS</AvatarFallback>
              </Avatar>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Monthly reward activity</CardTitle>
            <CardDescription>Loyalty program achievements</CardDescription>
          </CardHeader>
          <CardContent>
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
                <CartesianGrid vertical={false} />
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
                      nameKey="views"
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
                <Bar dataKey="points" fill={`var(--color-points)`} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Recommended achievements</CardTitle>
            <CardDescription>Hand crafted achievements to earn loyalty points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full flex gap-4 justify-between">
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
