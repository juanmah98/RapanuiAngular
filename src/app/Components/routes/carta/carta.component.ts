import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  titulo: string = "CARTA";
  titulo2: string = "DELIVERY";
  
 

  constructor() { }

  ngOnInit(): void {
  }



  cartas: any = [
    // MESA
    {
     img: "../../../../assets/imagenes/PARTE1.jpg",
    },
    {
     img: "../../../../assets/imagenes/PARTE2.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE3.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE4.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE5.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE6.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE8.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE9.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE10.jpg",
    },
    {
      img: "../../../../assets/imagenes/PARTE11.jpg",
    },        
  ]

  del: any=[
    {
      img: "../../../../assets/imagenes/PARTE10-DEL.jpg",
     },
     {
       img: "../../../../assets/imagenes/PARTE11-DEL.jpg",
     },
  ]


}
