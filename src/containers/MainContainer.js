import React, {useEffect, useState} from 'react';
import '../App.css';
import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';
import Graph1 from '../components/Graph1';
import Graph2 from '../components/Graph2';
import Graph3 from '../components/Graph3';
import Graph4 from '../components/Graph4';

const MainContainer = () => {

    // const convertDate = function(date){
    //     let dd = date.getDate();
    //     let mm = date.getMonth()+1;
    //     // if (dd.toString.length === 1) {
    //     //     dd = "0"+dd
    //     // };
    //     if (mm.toString.length === 1) {
    //         mm = "0"+mm
    //     };
    //     let yyyy = date.getFullYear();
    //     return (yyyy+"-"+mm+"-"+dd);
    // }

    const convertDate = function(dateString){
        let dateSplit = dateString.split("-");
        let newString = dateSplit[2]+"/"+dateSplit[1]+"/"+dateSplit[0];
        return newString;     
    }

    function nwc(number) {
        if (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
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

    const [data, setData] = useState(errorAvoider);
    const [filteredData, setFilteredData] = useState(data);
    const [graphSelected, setGraphSelected] = useState(1);

    useEffect(() => {
       console.log(`Graph to display: ${graphSelected}`);
       }, [graphSelected]);

    useEffect(() => {getData()}, []);

    const getData = function(){
        fetch("https://api.coronavirus.data.gov.uk/v1/data")
         .then(results => results.json() )
         .then(data => {setData(data.data)})
     };

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
            <div id="today">
                <table>
                    <tbody>
                        <tr>
                            <td className='today-heading'>Date:</td> 
                            <td className='today-data'>{convertDate(data[0].date)}</td>
                        </tr>
                        <tr>
                            <td className='today-heading'>Daily Cases:</td> 
                            <td className='today-data'>{nwc(data[0].casesDaily)}</td>
                        </tr>
                        <tr>
                            <td className='today-heading'>Daily Deaths:</td> 
                            <td className='today-data'>{nwc(data[0].deathsDaily)}</td>
                        </tr>
                        <tr>
                            <td className='today-heading'>Cumulative Cases:</td> 
                            <td className='today-data'>{nwc(data[0].casesCumulative)}</td>
                        </tr>
                        <tr>
                            <td className='today-heading'>Cumulative Deaths:</td> 
                            <td className='today-data'>{nwc(data[0].deathsCumulative)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* <DatesForm className="dates-form" data={data} processFilter={processFilter}/>
            <Panel className="panel" buttonPress={buttonPress}/>
            {graphs[graphSelected]} */}
        </>
    )
}

export default MainContainer;
