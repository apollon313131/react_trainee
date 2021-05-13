import {React} from 'react';
import ControllPanel from './ControllPanel';




function Inputs() {

    const onChangeInput = (e) => {
        console.log(e.target.value);

    };

    return (
        <>
            <br></br>
            <input type="text" onChange={(e)=>onChangeInput(e)}/>
            <br></br><br></br>
            <input type="text" onChange={(e)=>onChangeInput(e)}/>
            <br></br><br></br>
        </>
    );
};

export default Inputs