import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wtsp',
  templateUrl: './wtsp.component.html',
  styleUrls: ['./wtsp.component.scss']
})
export class WtspComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wtsp = "https://api.whatsapp.com/send?phone=+5492645121080";
  /* &text=_*RAPA-NUI DELIVERY*_ %0A%0A*Cliente:*%0A' + name + '%0A*Direccion:*%0A' + dir + '%0A*Telefono:*%0A' + telefono + '%0A*Pedido:*%0A' + pedido + '%0A*Detalle:*%0A' + detalle + '%0A*Forma de Pago:*%0A' + efectivo +  '' */

  

}
