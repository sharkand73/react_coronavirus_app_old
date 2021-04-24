import React from 'react'
import { Chart } from "react-google-charts";

const Graph1 = ({filteredData}) => {
    return(
        <Chart
        chartType="LineChart"
        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
        width="100%"
        height="400px"
        legendToggle
      />
    )
}

export default Graph1;