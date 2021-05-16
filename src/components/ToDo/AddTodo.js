import React, { useState } from 'react'

function useInputValue(defaultValue = '') {

   const [value, setValue] = useState(defaultValue)

   return {
      bind: {
         value,
         onChange: event => setValue(event.target.value)
      },
      clear: () => setValue(''),
      value: () => value
   }
}

function AddTodo({ onCreate }) {

   const input = useInputValue('')

   function onAddNewTask(e) {
      e.preventDefault()
      if (input.value().trim()) {
         onCreate(input.value())
         input.clear()
      }
   }

   return (
      <form>
         <input  {...input.bind} />
         <button onClick={onAddNewTask} type="submit" >Добавить</button>
      </form>
   )
}

// TodoList.protoTypes = {
//    todos: PropTypes.array.arrayOf(PropTypes.object).isRequired,
// onToggle:PropTypes.func.isRequired
// }

export default AddTodo