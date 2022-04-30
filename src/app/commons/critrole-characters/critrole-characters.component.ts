import {Component, Input} from '@angular/core';
import {TranscriptModel} from "../../../model/transcript.model";

@Component({
  selector: 'app-critrole-characters',
  templateUrl: './critrole-characters.component.html',
  styleUrls: ['./critrole-characters.component.scss']
})
export class CritroleCharactersComponent {

  @Input() characters: Array<TranscriptModel> = [];
}
