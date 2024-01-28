import { siteConfig } from '@/config/site';
import { LogOutButton } from '@/components/ui/LogOutButton';

export const metadata = { title: `${siteConfig.name} - Profile` };

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>
      <LogOutButton />
    </div>
  );
}
