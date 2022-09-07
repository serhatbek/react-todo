import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List';

const savedTodos = JSON.parse(localStorage.getItem('list'));
console.log(savedTodos);

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState(savedTodos);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: new Date().getTime().toString(), title: todo };
    setList([...list, newTodo]);
    setTodo('');
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    console.log('delete');
  };

  const editTodo = (id) => {
    console.log('edit');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <main>
      <section className='todo-container'>
        <h1>toDo</h1>
        <form onSubmit={handleSubmit} className='add-form'>
          <input
            type='text'
            className='todo-input'
            placeholder='Enter a todo'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit' className='todo-add'>
            Add
          </button>
        </form>
        <div className='list'>
          <List items={list} editTodo={editTodo} deleteTodo={deleteTodo} />
        </div>
      </section>
    </main>
  );
}

export default App;
