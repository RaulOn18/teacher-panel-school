"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
const chartData = [
  { grades: "A", scores: 47 },
  { grades: "B", scores: 59 },
  { grades: "C", scores: 36 },
  { grades: "D", scores: 14 },
  { grades: "E", scores: 0 },
  { grades: "F", scores: 0 },
];

const chartConfig = {
  scores: {
    label: "Scores",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function DistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribusi Nilai</CardTitle>
        <CardDescription>Distribusi nilai ujian akhir</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="grades"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="scores" fill="var(--color-scores)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Data menaik hingga 5.2% pada ujian ini{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Data ini diperoleh dari hasil ujian kenaikan semester pada lima kelas
          yang diampu
        </div>
      </CardFooter>
    </Card>
  );
}
