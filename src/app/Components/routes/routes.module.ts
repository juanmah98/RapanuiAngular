import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { JuegoComponent } from './card/juego/juego.component';
import { GameControlComponent } from './card/juego/game-control/game-control.component';
import { OddComponent } from './card/juego/odd/odd.component';
import { EvenComponent } from './card/juego/even/even.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { FrontComponent } from './front/front.component';



@NgModule({
  declarations: [
    CardComponent,
    CartaComponent,
    JuegoComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    FormReactiveComponent,
    FormTemplateComponent,
    EjemploComponent,
    FrontComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
   
   
  ]
})
export class RoutesModule { }
