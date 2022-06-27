import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  
  registerForm!: FormGroup;
  sumbitted = false;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        direccion: ["", Validators.required],
        tel:["", Validators.required],
        pedido: ["", Validators.required],
        
        

      },
      
    )
  }

  get form(){
    return this.registerForm.controls
  }

  onSumbit(){
    console.log(this.registerForm)
  }

  onReset(){
    this.sumbitted = false;
    this.registerForm.reset();
  }

}
