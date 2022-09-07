import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: new Date().getTime().toString(), title: todo };
    setList([...list, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <main>
      <section className='todo-container'>
        <h1>toDo</h1>
        <form onSubmit={handleSubmit}>
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
      </section>
    </main>
  );
}

export default App;
