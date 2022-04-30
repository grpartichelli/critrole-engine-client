import {Component, OnInit} from '@angular/core';
import {TranscriptModel} from "../../model/transcript.model";

@Component({
  selector: 'app-critrole-search-characters',
  templateUrl: './critrole-search-characters.component.html',
  styleUrls: ['./critrole-search-characters.component.scss']
})
export class CritroleSearchCharactersComponent implements OnInit {
  characters: Array<TranscriptModel> | undefined = []
  loading = false;
  noResults = false;

  actor: string | undefined = undefined;
  actorList = [undefined, 'Matt', 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam', 'Travis']

  character: string | undefined = undefined;
  characterList = [undefined, 'Matt', 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam', 'Travis']


  constructor() {
  }

  ngOnInit(): void {
  }

  searchCharacters() {
    console.log('hey')
  }

}
