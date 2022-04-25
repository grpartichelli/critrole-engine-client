import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'critrole-search-bar',
  templateUrl: './critrole-search-bar.component.html',
  styleUrls: ['./critrole-search-bar.component.scss'],
})
export class CritroleSearchBarComponent {
  @Output() textEmitter = new EventEmitter<string>();
  text = '';

  constructor() {}

  public search() {
    this.textEmitter.emit(this.text)
  }
}
