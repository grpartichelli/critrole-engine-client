import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {TranscriptModel} from "../model/transcript.model";

@Injectable({providedIn: 'root'})
export class TranscriptService {
  private readonly url: string = `${environment.api_url}/api/transcripts/`;

  constructor(private httpClient: HttpClient) {
  }

  public loadCharacterInteractionGraph(actor1: string, actor2: string) {
    return this.httpClient.get(`${this.url}character_interactions/${actor1}/${actor2}`, { responseType: 'blob' }).toPromise()
  }

  public findInCombat(episode: number) {
    return this.httpClient.get<Array<Array<TranscriptModel>>>(`${this.url}in_combat/${episode}`).toPromise()
  }

  public loadWordUsageGraph(text: string, nickname?: string): Promise<Blob | undefined> {
    if (text === '' || !text) {
      return Promise.reject()
    }

    let params = new HttpParams();
    if (nickname) {
      params = params.set('actor_nickname', nickname)
    }

    return this.httpClient.get(`${this.url}search_per_episode/${text}`, { responseType: 'blob' , params}).toPromise()
  }

  public findByText(text: string, episode?: number, nickname?: string): Promise<Array<TranscriptModel> | undefined> {
    if (text === '' || !text) {
      return Promise.reject()
    }
    let params = new HttpParams();
    if (episode) {
      params = params.set('episode_number', episode)
    }

    if (nickname) {
      params = params.set('actor_nickname', nickname)
    }

    return this.httpClient.get<Array<TranscriptModel>>(`${this.url}search/${text}`, {params}).toPromise()
  }


}
