import { TodosList } from '@/components/TodosList';
import { LogOutButton } from '@/components/LogOutButton';
import { siteConfig } from '@/config/site';

export const metadata = { title: `${siteConfig.name} - Todos` };

export default function TodosPage() {
  return (
    <div>
      <h1>Todos</h1>
      <LogOutButton />
      <TodosList />
    </div>
  );
}
