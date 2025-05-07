"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
type chartDataType = {
  month: string;
  average: number;
};

const chartData = [
  { month: "January", average: 186 },
  { month: "February", average: 305 },
  { month: "March", average: 237 },
  { month: "April", average: 73 },
  { month: "May", average: 209 },
  { month: "June", average: 214 },
];

const chartConfig = {
  average: {
    label: "Average",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function TrenNilaiRataRata({
  chartData,
}: {
  chartData: chartDataType[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nilai Siswa</CardTitle>
        <CardDescription>Nilai rata-rata siswa di kelas</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 200,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="average"
              type="natural"
              stroke="var(--color-average)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-average)",
              }}
              activeDot={{
                r: 4,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
