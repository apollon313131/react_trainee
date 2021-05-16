import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const styles = {
   div:{
      marginTop: 20, 
      border: '1px solid grey',
      borderRadius: 5,
      padding:20
   },
   ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
   }
}


function TodoList(props) {
   return (
      <div style={styles.div}>
         <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
               return <TodoItem
                  todo={todo}
                  key={todo.id}
                  index={index}
                  onChangee={props.onToggle}
               />
            })}
         </ul>
      </div>
   )
}

// TodoList.protoTypes = {
// todos: PropTypes.array.arrayOf(PropTypes.object).isRequired,
// onToggle:PropTypes.func.isRequired
// }

export default TodoList