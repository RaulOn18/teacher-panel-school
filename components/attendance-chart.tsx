"use client";

import { LabelList, Pie, PieChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { status: "hadir", value: 132, fill: "var(--color-hadir)" },
  { status: "absen", value: 6, fill: "var(--color-absen)" },
  { status: "izin", value: 10, fill: "var(--color-izin)" },
  { status: "sakit", value: 8, fill: "var(--color-sakit)" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  hadir: {
    label: "Hadir",
    color: "hsl(var(--chart-1))",
  },
  absen: {
    label: "Absen",
    color: "hsl(var(--chart-2))",
  },
  izin: {
    label: "Izin",
    color: "hsl(var(--chart-3))",
  },
  sakit: {
    label: "Sakit",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function AttendanceChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-start pb-0">
        <CardTitle>Kehadiran</CardTitle>
        <CardDescription>Persentase Kehadiran minggu ini</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="status"
              innerRadius={60}
              label={true}
              labelLine={true}
            />
            <LabelList dataKey="status" position="outside" offset={10} />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
