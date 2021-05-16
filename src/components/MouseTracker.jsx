import React from 'react'
import WithMouse from '../hoc/WithMouse';
import Cat from './Cat';
import Mouse from './Mouse';

const NewComponent = WithMouse(Cat);

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Переместите мышь!</h1>
        <NewComponent/>
        <Mouse render={mouse => (<Cat mouse={mouse} />)}/> 
        {/* <Mouse /> */}
        
      </div>
    );
  }
}

export default MouseTracker