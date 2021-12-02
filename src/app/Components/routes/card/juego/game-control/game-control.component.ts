import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

interval: any;
incrementingNum = 0;
@Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.interval = setInterval(()=> {
      this.gameStarted.emit(this.incrementingNum++);
      //console.log(this.incrementingNum);
    },1000)
  }

  pauseGame() {
    clearInterval(this.interval);
  }
}
