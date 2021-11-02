import { clearNullValues } from './../../utils/helpers';
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> { }
}

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({
      baseURL: "http://192.168.1.40:8585/api/",
    });
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  private _handleRequest = (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  };

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };



  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);

  public serializeQuery = (payload: Object) => {
    const obj = clearNullValues(payload)
    const keys = Object.keys(obj)
    // const key as keyof obj
    return keys.map((k: any) => {
      const key = k as keyof typeof obj
      const current = obj[key] as unknown as string
      return `${encodeURIComponent(key)}=${encodeURIComponent(current)}`
    }).join("&")

    // return 
  }

}


