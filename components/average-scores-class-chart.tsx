"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { tree } from "next/dist/build/templates/app-page";
const chartData = [
  { month: "January", scores: 80 },
  { month: "February", scores: 75 },
  { month: "March", scores: 90 },
  { month: "April", scores: 98 },
  { month: "May", scores: 50 },
  { month: "June", scores: 78 },
];

const chartConfig = {
  scores: {
    label: "Scores",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AverageScoresClassChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nilai Rata-rata Kelas</CardTitle>
        <CardDescription>
          Tren nilai rata-rata kelas selama 6 bulan terakhir
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false}/>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="scores"
              type="natural"
              stroke="var(--color-scores)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-scores)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Data menurun sebanyak 5.2% pada bulan ke 5 <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Menampilkan data rata-rata nilai dari 6 bulan terakhir
        </div>
      </CardFooter>
    </Card>
  );
}
