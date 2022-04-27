import {Component} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";
import {TranscriptModel} from "../../model/transcript.model";


@Component({
  selector: 'app-critrole-search-transcripts',
  templateUrl: './critrole-search-transcripts.component.html',
  styleUrls: ['./critrole-search-transcripts.component.scss'],
})
export class CritroleSearchTranscriptsComponent {

  transcripts: Array<TranscriptModel> | undefined = []

  constructor(private transcriptService: TranscriptService) {
  }

  searchTranscripts(text : string) {
    this.transcriptService.findByText(text)
      .then(transcripts => this.transcripts = transcripts)
      .catch(e => console.log([]))

  }
}
