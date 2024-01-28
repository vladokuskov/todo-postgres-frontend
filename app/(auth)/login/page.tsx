import { LoginForm } from '@/components/ui/LoginForm';
import { siteConfig } from '@/config/site';

export const metadata = { title: `${siteConfig.name} - Login` };

export default function LoginPage() {
  return <LoginForm />;
}
