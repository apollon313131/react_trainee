import React from 'react'
import Cat from './Cat'

class MouseWithCat extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '150px' }} onMouseMove={this.handleMouseMove}>
            <span>fff</span>
          <Cat mouse={this.state} />
          </div>
          );
    }
  }


  export default MouseWithCat