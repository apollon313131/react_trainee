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
        if (value === 'реакт' || value === 'react') {
            this.setState({toggleButton: true},()=>console.log(this.state.toggleButton))
        };
    };

    handleClick(e) {
        e.preventDefault()
        this.myRef.current.focus();  
        this.setState({initialValueFeedback : 'Обновил'}) 
    };

    componentDidMount(){
        console.log('componentDidMount');
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(prevState);
    };

    componentWillUnmount(){
        console.log('componentWillUnmount');
    };


    render() {
      return (
        <div>
            <div className='formInput'>
                <h1>Основы React</h1>
                <input type="text" onChange={(e)=>this.handleChange(e)} ref={this.myRef} placeholder='Введите слово реакт или react'/>
                <button disabled={this.state.toggleButton}>Click</button>
                <button onClick={(e)=>this.handleClick(e)}>Focus</button>
            </div>
            <Feedback initialValueFeedback={this.state.initialValueFeedback}/>
        </div>
    );
    };
    
  };

export default Form