import {Component, OnInit} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";
import {TranscriptModel} from "../../model/transcript.model";


@Component({
  selector: 'app-critrole-search-transcripts',
  templateUrl: './critrole-search-transcripts.component.html',
  styleUrls: ['./critrole-search-transcripts.component.scss'],
})
export class CritroleSearchTranscriptsComponent implements OnInit {
  transcripts: Array<TranscriptModel> | undefined = []
  loading = false;
  episode: number | undefined = undefined;
  text = " ";
  actor: string | undefined = undefined;
  actorList = [undefined, 'Matt', 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam' , 'Travis']
  noResults = false;
  constructor(private transcriptService: TranscriptService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.transcriptService.findByText(" ", 1)
      .then(transcripts => {
        this.transcripts = transcripts;
        this.transcripts?.forEach(transcript => {
          transcript.actor_nickname = `${transcript.actor_nickname.slice(0, 1)}${transcript.actor_nickname.slice(1).toLowerCase()}`
          transcript.timestamp = transcript.timestamp.split(" ")[1]
        });
        this.loading = false
      })
      .catch(e => this.loading = false)
  }

  eraseEpisodeClick() {
    this.episode = undefined;
    this.searchTranscripts()
  }

  setText(text: string) {
    this.text = text
  }

  searchTranscripts() {
    if (this.text.length < 3 && !this.episode) {
      return;
    }
    this.noResults = false;
    this.loading = true;
    this.transcriptService.findByText(this.text, this.episode, this.actor?.toUpperCase())
      .then(transcripts => {
        this.transcripts = transcripts;
        this.transcripts?.forEach(transcript => {
          transcript.actor_nickname = `${transcript.actor_nickname.slice(0, 1)}${transcript.actor_nickname.slice(1).toLowerCase()}`
          transcript.timestamp = transcript.timestamp.split(" ")[1]
        });
        if (this.transcripts?.length == 0) {
          this.noResults = true;
        }

        this.loading = false
      })
      .catch(e => this.loading = false)

  }
}
