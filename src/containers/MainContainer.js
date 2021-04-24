import React, {useEffect, useState} from 'react';
import '../App.css';
import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';

const MainContainer = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [graphSelected, setGraphSelected] = useState(1);


    useEffect(() => {getData()}, []);

    const getData = function(){
        fetch("https://api.coronavirus.data.gov.uk/v1/data")
        .then(results => results.json() )
        .then(data => setData(data.data[0]))
    };
    
    console.log(data.dailyCases);

    const processForm  = function(dateRange){
        console.log(dateRange.startDate);
        // create filtered array using dates
    }

    const buttonPress = (n) => {
        setGraphSelected(n);
        // console.log(`Graph to display: ${graphSelected}`);
        }
    

    return (
        <>
            <header>
                <h1>Covid Stats for England</h1>
            </header>
            <DatesForm className="dates-form" processForm={processForm}/>
            <Panel className="panel" buttonPress={buttonPress}/>

        </>
    )
}

export default MainContainer;
