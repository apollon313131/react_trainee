import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context/context';

const styles = {
   li: {
      display: 'flex',
      justifyContent: "space-between",
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
   },
   input: {
      marginRight: '1rem'
   }
}

function TodoItem({ todo, index, onChangee }) {

   //Получаем фукнцию для удаления задачи
   const { removeTodo } = useContext(Context)

   const classes = []

   //Если в задаче поле  completed===true добавляем класс done  
   if (todo.completed) {
      classes.push('done')
   }

   return (
      <li style={styles.li}>
         <span className={classes.join(' ')}>
            <input style={styles.input} type="checkbox"
               onChange={() => onChangee(todo.id)}
               checked={todo.completed}
            />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
         </span>
         <button onClick={() => { removeTodo(todo.id) }} className='rm'>&times;</button>
      </li >
   )
}

// TodoItem.propTypes = {
//    todo: PropTypes.object.isRequired,
//    index: PropTypes.number,
// onChange:PropTypes.func.isRequired
// }

export default TodoItem