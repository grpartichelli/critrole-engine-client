import {Component, OnInit} from '@angular/core';
import {Service} from "../service/service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'critrole-engine-client';
  testData = '';
  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service.getTestData().subscribe(testData => this.testData = testData)
  }

}
