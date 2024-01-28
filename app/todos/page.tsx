import { TodosList } from '@/components/TodosList';
import { LogOutButton } from '@/components/LogOutButton';

export const metadata = { title: 'Todos' };

export default function TodosPage() {
  return (
    <div>
      <h1>Todos</h1>
      <LogOutButton />
      <TodosList />
    </div>
  );
}
