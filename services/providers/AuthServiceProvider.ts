import axios from 'axios';
import { ApiBaseServiceProvider } from '@/services/providers/ApiBaseServiceProvider';
import { ServiceResponse } from '@/models/ServerResponse';

export class AuthServiceProvider extends ApiBaseServiceProvider {
  scope = 'auth';

  login({ email, password }: { email: string; password: string }) {
    return axios.post<ServiceResponse<any>>(`${this.getBaseUrl()}login`, {
      email,
      password,
    });
  }

  signup({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    return axios.post<ServiceResponse<any>>(`${this.getBaseUrl()}signup`, {
      email,
      username,
      password,
    });
  }

  logout() {
    return axios.post<ServiceResponse<any>>(`${this.getBaseUrl()}logout`);
  }
}
