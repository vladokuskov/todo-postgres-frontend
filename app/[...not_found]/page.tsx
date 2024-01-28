import { siteConfig } from '@/config/site';

export const metadata = { title: `${siteConfig.name} - Not found` };

export default function HomePage() {
  return (
    <div>
      <h1>404 - Page not found</h1>
    </div>
  );
}
