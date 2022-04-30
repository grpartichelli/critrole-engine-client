import {Component, Input} from '@angular/core';
import {CharacterModel} from "../../../model/character.model";

@Component({
  selector: 'app-critrole-characters',
  templateUrl: './critrole-characters.component.html',
  styleUrls: ['./critrole-characters.component.scss']
})
export class CritroleCharactersComponent {

  @Input() characters: Array<CharacterModel> = [];
}
