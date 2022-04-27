import {Component, Input} from '@angular/core';
import {TranscriptModel} from "../../../model/transcript.model";

@Component({
  selector: 'app-critrole-transcripts',
  templateUrl: './critrole-transcripts.component.html',
  styleUrls: ['./critrole-transcripts.component.scss']
})
export class CritroleTranscriptsComponent {

  @Input() transcripts: Array<TranscriptModel> = [];

  public formatNickname(nickname : string) {
      return `${nickname.slice(0, 1)}${nickname.slice(1).toLowerCase()}`
  }

  public formatTimestamp(timestamp: string) {
    return
  }
}
