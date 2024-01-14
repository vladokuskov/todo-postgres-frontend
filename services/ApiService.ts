import { TodoServiceProvider } from '@/services/providers/TodoServiceProvider';

export class ApiService {
  authToken: string | null = null;
  baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  localStorage = typeof window !== 'undefined' ? window.localStorage : null;
  user = new TodoServiceProvider(this);

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
