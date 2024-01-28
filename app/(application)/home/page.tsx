import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = { title: `${siteConfig.name} - Home` };

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <Link href='/todos'>Go to Todos</Link>
        <Link href='/profile'>Go to Profile</Link>
      </ul>
    </div>
  );
}
