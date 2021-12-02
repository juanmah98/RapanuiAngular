import { Component, OnInit } from '@angular/core';


interface IRegisterForm {
  name: string;
  email: string;
  password: string | number;
  repetPass: string | number;
}

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  register: IRegisterForm = {
    name: "",
    email:"",
    password: "",
    repetPass:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  // sumbit(){
    
  // }

}
