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
        <div style={{ height: '2000px' }} onMouseMove={this.handleMouseMove}>
            <span>fff</span>
          {/*
            Здесь мы без труда можем поменять тег <p> на <Cat>... но тогда
            нам придется создавать отдельный компонент <MouseСЧемТоЕще>
            каждый раз, когда он нам будет необходим, поэтому <MouseWithCat>
            в действительности не является повторно используемым.
          */}
          <Cat mouse={this.state} />
          </div>
          );
    }
  }


  export default MouseWithCat