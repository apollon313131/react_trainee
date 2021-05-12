import React from 'react'

class Feedback extends React.PureComponent {
    constructor(props) {
        super (props)
        this.state={}
    };
    

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Обновился');
    };

    componentDidMount(){
        console.log('Загрузился первый раз');
    };
   
    render() {
      return (
        <div>
            <div className='feedback'>
                <h1>Оставьте свой отзыв</h1>
                <input type="text"  placeholder={this.props.initialValueFeedback} />
                <button>Отправить отзыв</button>
            </div>
        </div>
    );
    };
    
  };

export default Feedback