import { TodosList } from '@/components/ui/TodosList';
import { siteConfig } from '@/config/site';

export const metadata = { title: `${siteConfig.name} - Todos` };

export default function TodosPage() {
  return (
    <div>
      <h1>Todos</h1>
      <TodosList />
    </div>
  );
}
