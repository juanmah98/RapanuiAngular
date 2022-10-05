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
  pedidoListo = false;
  wtsp = 'https://api.whatsapp.com/send?phone=+5492646023766';
  pedido = "";
  formaDePago = "";
  formaDelivery = "";
  delivery = true;
  

  constructor(private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        direccion: ["", Validators.required],
        tel:["", Validators.required],
        pedido: ["", Validators.required],
        detalle:[""],
      },
      
    )
    
   }
  
  ngOnInit(): void {
   
  }

  /* &text=_*RAPA-NUI DELIVERY*_ %0A%0A*Cliente:*%0A' + name + '%0A*Direccion:*%0A' + dir + '%0A*Telefono:*%0A' + telefono + '%0A*Pedido:*%0A' + pedido + '%0A*Detalle:*%0A' + detalle + '%0A*Forma de Pago:*%0A' + efectivo +  '' */
 get form(){
    return this.registerForm.controls
  } 

  onSumbit(){
    console.log(this.registerForm.value);

    if(this.delivery){      
      this.pedido = this.wtsp + '&text=_*RAPA-NUI DELIVERY*_ %0A%0A*Cliente:*%0A' + this.registerForm.value.name + '%0A*Direccion:*%0A' + this.registerForm.value.direccion + '%0A*Telefono:*%0A' + this.registerForm.value.tel + '%0A*Pedido:*%0A' + this.registerForm.value.pedido + '%0A*Detalle:*%0A' + this.registerForm.value.detalle + '%0A*Forma de Pago:*%0A' + this.formaDePago;
    }else
    {         
      this.pedido = this.wtsp + '&text=_*RAPA-NUI DELIVERY*_ %0A%0A*Cliente:*%0A' + this.registerForm.value.name + '%0A*Take away:*%0A' + "El cliente retira el pedido" + '%0A*Telefono:*%0A' + this.registerForm.value.tel + '%0A*Pedido:*%0A' + this.registerForm.value.pedido + '%0A*Detalle:*%0A' + this.registerForm.value.detalle + '%0A*Forma de Pago:*%0A' + this.formaDePago;
       }
    this.pedidoListo = true;

    /* window.location.href = pedido; */
    
    
  }

  Send(){
    window.location.href = this.pedido ; 
    this.onReset();
  }

  Edit(){
    this.pedidoListo = false;
    this.delivery = true;
    this.formaDePago = "Efectivo";
  }

  onReset(){
    this.sumbitted = false;
    this.registerForm.reset();
  }

  Efectivo(){
    this.formaDePago = "Efectivo";
  }

  Transferencia(){
    this.formaDePago = "Transferencia bancaria";
  }

  Delivery(){
    this.delivery = true;
  }

  TakeAway(){
    this.delivery = false;
  }

}
