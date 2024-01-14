import { ApiService } from '../ApiService';

export class ApiBaseServiceProvider {
  scope = '';
  api: ApiService;

  constructor(api: ApiService) {
    this.api = api;
  }

  getRequestConfig() {
    return this.api.getRequestConfig();
  }

  getBaseUrl(scope: string | null = null) {
    if (scope === null) {
      scope = this.scope;
    }
    return this.api.baseUrl + '/' + (scope ? scope + '/' : '');
  }
}
