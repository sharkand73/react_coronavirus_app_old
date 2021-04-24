import React, {useState} from 'react';

const Panel = () => {
    const [button1Selected, setButton1Selected] = useState(true)
    const [button2Selected, setButton2Selected] = useState(false)
    const [button3Selected, setButton3Selected] = useState(false)
    const [button4Selected, setButton4Selected] = useState(false)

    const deselectAll = function() {
        setButton1Selected(false);
        setButton2Selected(false);
        setButton3Selected(false);
        setButton4Selected(false);
    }

    const handleButton1Click = () => {
        deselectAll();
        setButton1Selected(true);
    }
    const handleButton2Click = () => {
        deselectAll();
        setButton2Selected(true);
    }
    const handleButton3Click = () => {
        deselectAll();
        setButton3Selected(true);
    }
    const handleButton4Click = () => {
        deselectAll();
        setButton4Selected(true);
    }

    console.log(button4Selected);

    return (
        <div>
            <button id="button-1" onClick={handleButton1Click}>Graph 1</button>
            <button id="button-2" onClick={handleButton2Click}>Graph 2</button>
            <button id="button-3" onClick={handleButton3Click}>Graph 3</button>
            <button id="button-4" onClick={handleButton4Click}>Graph 4</button>
        </div>
    )
}

export default Panel;