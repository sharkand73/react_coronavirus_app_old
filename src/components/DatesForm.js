import React, {useState} from 'react';

const DatesForm = ({processForm}, {data}) => {
    const [startDate, setStartDate] = useState(new Date("31/01/2020"));
    const [endDate, setEndDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState(data);

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();
        const newDataSet = data.filter(
            (dataItem) => 
            (new Date(dataItem.date) >= new Date(startDate)) 
            && (new Date(dataItem.date) <= new Date(endDate))
        );
        setFilteredData(newDataSet);
        console.log(newDataSet[0]);   
    }

    return (
        <form className="dates-form" onSubmit={handleForm}>
            <input type="date" className="date-input" value={startDate} onChange={handleStartDate}/>
            <input type="date" className="date-input" value={endDate} onChange={handleEndDate}/>
            <input type="submit"/>
        </form>
    )
};

export default DatesForm;