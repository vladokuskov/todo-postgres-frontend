import apiService from '@/services/ApiService';
import { ITodo } from '@/@types/ITodo';
import { Suspense } from 'react';
import { TodoItem } from '@/components/TodoItem';

const initTodos = async (): Promise<ITodo[] | null | undefined> => {
  try {
    const res = await apiService.user.getTodos();
    return res.data.responseObject;
  } catch (err) {
    console.error('Failed to load todos');
  }
};

const TodosList = async () => {
  const todos = await initTodos();

  return (
    <div className='mt-2 max-w-md p-2'>
      <Suspense fallback={<div>Loading ...</div>}>
        <ul>
          {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </Suspense>
    </div>
  );
};

export { TodosList };
