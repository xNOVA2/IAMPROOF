'use client'
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    month: "jan 2023",
    users: 40,
    premiumUsers: 24,
    amt: 2400
  },
  {
    month: "feb 2023",
    users: 30,
    premiumUsers: 13,
    amt: 2210
  },
  {
    month: "mar 2023",
    users: 20,
    premiumUsers: 98,
    amt: 2290
  },
  {
    month: "apr 2023",
    users: 27,
    premiumUsers: 39,
    amt: 2000
  },
  {
    month: "may 2023",
    users: 18,
    premiumUsers: 48,
    amt: 2181
  },
  {
    month: "jun 2023",
    users: 23,
    premiumUsers: 38,
    amt: 2500
  },
  {
    month: "July 2023",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "aug 2023",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "spt 2023",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "Oct 2023",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "Nov 2023",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "dec 2023",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "Jan 2024",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "feb 2024",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "mar 2024",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
  {
    month: "apr 2024",
    users: 34,
    premiumUsers: 43,
    amt: 2100
  },
];

export default function Graph() {
  return (
    <BarChart
      width={1400}
      height={285}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
      className="rounded-lg"
      barSize={32}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis domain={[0, 120]} />
      <Tooltip />
      <Bar dataKey="users" stackId="a" fill="#439A86" className="rounded-lg"/>
      <Bar dataKey="premiumUsers" stackId="a" fill="#BCD8C1" />

    </BarChart>
  );
}
