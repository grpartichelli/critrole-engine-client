import {Component, OnInit} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";
import {TranscriptModel} from "../../model/transcript.model";


@Component({
  selector: 'app-critrole-search-transcripts',
  templateUrl: './critrole-search-transcripts.component.html',
  styleUrls: ['./critrole-search-transcripts.component.scss'],
})
export class CritroleSearchTranscriptsComponent implements OnInit{
  transcripts: Array<TranscriptModel> | undefined = []
  loading = false;
  constructor(private transcriptService: TranscriptService) {
  }

  ngOnInit(): void {
    this.searchTranscripts(" ", 1)
  }

  searchTranscripts(text : string, episode?: number, nickname?: string) {
    this.loading = true;
    this.transcriptService.findByText(text, episode, nickname)
      .then(transcripts => {
        this.transcripts = transcripts;
        this.transcripts?.forEach(transcript => {
          transcript.actor_nickname = `${transcript.actor_nickname.slice(0, 1)}${transcript.actor_nickname.slice(1).toLowerCase()}`
          transcript.timestamp = transcript.timestamp.split(" ")[1]
        });
        this.loading = false})
      .catch(e =>  this.loading = false)

  }
}
