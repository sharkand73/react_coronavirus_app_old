import React from 'react';

const Panel = ({buttonPress}) => {

    return (
        <div>
            <button id="button-1" onClick={() => {buttonPress(1)}}>Graph 1</button>
            <button id="button-2" onClick={() => {buttonPress(2)}}>Graph 2</button>
            <button id="button-3" onClick={() => {buttonPress(3)}}>Graph 3</button>
            <button id="button-4" onClick={() => {buttonPress(4)}}>Graph 4</button>
        </div>
    )
}

export default Panel;