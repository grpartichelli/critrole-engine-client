import {Component} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";

@Component({
  selector: 'app-critrole-word-usage',
  templateUrl: './critrole-word-usage.component.html',
  styleUrls: ['./critrole-word-usage.component.scss']
})
export class CritroleWordUsageComponent {

  blobData: string |  ArrayBuffer | null = null
  loading = false;
  text = "";
  loadedText ="";
  actor: string | undefined = undefined;
  actorList = [undefined, 'Matt', 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam', 'Travis']

  constructor(private transcriptService: TranscriptService) {
  }


  setText(text: string) {
    this.text = text
  }

  searchWordUsage() {
    this.loading = true;
    this.transcriptService.loadWordUsageGraph(this.text, this.actor?.toUpperCase())
      .then(blob => {
        if (blob) {
          this.loadedText = this.text;
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
