import React, {useEffect, useState} from 'react';
import '../App.css';
import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';
import Graph1 from '../components/Graph1';
import Graph2 from '../components/Graph2';
import Graph3 from '../components/Graph3';
import Graph4 from '../components/Graph4';
import staticData from '../components/staticData';

const MainContainer = () => {

    const convertDate = function(date){
        let dd = date.getDate();
        let mm = date.getMonth()+1;
        // if (dd.toString.length === 1) {
        //     dd = "0"+dd
        // };
        if (mm.toString.length === 1) {
            mm = "0"+mm
        };
        let yyyy = date.getFullYear();
        return (yyyy+"-"+mm+"-"+dd);
    }

const errorAvoider = [
    {
    "date": "2021-03-01",
    "name": "England",
    "code": "E92000001",
    "dailyCases": 4738,
    "cumulativeCases": 3663090,
    "dailyDeaths": 99,
    "cumulativeDeaths": 108422
    }
    ];

    const data = staticData;

    //const [data, setData] = useState(errorAvoider);
    const [dataTimePeriod, setDataTimePeriod] = useState({start: "2020-01-31", end: convertDate(new Date())});
    const [filteredData, setFilteredData] = useState(data);
    const [graphSelected, setGraphSelected] = useState(1);

    useEffect(() => {
       console.log(`Graph to display: ${graphSelected}`);
       }, [graphSelected]);
    // useEffect(() => {
    //     processForm()}, []
    //);
    //useEffect(() => {getData()}, []);

    // const getData = function(){
    //     fetch("https://api.coronavirus.data.gov.uk/v1/data")
    //     .then(results => results.json() )
    //     .then(data => {setData(data.data)})
    // };

    // const getData = function(){
    //     setData(staticData);
    // }

    // const processForm  = function(dateRange, myData){
    //     if (myData) {
    //     const newDataSet = myData.filter((dataItem) => 
    //         (new Date(dataItem.date) >= dateRange.start) 
    //         && (new Date(dataItem.date) <= dateRange.end)
    //     );
    //     setFilteredData(newDataSet);
    //     console.log(filteredData==true);
    //     }   
    //     else {console.log("Data hasn't loaded!")}
    // }

    const buttonPress = (n) => {
        setGraphSelected(n-1);
        }
    const processFilter = function(newDataSet){
        setFilteredData(newDataSet);
    }
    const graphs = [<Graph1 filteredData = {filteredData}/>, 
                    <Graph2 filteredData = {filteredData}/>,
                    <Graph3 filteredData = {filteredData}/>,
                    <Graph4 filteredData = {filteredData}/>]

    return (
        <>
            <header>
                <h1>Covid Stats for England</h1>
            </header>
            <DatesForm className="dates-form" processFilter={processFilter}/>
            <Panel className="panel" buttonPress={buttonPress}/>
            {graphs[graphSelected]}
        </>
    )
}

export default MainContainer;
