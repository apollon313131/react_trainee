import React from 'react'
import Cat from './Cat'

class Mouse extends React.Component {
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
        <div style={{ height: '1000px' }} onMouseMove={this.handleMouseMove}>

          <p>Текущая позиция мыши: ({this.state.x}, {this.state.y})</p>
          {this.props.render(this.state)}
          {console.log(this.state)}
          {/* <Cat mouse={this.state} /> */}
        </div>
        );
    }
  }


  export default Mouse
