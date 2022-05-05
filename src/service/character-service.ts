import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {CharacterModel} from "../model/character.model";

@Injectable({providedIn: 'root'})
export class CharacterService {
  private readonly url: string = `${environment.api_url}/api/character/`;

  constructor(private httpClient: HttpClient) {
  }

  public find(name?: string, actor_nickname?: string, age?: number,  dnd_class?: string, race?: string, pronoun?: string): Promise<Array<CharacterModel> | undefined> {
    let params = new HttpParams();

    if (name) {
      params = params.set('name', name)
    }

    if (actor_nickname) {
      params = params.set('actor_nickname', actor_nickname)
    }

    if (age) {
      params = params.set('age', age)
    }

    if (dnd_class) {
      params = params.set('dnd_class', dnd_class)
    }

    if (race) {
      params = params.set('race', race)
    }

    if (pronoun) {
      params = params.set('pronouns', "[\"" + pronoun + "\"]")
    }

    return this.httpClient.get<Array<CharacterModel>>(this.url, {params}).toPromise()
  }


}
