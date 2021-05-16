import './App.css';
import Navbar from './components/NavBar/NavBar';
import { Route, NavLink } from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import Counter from './components/pages/Counter';
import Home from './components/pages/Home';
import Modal from './components/Modal/Modal';
import Context from './components/Context/context';
import { useState, useEffect, useCallback } from 'react';

function App() {

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
      <div className="App">
        <div className="wrapper">

          <h1>ToDo-List</h1>

          <Navbar/>

          <Modal />
   
          <Route path="/about" exact component={About} />
          <Route path="/coordinate" exact component={Contact} />
          <Route path="/counter" exact component={Counter} />
          <Route path="/" exact component={Home} />
          {/* <TestHooks/> */}
           
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

