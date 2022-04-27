import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {TranscriptModel} from "../model/transcript.model";

@Injectable({providedIn: 'root'})
export class TranscriptService {
  private readonly url: string = `${environment.api_url}/api/transcripts/`;

  constructor(private httpClient: HttpClient) {
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
