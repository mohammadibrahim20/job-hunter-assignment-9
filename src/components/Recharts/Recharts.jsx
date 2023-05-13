import React from "react";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
  { name: "Assignment 1", Mark: 57, outof: 60 },
  { name: "Assignment 2", Mark: 60, outof: 60 },
  { name: "Assignment 3", Mark: 50, outof: 50 },
  { name: "Assignment 4", Mark: 60, outof: 60 },
  { name: "Assignment 5", Mark: 58, outof: 60 },
  { name: "Assignment 6", Mark: 59, outof: 60 },
  { name: "Assignment 7", Mark: 60, outof: 60 },
  { name: "Assignment 8", Mark: 60, outof: 60 },
];
const Recharts = () => {
  return (
    <ComposedChart
      width={900}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="outof" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="Mark" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default Recharts;
