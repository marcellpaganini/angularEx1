import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  //Number Array Property
  myNumbers: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
