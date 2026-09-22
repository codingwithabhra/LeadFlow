import React from 'react'
import { Pie } from "react-chartjs-2";

const PieChart2 = ({data, options}) => {
  return (
    <div style={{ height: "300px"}}>
      {data && <Pie data={data} options={options} redraw />}
    </div>
  )
}

export default PieChart2
