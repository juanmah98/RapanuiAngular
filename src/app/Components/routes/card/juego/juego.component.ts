import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  oddNumbers: any = [];
  evenNumbers: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onStartCounter(incrementingNum: number){
    if(incrementingNum % 2 === 0) {   // if it's even
    this.evenNumbers.push(incrementingNum);
  } else { // if it's odd
    this.oddNumbers.push(incrementingNum);
  }
  }
}
