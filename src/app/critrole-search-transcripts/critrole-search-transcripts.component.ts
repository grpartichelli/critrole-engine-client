import {Component} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";


@Component({
  selector: 'app-critrole-search-transcripts',
  templateUrl: './critrole-search-transcripts.component.html',
  styleUrls: ['./critrole-search-transcripts.component.scss'],
})
export class CritroleSearchTranscriptsComponent {

  constructor(private transcriptService: TranscriptService) {
  }

  searchTranscripts(text : string) {
    this.transcriptService.findByText(text)
      .then(transcripts => console.log(transcripts))
      .catch(e => console.log([]))

  }
}
