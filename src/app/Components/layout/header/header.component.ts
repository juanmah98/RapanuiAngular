import { style } from '@angular/animations';
import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

a1: boolean=true;
a2: boolean=true;
a3: boolean=true;
a4:boolean = true;


  ngOnInit(): void {
  }

Men1(){
 
  return this.a1 = false, this.a2=true, this.a3=true, this.a4=true;

}

Men2(){

 
  return this.a1 = true, this.a2=false, this.a3=true, this.a4=true; 

}

Men3(){

  return this.a1 = true, this.a2=true, this.a3=false, this.a4=true;

}

Men4(){

  return this.a1 = true, this.a2=true, this.a3=true, this.a4 = false;

}

}
