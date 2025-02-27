"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../components/cards"
import { ArrowUp } from "../components/icons"

export default function Home() {
  const salesData = [
    { month: "January", value: 2000 },
    { month: "February", value: 3500 },
    { month: "March", value: 1700 },
    { month: "April", value: 1800 },
    { month: "May", value: 2500 },
    { month: "June", value: 3000 },
  ]

  const transactionsData = [
    { month: "January", value: 1800 },
    { month: "February", value: 2200 },
    { month: "March", value: 1900 },
    { month: "April", value: 2800 },
    { month: "May", value: 2300 },
    { month: "June", value: 2100 },
  ]

  const buysData = [
    { name: "Clicks", value: 23500, color: "#2F96BD" },
    { name: "Buys", value: 0, color: "#E5AE00" },
  ]

  const visitorsData = [
    { month: "January", value: 1500 },
    { month: "February", value: 2500 },
    { month: "March", value: 2000 },
    { month: "April", value: 2200 },
    { month: "May", value: 1900 },
    { month: "June", value: 2000 },
  ]

  const depositsData = [
    { name: "Small Deposits\n< $100", value: 700 },
    { name: "Medium Deposits\n($100-$500)", value: 1200 },
    { name: "Large Deposits\n(>$500)", value: 900 },
  ]

  const currenciesData = [
    { name: "ETH", percentage: 78.6, value: "$1,251.46" },
    { name: "BNB", percentage: 78.6, value: "$1,251.46" },
    { name: "USDT (BSC)", percentage: 78.6, value: "$1,251.46" },
    { name: "USDT (ETH)", percentage: 78.6, value: "$1,251.46" },
  ]

  const utmSourcesData = [
    { name: "UNKNOWN", percentage: 78.6, value: "$1,251.46" },
    { name: "CPC", percentage: 78.6, value: "$1,251.46" },
    { name: "COIN REPUBLIC", percentage: 78.6, value: "$1,251.46" },
    { name: "COINZILLA", percentage: 78.6, value: "$1,251.46" },
    { name: "X", percentage: 78.6, value: "$1,251.46" },
    { name: "CPC", percentage: 78.6, value: "$1,251.46" },
  ]

  const tokenSoldData = [
    { month: "JAN", value: 800 },
    { month: "FEB", value: 1200 },
    { month: "MAR", value: 900 },
  ]

  const rewardsData = [
    { name: "Paid Out", value: 90000, color: "#2F96BD" },
    { name: "Pending", value: 60000, color: "#E5AE00" },
  ]

  return (
    <div className="bg-[#121212] min-h-screen p-6">
      <h1 className="text-[20px] text-[#fff] font-[700] tracking-[0.139px] mb-6">ANALYTICS</h1>

      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>TOTAL SALES</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">TOTAL SALES VALUE</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold text-[#E5AE00]">$1,592.08</span>
              <span className="text-xs text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3" /> 43%
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 10 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999", fontSize: 10 }}
                  tickFormatter={(value) => `${value}k`}
                />
                <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} labelStyle={{ color: "#fff" }} />
                <Bar dataKey="value" fill="#2F96BD" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* TOTAL NUMBER OF TRANSACTIONS */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>TOTAL NUMBER OF TRANSACTIONS</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">TOTAL NUMBER OF TRANSACTIONS</p>
            <div className="mt-1">
              <span className="text-xl font-bold text-[#E5AE00]">34,560</span>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={transactionsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 10 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999", fontSize: 10 }}
                  tickFormatter={(value) => `${value}k`}
                />
                <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} labelStyle={{ color: "#fff" }} />
                <Area type="monotone" dataKey="value" stroke="#2F96BD" fill="#2F96BD" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* INITIATED BUYS */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>INITIATED BUYS</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">TOTAL NUMBER OF CLICKS & BUYS</p>
            <div className="mt-1">
              <span className="text-xl font-bold text-[#E5AE00]">343,560</span>
            </div>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative w-full h-[200px] flex items-center justify-center">
              {/* <ResponsiveContainer width="100%" height={200}>
                <PieChart >
                  <Pie
                    data={buysData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    className="outline-none text-white"
                  >
                    {buysData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", color: "#fff" }}  />
                </PieChart>
              </ResponsiveContainer> */}
              <div className="h-40 w-40 border border-[#2C2C2C] rounded-full bg-[#2F96BD]">

              </div>
              <div className="absolute flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-white">23.5k</div>
                <div className="absolute top-[-50px] right-[-90px] bg-[#E5AE00] rounded-full w-20 h-20 flex items-center justify-center border border-[#2C2C2C]">
                  <span className="text-white text-xl font-bold">532</span>
                </div>
              </div>
              <div className="absolute bottom-0 w-full flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2F96BD]"></div>
                  <span className="text-xs">Clicks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E5AE00]"></div>
                  <span className="text-xs">Buys</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WEBSITE VISITORS */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>WEBSITE VISITORS</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">TOTAL USER ENGAGEMENT</p>
            <div className="mt-1">
              <span className="text-xl font-bold text-[#E5AE00]">324,560</span>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={visitorsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 10 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#999", fontSize: 10 }}
                  tickFormatter={(value) => `${value}k`}
                />
                <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} labelStyle={{ color: "#fff" }} />
                <Area type="monotone" dataKey="value" stroke="#2F96BD" fill="#2F96BD" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* SALER PER VISITOR */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>SALER PER VISITOR</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">TOTAL SALES VALUE</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold text-[#E5AE00]">2.3%</span>
              <ArrowUp className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <div className="relative w-full h-[200px] flex flex-col items-center justify-center">
              <div className="w-40 h-40 rounded-full border-[16px] relative">
                <div
                  className="absolute -top-4 -left-4 w-40 h-40 rounded-full border-[16px] border-transparent border-t-[#E5AE00] border-l-[#E5AE00]"
                  style={{ transform: "rotate(314deg)" }}
                ></div>
                <div className="absolute top-[-15px] left-[50%] w-4 h-4 bg-white rounded-full transform -translate-x-1/2"></div>
              </div>
              <div className="absolute flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-white">40%</div>
                <div className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">conversion rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>TOTAL DEPOSITS</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">Number of Deposits from Users</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold text-[#E5AE00]">$1,592.08</span>
              <span className="text-xs text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3" /> 43%
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={depositsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 10 }} />
                <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} labelStyle={{ color: "#fff" }} />
                <Bar dataKey="value" fill="#2F96BD" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* CURRENCIES USES */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>CURRENCIES USES</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">WHAT PERCENTAGE OF CURRENCIES ARE MOST USED</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currenciesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="w-24 text-sm">{item.name}</div>
                  <div className="flex-1 mx-2">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2F96BD] rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                  <div className="w-20 text-right text-sm">{item.percentage}%</div>
                  <div className="w-24 text-right text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* UTM SOURCES */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>UTM SOURCES</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">USERS MAKING PURCHASES FROM WHICH UTM SOURCE</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {utmSourcesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="w-32 text-sm">{item.name}</div>
                  <div className="flex-1 mx-2">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2F96BD] rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                  <div className="w-20 text-right text-sm">{item.percentage}%</div>
                  <div className="w-24 text-right text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* TOTAL TOKEN SOLD */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>TOTAL TOKEN SOLD</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">TOTAL SALES VALUE</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-bold text-[#E5AE00]">$1,592.08</span>
              <span className="text-xs text-green-500 flex items-center">
                <ArrowUp className="h-3 w-3" /> 43%
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={tokenSoldData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 10 }} />
                <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} labelStyle={{ color: "#fff" }} />
                <Bar dataKey="value" fill="#2F96BD" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* USDT REWARDS & PAYOUTS */}
        <Card className="text-white">
          <CardHeader className="pb-2">
            <CardTitle>USDT REWARDS & PAYOUTS</CardTitle>
            <p className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">TOTAL USDT REWARDS PAID OUT / NOT PAID</p>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Paid Out", value: 90000, color: "#2F96BD" },
                      { name: "Pending", value: 60000, color: "#E5AE00" },
                    ]}
                    cx="50%"
                    cy="50%"
                    startAngle={180}
                    endAngle={-180}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="#1E1E1E"
                    strokeWidth={4}
                  >
                    {rewardsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-white">$150,000</div>
                <div className="text-[12px] text-[#AAA] font-[700] tracking-[0.139px]">Total Rewards</div>
              </div>
              <div className="absolute bottom-0 w-full flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2F96BD]"></div>
                  <span className="text-xs">Paid Out</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E5AE00]"></div>
                  <span className="text-xs">Pending</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

