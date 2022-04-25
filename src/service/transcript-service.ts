import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {TranscriptModel} from "../model/transcript.model";

@Injectable({providedIn: 'root'})
export class TranscriptService {
  private readonly url : string = `${environment.api_url}/api/transcripts/`;

  constructor(private  httpClient: HttpClient) {
  }

  public findByText(text : string) : Promise<Array<TranscriptModel> | undefined>  {
    if (text === '' || !text) {
        return Promise.reject()
    }

     return this.httpClient.get<Array<TranscriptModel>>(`${this.url}search/${text}`).toPromise()
  }
}
