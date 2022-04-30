import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {CharacterModel} from "../model/character.model";

@Injectable({providedIn: 'root'})
export class CharacterService {
  private readonly url: string = `${environment.api_url}/api/character/`;

  constructor(private httpClient: HttpClient) {
  }

  public find(name?: string, actor_nickname?: string): Promise<Array<Array<CharacterModel>> | undefined> {
    let params = new HttpParams();

    if (name) {
      params = params.set('name', name)
    }

    if (actor_nickname) {
      params = params.set('actor_nickname', actor_nickname)
    }

    return this.httpClient.get<Array<Array<CharacterModel>>>(this.url, {params}).toPromise()
  }


}
