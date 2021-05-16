import {React, useState} from 'react';


function Body() {
    const [value, setValue] = useState('')
    return (
        <>
        <h1 > Урок №2 </h1>
        <h4> Продвинутый React</h4>
        <form action="">
            <input type="text" />
        </form>
        </>
    )
}

export default Body