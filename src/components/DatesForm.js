import React, {useState} from 'react';

const DatesForm = ({processForm}) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();
        let dateRange = {
            startDate: startDate,
            endDate: endDate
        };
        processForm(dateRange);
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