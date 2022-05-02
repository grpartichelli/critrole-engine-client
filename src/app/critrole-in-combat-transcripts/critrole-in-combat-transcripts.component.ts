import {Component, OnInit} from '@angular/core';
import {TranscriptModel} from "../../model/transcript.model";
import {TranscriptService} from "../../service/transcript-service";

@Component({
  selector: 'app-critrole-in-combat-transcripts',
  templateUrl: './critrole-in-combat-transcripts.component.html',
  styleUrls: ['./critrole-in-combat-transcripts.component.scss']
})
export class CritroleInCombatTranscriptsComponent implements OnInit {
  transcripts: Array<TranscriptModel> | undefined = []
  loading = false;
  episode: number = 1;

  noResults = false;

  constructor(private transcriptService: TranscriptService) {
  }

  ngOnInit(): void {
    this.searchTranscripts()
  }

  searchTranscripts() {
    if (!this.episode) {
      return;
    }
    this.noResults = false;
    this.loading = true;
    this.transcriptService.findInCombat(this.episode)
      .then(transcripts => {
        if (transcripts?.length === 0) {
          this.noResults = true;
        }
        if (transcripts) {
          this.transcripts = transcripts[0];

          this.transcripts?.forEach(transcript => {
            transcript.actor_nickname = `${transcript.actor_nickname.slice(0, 1)}${transcript.actor_nickname.slice(1).toLowerCase()}`
            transcript.timestamp = transcript.timestamp.split(" ")[1]
          });
        }
        this.loading = false
      })
      .catch(e => this.loading = false)

  }


}
