import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartSelect from "./ChartSelect";
import { useState } from "react";

const chartData = {
  yearly: [
    { month: "Jan", total: 0 },
    { month: "Feb", total: 0 },
    { month: "Mar", total: 0 },
    { month: "Apr", total: 0 },
    { month: "May", total: 0 },
    { month: "Jun", total: 0 },
    { month: "Jul", total: 0 },
    { month: "Aug", total: 0 },
    { month: "Sep", total: 0 },
    { month: "Oct", total: 0 },
    { month: "Nov", total: 0 },
    { month: "Dec", total: 0 },
  ],
  monthly: [
    { week: "Week 1", total: 0 },
    { week: "Week 2", total: 0 },
    { week: "Week 3", total: 0 },
    { week: "Week 4", total: 0 },
  ],
  weekly: [
    { day: "Monday", total: 0 },
    { day: "Tuesday", total: 0 },
    { day: "Wednesday", total: 0 },
    { day: "Thursday", total: 0 },
    { day: "Friday", total: 0 },
  ]
  // yearly: [
  //   { month: "Jan", total: 3000 },
  //   { month: "Feb", total: 3900 },
  //   { month: "Mar", total: 4500 },
  //   { month: "Apr", total: 4100 },
  //   { month: "May", total: 2450 },
  //   { month: "Jun", total: 3000 },
  //   { month: "Jul", total: 3100 },
  //   { month: "Aug", total: 4750 },
  //   { month: "Sep", total: 3500 },
  //   { month: "Oct", total: 2010 },
  //   { month: "Nov", total: 4200 },
  //   { month: "Dec", total: 3801 },
  // ],
  // monthly: [
  //   { week: "Week 1", total: 3000 },
  //   { week: "Week 2", total: 3900 },
  //   { week: "Week 3", total: 4500 },
  //   { week: "Week 4", total: 4100 },
  // ],
  // weekly: [
  //   { day: "Monday", total: 3000 },
  //   { day: "Tuesday", total: 3900 },
  //   { day: "Wednesday", total: 4500 },
  //   { day: "Thursday", total: 4100 },
  //   { day: "Friday", total: 2450 },
  // ]
};

const total = "0.00";
const percentage = "0";

const chartConfig = {
  desktop: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
};

export function DashboardBarchart() {
  const [reportRange, setReportRange] = useState("yearly");

  const data = chartData[reportRange]; // Use the reportRange to select data

  // Compute the maximum value and apply padding
  const maxTotal = Math.max(...data.map(d => d.total));
  const padding = 0.1 * maxTotal; // 10% padding for the upper limit
  const maxDomainValue = maxTotal + padding;

  // Compute ticks for the Y-axis
  const numberOfTicks = 5;
  const ticks = Array.from({ length: numberOfTicks }, (_, i) => {
    const tickValue = (maxDomainValue / (numberOfTicks - 1)) * i;
    return Math.round(tickValue / 100) * 100; // Round to nearest 100
  }).filter((value, index, self) => self.indexOf(value) === index); // Ensure unique values

  return (
    <div className="">
      <div className='max-w-full mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8'>
        <Card className="shadow-none rounded-[20px] overflow-x-scroll overflow-y-clip">
          <CardHeader>
            <div className="w-full flex justify-between items-start">
              <div className="flex flex-col gap-7 ">
                <CardTitle className="text-xl lg:text-2xl">Earnings Report</CardTitle>
                <CardDescription className="flex gap-3 flex-col">
                  <p className="text-[#989898]">Income in 2024</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold tracking-tighter text-black text-[32px]">{total}k</p>
                    <div className="flex gap-1.5 text-[#21B557] items-center text-sm">
                      <div className="flex items-center justify-between bg-[#E9F8EE] p-1 rounded-full"><img src="/icons/box-sm.svg" alt="" /></div>
                      <span>{percentage}%</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
              <div>
                <ChartSelect reportRange={reportRange} setReportRange={setReportRange} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4 w-full">
            <ChartContainer className="max-h-[400px] min-w-[500px] ml-[-20px] sm:min-w-[100%]" config={chartConfig}>
              <BarChart
                data={data} // Pass the selected data here
                height={300} // Reduce height of the chart
                barCategoryGap={25} // Add space between bars
                barGap={8} // Add gap between individual bars
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey={reportRange === "yearly" ? "month" : reportRange === "monthly" ? "week" : "day"}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value} // Adjust as needed
                />
                {/* <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickCount={numberOfTicks} // Set number of ticks
                  domain={[0, maxDomainValue]} // Set domain from 0 to padded max value
                  interval="preserveEnd"
                  ticks={ticks} // Set ticks
                /> */}
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickCount={numberOfTicks} // Set number of ticks
                  domain={[0, 1000]} // Fixed domain from 0 to 1000
                  interval="preserveEnd"
                  ticks={[0, 200, 400, 600, 800, 1000]} // Set fixed ticks at intervals of 200
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="total" fill="#21B557" radius={6} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
