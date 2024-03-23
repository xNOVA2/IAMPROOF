'use client'
import React from "react";
import { BarChart, Bar, ResponsiveContainer, YAxis, CartesianGrid } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 20,
    
  },
  {
    name: "Page B",
    uv: 30,
    
  },
  {
    name: "Page C",
    uv: 40,
    
  },
  {
    name: "Page D",
    uv: 50,
    
  },
  {
    name: "Page E",
    uv: 70,
    
  },
  {
    name: "Page F",
    uv: 90,
    
  },
  {
    name: "Page G",
    uv: 210,
    
  },
  {
    name: "Page F",
    uv: 160,
    
  },
  {
    name: "Page F",
    uv: 150,
    
  },
  {
    name: "Page F",
    uv: 120,
    
  },
  {
    name: "Page F",
    uv: 90,
    
  },
  {
    name: "Page A",
    uv: 20,
    
  },
  {
    name: "Page B",
    uv: 30,
    
  },
  {
    name: "Page C",
    uv: 40,
    
  },
  {
    name: "Page D",
    uv: 50,
    
  },
  {
    name: "Page E",
    uv: 70,
    
  },
  {
    name: "Page F",
    uv: 90,
    
  },
  {
    name: "Page G",
    uv: 210,
    
  },
  {
    name: "Page F",
    uv: 160,
    
  },
  {
    name: "Page F",
    uv: 150,
    
  },
  {
    name: "Page F",
    uv: 120,
    
  },
  {
    name: "Page F",
    uv: 90,
    
  },
  {
    name: "Page A",
    uv: 20,
    
  },
  {
    name: "Page B",
    uv: 30,
    
  },
  {
    name: "Page C",
    uv: 40,
    
  },
  {
    name: "Page D",
    uv: 50,
    
  },
  {
    name: "Page E",
    uv: 70,
    
  },
  {
    name: "Page F",
    uv: 90,
    
  },
  {
    name: "Page G",
    uv: 210,
    
  },
  {
    name: "Page F",
    uv: 160,
    
  },
  {
    name: "Page F",
    uv: 150,
    
  },
  {
    name: "Page F",
    uv: 120,
    
  },
  {
    name: "Page F",
    uv: 90,
    
  },
  {
    name: "Page F",
    uv: 100,
    
  },
  {
    name: "Page F",
    uv: 100,
    
  },
  {
    name: "Page F",
    uv: 100,
    amt: 2500
  },
];

export default function ReportGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <BarChart  data={data}>
    <CartesianGrid strokeDasharray="3 4" />

    <YAxis domain={[0, 400]} />
      <Bar dataKey="uv" fill="#BCD8C1" />
    </BarChart>
    </ResponsiveContainer>
  );
}
