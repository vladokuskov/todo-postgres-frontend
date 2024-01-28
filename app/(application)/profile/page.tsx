import { siteConfig } from '@/config/site';
import { LogOutButton } from '@/components/ui/LogOutButton';
import Link from 'next/link';

export const metadata = { title: `${siteConfig.name} - Profile` };

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>
      <Link href='/home'>Go to Home</Link>
      <LogOutButton />
    </div>
  );
}
