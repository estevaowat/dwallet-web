export interface IRequest {
   path: string;
   method: string;
   body: any;
}

export interface IApiService {
   sendRequest(data: IRequest): Promise<Response>;
}
