import React, {useEffect, useState} from 'react';
import '../App.css';
import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';

const MainContainer = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [graphToDisplay, setGraphToDisplay] = useState(0);


    useEffect(() => {getData()}, []);

    const getData = function(){
        fetch("https://api.coronavirus.data.gov.uk/v1/data")
        .then(results => results.json() )
        .then(data => setData(data.data[0]))
    };
    
    console.log(data.dailyCases);


    return (
        <>
            <header>
                <h1>Covid Stats for England</h1>
            </header>
            <DatesForm className="dates-form"/>
            <Panel className="panel"/>

        </>
    )
}

export default MainContainer;
