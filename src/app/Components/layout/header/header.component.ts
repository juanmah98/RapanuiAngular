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


  ngOnInit(): void {
  }

ver(){
 
  return this.a1 = false, this.a2=true, this.a3=true;

}

ver2(){

 
  return this.a1 = true, this.a2=false, this.a3=true; 

}

ver3(){

  return this.a1 = true, this.a2=true, this.a3=false;

}

}
