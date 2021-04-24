import React, {useEffect, useState} from 'react';
import '../App.css';
import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';
import Graph1 from '../components/Graph1';

const MainContainer = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [graphSelected, setGraphSelected] = useState(1);

    useEffect(() => {
       console.log(`Graph to display: ${graphSelected}`);
       }, [graphSelected]);
    useEffect(() => {getData()}, []);

    const getData = function(){
        fetch("https://api.coronavirus.data.gov.uk/v1/data")
        .then(results => results.json() )
        .then(data => setData(data.data))
    };
    
    // if (data) {
    //     console.log(data[0]['dailyCases']);}

    const processForm  = function(dateRange){
        console.log(dateRange.startDate);
        setFilteredData(data);
        // create filtered array using dates
    }

    const buttonPress = (n) => {
        setGraphSelected(n);
        }

    return (
        <>
            <header>
                <h1>Covid Stats for England</h1>
            </header>
            <DatesForm className="dates-form" processForm={processForm}/>
            <Panel className="panel" buttonPress={buttonPress}/>
            <Graph1 filteredData = {data}/>

        </>
    )
}

export default MainContainer;
