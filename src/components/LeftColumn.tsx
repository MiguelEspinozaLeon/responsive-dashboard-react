import { Card, Text, Metric, Flex, BadgeDelta, AreaChart, Title } from "@tremor/react"
import DataTable from "./DataTable"

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const valueFormatter = function(number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2 gap-2">
        <div className="flex flex-col lg:flex-row gap-2 w-full justify-between">
        <Card className="w-sm">
          <Flex justifyContent="between" alignItems="center">
            <Text>Sales</Text>
            <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
              +12.3%
            </BadgeDelta>
          </Flex>
          <Metric>$ 23,456</Metric>
        </Card>
        <Card className="w-sm">
          <Flex justifyContent="between" alignItems="center">
            <Text>Sales</Text>
            <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
              +12.3%
            </BadgeDelta>
          </Flex>
          <Metric>$ 23,456</Metric>
        </Card>
        <Card className="w-sm">
          <Flex justifyContent="between" alignItems="center">
            <Text>Sales</Text>
            <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
              +12.3%
            </BadgeDelta>
          </Flex>
          <Metric>$ 23,456</Metric>
        </Card>
        <Card className="w-sm">
          <Flex justifyContent="between" alignItems="center">
            <Text>Sales</Text>
            <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
              +12.3%
            </BadgeDelta>
          </Flex>
          <Metric>$ 23,456</Metric>
        </Card>
            
        </div>
        <div className="flex-auto w-full">
        <Card>
          <Title>Newsletter revenue over time (USD)</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="date"
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            colors={["indigo", "cyan"]}
            valueFormatter={valueFormatter}
          />
        </Card>
        </div>
        <div className="flex-auto w-full">
          <DataTable />
        </div>
    </div>
  )
}

export default LeftColumn