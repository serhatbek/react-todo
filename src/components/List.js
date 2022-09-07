import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const List = ({ items, editTodo, deleteTodo }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div className='list-item' key={id}>
            {title}
            <div className='buttons'>
              <FaEdit className='icon' onClick={() => editTodo(id)} />
              <FaTrashAlt className='icon' onClick={() => deleteTodo(id)} />;
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
