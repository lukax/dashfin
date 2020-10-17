import axios ,{ AxiosResponse} from 'axios';
axios.defaults.baseURL='./data';

const responseBody = (response :AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) =>
      axios.post(url, body).then(responseBody),
    delete: (url: string) =>
      axios.delete(url).then(responseBody),
    put: (url: string, body: {}) =>
      axios.put(url, body).then(responseBody),
};

export const Tickers = {

    get:(ticker:string) => requests.get(`/${ticker}.json`)

}


