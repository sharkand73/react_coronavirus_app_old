import React from 'react'
import { Chart } from "react-google-charts";

const Graph2 = ({filteredData}) => {
    const graphData = filteredData.map((item) => {return [new Date(item.date), item.dailyDeaths]});
    graphData.unshift(["Date", "Daily Deaths"]);
    
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

export default Graph2;