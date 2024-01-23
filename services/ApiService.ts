import { TodoServiceProvider } from '@/services/providers/TodoServiceProvider';
import { AuthServiceProvider } from '@/services/providers/AuthServiceProvider';

export class ApiService {
  authToken: string | null = null;
  baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  localStorage = typeof window !== 'undefined' ? window.localStorage : null;
  todo = new TodoServiceProvider(this);
  auth = new AuthServiceProvider(this);

  getToken() {
    return this.localStorage && this.localStorage.getItem('authToken');
  }

  getRequestConfig() {
    return this.authToken
      ? {
          headers: { Authorization: 'bearer ' + this.getToken() },
        }
      : {};
  }
}

const apiService = new ApiService();
export default apiService;
