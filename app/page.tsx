import { siteConfig } from '@/config/site';

export const metadata = { title: `${siteConfig.name}` };

export default function WelcomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}
