import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AvgDiceRollModel} from "../model/avg-dice-roll.model";

@Injectable({providedIn: 'root'})
export class DiceRollsService {
  private readonly url: string = `${environment.api_url}/api/dice_roll`;

  constructor(private httpClient: HttpClient) {
  }

  public loadWordcloud(episode: number) {
    return this.httpClient.get(`${this.url}/words/${episode}`, { responseType: 'blob' }).toPromise()
  }

  public findAvgDiceRolls(): Promise<Array<AvgDiceRollModel> | undefined> {
    return this.httpClient.get<Array<AvgDiceRollModel>>(this.url + '/avgchar').toPromise()
  }
}
