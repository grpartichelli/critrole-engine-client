import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'byoc-toolbar',
  templateUrl: './critrole-toolbar.component.html',
  styleUrls: ['./critrole-toolbar.component.scss'],
})
export class CritroleToolbarComponent implements OnInit {
  @Output() isSidebarOpenEvent = new EventEmitter<boolean>();
  isSidebarOpen = true;

  constructor() {}

  ngOnInit(): void {
    this.isSidebarOpenEvent.emit(true);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isSidebarOpenEvent.emit(this.isSidebarOpen);
  }
}
