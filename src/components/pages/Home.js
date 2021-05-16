
import TodoList from '../ToDo/TodoList';
import { useState, useEffect, useCallback } from 'react';
import Context from '../Context/context';
import AddTodo from '../ToDo/AddTodo';
import Loader from '../Loader/Loader';


function Home() {

  const arrToDo = [
    { id: 1, completed: false, title: 'Задача №1' },
    { id: 2, completed: false, title: 'Задача №2' },
    { id: 3, completed: false, title: 'Задача №3' },
    { id: 4, completed: false, title: 'Задача №4' },
    { id: 5, completed: false, title: 'Задача №5' }
  ]

  const [todos, setTodos] = useState([])

  const [loading, setLoading] = useState(true)

  //Получить список задач
  useEffect(() => {
    setTimeout(() => {
      setTodos(arrToDo)
      setLoading(false)
    }, 2000)
  }, [])

  //Выбрать задачу
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  //Удалить задачу
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //Добавить задачу
  function addTodo(title) {
    setTodos([...todos, ...[{title, id: Date.now(), completed: false}] ])
  }

  return (
    <Context.Provider value={{ removeTodo }}>
        <div className="wrapper">
          <h3>Добавить</h3>
          <AddTodo onCreate={addTodo} loading todos={todos}  onToggle={toggleTodo}/>

          {loading ? <Loader /> : null}

          {todos.length ? <TodoList todos={todos}
          onToggle={toggleTodo}/> :
          loading ? null : <p>Нет записей</p>}          
        </div>
    </Context.Provider>
  );
}

export default Home;
