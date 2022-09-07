import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List';

const savedTodos = () => {
  let todoList = localStorage.getItem('list');
  if (todoList) {
    return JSON.parse(todoList);
  } else {
    return [];
  }
};

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState(savedTodos());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: todo };
          }
          return item;
        })
      );
      setTodo('');
      setIsEditing(false);
      setEditID(null);
    } else {
      const newTodo = { id: new Date().getTime().toString(), title: todo };
      setList([...list, newTodo]);
      setTodo('');
    }
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editTodo = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setTodo(editItem.title);
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
            {isEditing ? 'Edit' : 'Add'}
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
