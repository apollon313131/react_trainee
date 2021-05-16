import {React, useState} from 'react';
import ControllPanel from './ControllPanel';
import Inputs from './Inputs';


function Calculate() {
    const [resultValue, setResultValue] = useState('')
    const [firstField, setFirstField] = useState(0)
    const [secondField, setSecondField] = useState(0)

    return (
        <>
            {firstField }
            {secondField}
            <Inputs/>
            <ControllPanel/>
        </>
    )
}

export default Calculate