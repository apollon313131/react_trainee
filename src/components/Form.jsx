import React from 'react'
import Feedback from './Feedback'

class Form extends React.Component {
    constructor(props) {
        super (props)
        this.state={
            initialValueFeedback: 'Нам понравилась ваша компания',
            toggleButton: false,
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.myRef = React.createRef();
    }
    
    handleChange(e) {
        this.setState({toggleButton: false})
        let value = e.target.value;
        if (value === 'реакт') {
            this.setState({toggleButton: true},()=>console.log(this.state.toggleButton))
        };
    };

    handleClick(e) {
        e.preventDefault()
        this.myRef.current.focus();  
        this.setState({initialValueFeedback : 1}) 
    };

    componentDidMount(){
        console.log('componentDidMount');
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(prevState);
    };
    
    render() {
      return (
        <div>
            <div>
                <input type="text" onChange={(e)=>this.handleChange(e)} ref={this.myRef} />
                <button disabled={this.state.toggleButton}>Click</button>
                <button onClick={(e)=>this.handleClick(e)}>Focus</button>
            </div>
            <Feedback initialValueFeedback={this.state.initialValueFeedback}/>
        </div>
    );
    };
    
  };

export default Form