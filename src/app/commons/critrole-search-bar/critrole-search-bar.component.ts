import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'critrole-search-bar',
  templateUrl: './critrole-search-bar.component.html',
  styleUrls: ['./critrole-search-bar.component.scss'],
})
export class CritroleSearchBarComponent implements OnInit {
  @Input() initialText: string = "";
  @Output() textEmitter = new EventEmitter<string>();
  @Output() searchEmitter = new EventEmitter<string>();
  text = '';

  constructor() {}

  ngOnInit(): void {
    if (this.initialText !== "") {
      this.text = this.initialText;
    }
  }

  public setText() {
    this.textEmitter.emit(this.text)
  }

  public search() {
    this.searchEmitter.emit()
  }
}
