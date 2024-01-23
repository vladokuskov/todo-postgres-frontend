import React from 'react';
import { ITodo } from '@/@types/ITodo';

const TodoItem: React.FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <li className='w-full rounded border p-2'>
      <h3 className='text-lg font-bold'>{todo.name}</h3>
      {todo.description && <p className='text-gray-600'>{todo.description}</p>}
      {todo.dueDate && <p className='text-gray-600'>Due Date: {''}</p>}
      <p className={`text-${todo.isCompleted ? 'green' : 'red'}-500`}>
        {todo.isCompleted ? 'Completed' : 'Pending'}
      </p>
    </li>
  );
};

export { TodoItem };
