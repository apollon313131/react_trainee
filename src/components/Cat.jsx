import React from 'react'

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse
      return (
        <img src="https://www.phpro.be/media/440/download/react%404x.png?v=2" height='150px' width='150px' style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }


  export default Cat