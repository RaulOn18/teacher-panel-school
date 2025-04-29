"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
type ChartDataType = {
  status: string;
  visitors: number;
  fill: string;
};

const chartData: ChartDataType[] = [
  { status: "sudah", visitors: 120, fill: "var(--color-sudah)" },
  { status: "belum", visitors: 36, fill: "var(--color-belum)" },
];

const chartConfig = {
  visitors: {
    label: "Data",
  },
  sudah: {
    label: "Sudah",
    color: "hsl(var(--chart-1))",
  },
  belum: {
    label: "Belum",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AssigmentCollectionChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pengumpulan Tugas</CardTitle>
        <CardDescription>Status pengumpulan tugas terakhir</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
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
