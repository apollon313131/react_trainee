import React from 'react'
import Body from '../Body'
import MouseWithCat from '../MouseWithCat'
import TestHooks from './TestHooks'

export default class Contact extends React.Component {
   render() {
      return (
         <div className="container">
            <h1 style={{ textAlign: "center" }}>Координаты мышки в блоке</h1>
            <Body/>
         <MouseWithCat/>
           {/* <TestHooks/> */}
         </div>
      )
   }
}