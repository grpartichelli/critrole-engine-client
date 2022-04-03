import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class Service {
  private readonly prod_url : string = '/api/test';

  constructor(private  httpClient: HttpClient) {
  }

  public getTestData() : Observable<string> {
     return this.httpClient.get(this.prod_url,  {responseType: 'text'})
  }
}
