import IRequest from 'Hooks/Http/interfaces/Request.interface';

export default interface IHttp {
  request: (request: IRequest) => Promise<any>
}
