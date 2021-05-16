import React, { useEffect, useReducer } from 'react'

import PropTypes from 'prop-types'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function reducer(state, action) {
   switch (action.type) {
     case INCREMENT:
       return {
         ...state,
         count: state.count + 1
       };
     case DECREMENT:
       return {
         ...state,
         count: state.count - 1
       };
     default: {
       return state;
     }
   }
 }
function Counter() {
   const [state, dispatch] = useReducer(
   reducer, { //как будем изменять (Тут действие)
     count: 0, //То что будем изменять
   });


   const { count } = state;
 
   useEffect(() => {

   }, []);
 
   return (
     <>
       <h1>Итого: {count}</h1>
       <button onClick={() => dispatch({ type: INCREMENT})}>INCREMENT (+1)</button>
       <br/><br/>
       <button onClick={() => dispatch({ type: DECREMENT })}>DECREMENT (-1)</button>
     </>
   );
 }


export default Counter