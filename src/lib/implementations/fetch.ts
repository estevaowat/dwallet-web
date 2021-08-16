import { IApiService, IRequest } from '../IApiService';

const urlBackend = 'http://localhost:4000';

class FetchApiService implements IApiService {
   async sendRequest({ path, method, body }: IRequest): Promise<Response> {
      const completeUrl = urlBackend + path;
      const headers = new Headers();

      const request = new Request(completeUrl, {
         method: method.toUpperCase(),
         body,
         headers,
      });

      return fetch(request);
   }
}

export default FetchApiService;
