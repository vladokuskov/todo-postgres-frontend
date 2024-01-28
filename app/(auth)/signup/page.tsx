import { RegisterForm } from '@/components/RegisterForm';
import { siteConfig } from '@/config/site';

export const metadata = { title: `${siteConfig.name} - Signup` };

export default function RegisterPage() {
  return <RegisterForm />;
}
