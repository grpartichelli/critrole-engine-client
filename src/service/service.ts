import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class Service {
  private readonly prod_url = 'https://critrole-engine-core.herokuapp.com/';

  constructor(private  httpClient: HttpClient) {
  }

  public getTestData() : Observable<string> {
     return this.httpClient.get<string>(this.prod_url + 'test')
  }
}
