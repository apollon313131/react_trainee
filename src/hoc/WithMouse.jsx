import Mouse from "../components/Mouse";
import React from 'react'

const  WithMouse = (Component) => {
    return class extends React.Component {
      render() {
        return (
          <Mouse render={mouse => (
            <Component {...this.props} mouse={mouse} />
          )}/>
        );
      }
    }
  }

  export default WithMouse