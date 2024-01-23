import { TodosList } from '@/components/TodosList';

export const metadata = { title: 'Todos' };

export default function TodosPage() {
  return (
    <div>
      <h1>Todos</h1>
      <TodosList />
    </div>
  );
}
