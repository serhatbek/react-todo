import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const List = ({ title }) => {
  return (
    <div className='list-item'>
      {title}
      <div className='buttons'>
        <FaEdit className='icon' />
        <FaTrashAlt className='icon' />;
      </div>
    </div>
  );
};

export default List;
