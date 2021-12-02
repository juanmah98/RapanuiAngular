import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule} from './Components/layout/layout.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './Components/routes/routes.module';
import { SharedModule } from './Components/shared/shared.module';
import { HomeComponent } from './Components/routes/home/home.component';
import { WtspComponent } from './Components/routes/wtsp/wtsp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTemplateComponent } from './Components/routes/form-template/form-template.component';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { UsersService } from './Components/services/users/users.service';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    RoutesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
