import axios from 'axios';
import { ApiBaseServiceProvider } from '@/services/providers/ApiBaseServiceProvider';
import { ServiceResponse } from '@/models/ServerResponse';

export class AuthServiceProvider extends ApiBaseServiceProvider {
  scope = 'auth';

  login({ email, password }: { email: string; password: string }) {
    return axios.post<ServiceResponse<{ token: string }>>(
      `${this.getBaseUrl()}login`,
      {
        email,
        password,
      }
    );
  }

  signup({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) {
    return axios.post<ServiceResponse<{ token: string }>>(
      `${this.getBaseUrl()}signup`,
      {
        email,
        password,
        username,
      }
    );
  }

  logout() {
    return axios.post<
      ServiceResponse<{ message: string; isLoggedOut: boolean }>
    >(`${this.getBaseUrl()}logout`);
  }
}
