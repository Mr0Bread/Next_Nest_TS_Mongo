import IRequest from 'Hooks/Http/interfaces/Request.interface';
import IHttp from 'Hooks/Http/interfaces/http.interface';
import { useRouter } from 'next/router';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const areParamsValid = ({
  body,
  method
}: IRequest) => {
  return !(body.length > 0 && method !== 'POST');
};

export default function useHttp(): IHttp {
  const request = async ({
    url,
    body = '',
    headers = defaultHeaders,
    method = 'GET'
  }: IRequest): Promise<any> => {
    if (!areParamsValid({
      url,
      body,
      method
    })) {
      return { message: 'Incorrect input variables' };
    }

    return fetch(url, {
      method,
      headers,
      body
    })
      .then((res) => res.json())
      .then((data) => {
        const { error } = data;

        if (error) {
          const { message } = data;
          // @ts-ignore
          M.toast({ html: message });
        }

        return data;
      })
      .catch(((reason) => ({ message: `Failed to fetch: ${ reason }` })));
  };

  return { request };
}
