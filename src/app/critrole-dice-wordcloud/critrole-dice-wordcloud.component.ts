import {Component, OnInit} from '@angular/core';
import {DiceRollsService} from "../../service/dice-rolls-service";

@Component({
  selector: 'app-critrole-dice-wordcloud',
  templateUrl: './critrole-dice-wordcloud.component.html',
  styleUrls: ['./critrole-dice-wordcloud.component.scss']
})
export class CritroleDiceWordcloudComponent implements OnInit {
  blobData: string |  ArrayBuffer | null = null
  dice = 20;
  loading = false;
  constructor(private diceService: DiceRollsService) { }

  ngOnInit(): void {
    this.loadWordcloud()
  }

  loadWordcloud() {
    this.loading = true;
    this.diceService.loadWordcloud(this.dice)
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
