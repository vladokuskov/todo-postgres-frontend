import axios from 'axios';
import { ApiBaseServiceProvider } from '@/services/providers/ApiBaseServiceProvider';
import { ServiceResponse } from '@/models/ServerResponse';
import { ITodo } from '@/models/ITodo';

export class TodoServiceProvider extends ApiBaseServiceProvider {
  scope = 'todos';

  getTodos() {
    return axios.get<ServiceResponse<ITodo[]>>(`${this.getBaseUrl()}`);
  }
}
