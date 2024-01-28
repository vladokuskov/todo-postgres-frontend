import { TodosList } from '@/components/ui/TodosList';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = { title: `${siteConfig.name} - Todos` };

export default function TodosPage() {
  return (
    <div>
      <h1>Todos</h1>
      <Link href='/home'>Go to Home</Link>
      <TodosList />
    </div>
  );
}
