import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-wtsp',
  templateUrl: './wtsp.component.html',
  styleUrls: ['./wtsp.component.scss']
})
export class WtspComponent implements OnInit {
formulario: FormGroup;
  constructor(private menuServices: MenuService, private formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group(
      {
        name: [""],
        desc: [""],
        precio:[""],
        categoria:[""]  
         
      },
      
    )
   }

  ngOnInit(): void {
  }

  onSumbit(){
    this.menuServices.addEntradas(this.formulario.value);
  }


  

}
