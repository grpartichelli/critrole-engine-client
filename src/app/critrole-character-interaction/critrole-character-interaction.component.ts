import {Component, OnInit} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";

@Component({
  selector: 'app-critrole-character-interaction',
  templateUrl: './critrole-character-interaction.component.html',
  styleUrls: ['./critrole-character-interaction.component.scss']
})
export class CritroleCharacterInteractionComponent implements OnInit {
  blobData: string |  ArrayBuffer | null = null
  actor1: string  = 'Liam'
  actor2: string = 'Laura'
  actorList = [ 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam' , 'Travis', 'Matt']
  loading = false;

  ngOnInit(): void {
    this.searchCharacterInteraction()
  }

  constructor(private transcriptService: TranscriptService) {}

    searchCharacterInteraction() {
    this.loading = true;
    this.transcriptService.loadCharacterInteractionGraph(this.actor1?.toUpperCase(), this.actor2?.toUpperCase())
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
