import {Component, OnInit} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";

@Component({
  selector: 'app-critrole-wordcloud',
  templateUrl: './critrole-wordcloud.component.html',
  styleUrls: ['./critrole-wordcloud.component.scss']
})
export class CritroleWordcloudComponent implements OnInit {
  blobData: string |  ArrayBuffer | null = null
  episode: number | undefined = 1;
  actor: string | undefined = undefined;
  actorList = [undefined, 'Matt', 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam', 'Travis']
  loading = false;

  constructor(private transcriptService: TranscriptService) {
  }

  ngOnInit(): void {
    this.searchWordUsage();
  }

  eraseEpisodeClick() {
    this.episode = undefined;
    this.searchWordUsage()
  }

  searchWordUsage() {
    this.loading = true;
    this.transcriptService.loadWordcloud(this.actor?.toUpperCase(), this.episode)
      .then(blob => {
        if (blob) {
          this.createImageFromBlob(blob)
        }
        this.loading = false
      })
      .catch(e => this.loading = false)
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.blobData = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
