import {Component, OnInit} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";

@Component({
  selector: 'app-critrole-rank-word-usage',
  templateUrl: './critrole-rank-word-usage.component.html',
  styleUrls: ['./critrole-rank-word-usage.component.scss']
})
export class CritroleRankWordUsageComponent implements OnInit {

  blobData: string |  ArrayBuffer | null = null
  loading = false;
  text = "example,list";
  loadedText ="";

  constructor(private transcriptService: TranscriptService) {
  }

  ngOnInit(): void {
    this.searchWordUsage()
  }

  setText(text: string) {
    this.text = text
  }

  searchWordUsage() {
    this.loading = true;
    this.transcriptService.loadWordRanking(this.text)
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
