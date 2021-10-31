import HttpClient from '../http';
import { CashTray } from './types';
export default class PosApi extends HttpClient {
  public getCashtray = (payload:Object) => {

    return new Promise(resolve => {
      this.instance.get<CashTray[]>(`cashtray?${this.serializeQuery(payload)}`).then((res) =>  {
        resolve(res)        
      })

    })

  };
}