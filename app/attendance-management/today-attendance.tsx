"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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

type chartData = {
  name: string;
  value: number;
  fill: string;
};
// const chartData: chartData[] = [
//   { name: "hadir", value: 275, color: "var(--color-chrome)" },
//   { name: "izin", value: 200, color: "var(--color-safari)" },
//   { name: "sakit", value: 187, color: "var(--color-firefox)" },
//   { name: "absen", value: 173, color: "var(--color-edge)" },
// ];

const chartConfig = {
  value: {
    label: "value",
  },
  hadir: {
    label: "Hadir",
    color: "hsl(var(--chart-1))",
  },
  izin: {
    label: "Izin",
    color: "hsl(var(--chart-2))",
  },
  sakit: {
    label: "Sakit",
    color: "hsl(var(--chart-3))",
  },
  absen: {
    label: "Absen",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function TodayAttendance({ data }: { data: chartData[] }) {
  return (
    <Card className="flex flex-col flex-1 rounded-md">
      <CardHeader className="items-center pb-0">
        <CardTitle>Kehadiran Hari ini</CardTitle>
        <CardDescription>
          {new Date(Date.now()).toLocaleString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
