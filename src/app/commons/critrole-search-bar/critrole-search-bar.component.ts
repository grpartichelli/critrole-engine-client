import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'critrole-search-bar',
  templateUrl: './critrole-search-bar.component.html',
  styleUrls: ['./critrole-search-bar.component.scss'],
})
export class CritroleSearchBarComponent {
  @Output() textEmitter = new EventEmitter<string>();
  @Output() searchEmitter = new EventEmitter<string>();
  text = '';

  constructor() {}

  public setText() {
    this.textEmitter.emit(this.text)
  }

  public search() {
    this.searchEmitter.emit()
  }
}
