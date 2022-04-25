import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  isSidebarOpen = true;
  constructor() {}


  setIsSidebarOpen(isSidebarOpen: boolean) {
    this.isSidebarOpen = isSidebarOpen;
  }
}
