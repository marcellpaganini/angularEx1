import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first Angular App, Angular Hello World';
  studentName: string;
  courseName: string;
  angularVersion: number;

  constructor(){
    this.studentName = 'Marcell Paganini';
    this.courseName = 'Alt Web Tech';
    this.angularVersion = 10;
  }
}
