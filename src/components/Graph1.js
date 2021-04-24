import React from 'react'
import { Chart } from "react-google-charts";

const Graph1 = ({filteredData}) => {
    const graphData = filteredData.map((item) => {return [new Date(item.date), item.dailyCases]});
    graphData.unshift(["Date", "Daily Cases"]);
    
    return(
        <Chart
        chartType="LineChart"
        data={graphData}
        width="100%"
        height="400px"
        legendToggle
      />
    )
}

export default Graph1;