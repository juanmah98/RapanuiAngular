import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/routes/home/home.component';
import { CardComponent } from './Components/routes/card/card.component';
import { CartaComponent } from './Components/routes/carta/carta.component';
import { WtspComponent } from './Components/routes/wtsp/wtsp.component';
import { JuegoComponent } from './Components/routes/card/juego/juego.component';
import { EvenComponent } from './Components/routes/card/juego/even/even.component';
import { OddComponent } from './Components/routes/card/juego/odd/odd.component';
import { FormReactiveComponent } from './Components/routes/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './Components/routes/form-template/form-template.component';
import { EjemploComponent } from './Components/routes/ejemplo/ejemplo.component';
import { FrontComponent } from './Components/routes/front/front.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'card', component: CardComponent},
  {path: 'carta', component: CartaComponent},
  {path: 'wtsp', component: WtspComponent},
  {path: 'juego', component: JuegoComponent},
  {path: 'form-reactive', component: FormReactiveComponent},
  {path: 'form-template', component: FormTemplateComponent},
  {path: 'odd', component: OddComponent},
  {path: 'FormReactiveComponent', component: FormReactiveComponent},
  {path: 'FormTemplateComponent', component: FormTemplateComponent},
  {path: 'front', component: FrontComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
