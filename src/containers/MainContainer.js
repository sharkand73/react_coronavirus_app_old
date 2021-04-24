import React from 'react';
import '../App.css';
import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';

const MainContainer = () => {

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
