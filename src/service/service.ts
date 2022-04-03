import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({providedIn: 'root'})
export class Service {
  private readonly prod_url : string = `${environment.api_url}/api/`;

  constructor(private  httpClient: HttpClient) {
  }

  public getTestData() : Observable<string> {
     return this.httpClient.get(this.prod_url + 'test',  {responseType: 'text'})
  }
}
