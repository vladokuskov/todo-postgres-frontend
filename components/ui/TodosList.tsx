import apiService from '@/services/ApiService';
import { Suspense } from 'react';
import { TodoItem } from '@/components/ui/TodoItem';
import { ITodo } from '@/models/ITodo';

const initTodos = async (): Promise<ITodo[] | null | undefined> => {
  try {
    const res = await apiService.todo.getTodos();
    return res.data.responseObject;
  } catch (err) {
    console.error('Failed to load todos');
  }
};

const TodosList = async () => {
  const todos = await initTodos();

  return (
    <ul className='mt-2 flex max-w-md flex-col items-center justify-center gap-2 p-2'>
      <Suspense fallback={<div>Loading ...</div>}>
        {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </Suspense>
    </ul>
  );
};

export { TodosList };
