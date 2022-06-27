import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private _users: UsersService) { }

  users!: any[];
  usuarios!: any[];
  medicos!: any[];



  ngOnInit(): void {
    this.listUser(),
      this.listUsuarios(),
      this.listarMedicos()
  }

  listUser() {
    this._users.getUsers().subscribe(responese => {
      console.log(responese)
      this.users = responese;
    }, error => {
      console.log(error)
    });
  }

  listarMedicos() {
    this._users.getMedicos().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error.message)
    });
  }

  listUsuarios() {
    this._users.getUsuarios().subscribe(responese => {
      console.log(responese)
      this.usuarios = responese;
    }, error => {
      console.log(error)
    });
  }



  cont = 0;
  contador() {
    for (var i = 0; i < 10; i++) {
      this.cont = this.cont + 1;
      return this.cont;
    }
    return
  };

  entradas: any = [{
    name: 'Nuggets',
    desc: '12 Nuggets + fritas',
    precio: '$340',
    id: "0"
  },
  {
    name: 'Rabas',
    desc: 'Rabas grandes',
    precio: '$1000',
    id: "1"
  },
  {
    name: 'Medias Rabas',
    desc: 'Media porcion de Rabas',
    precio: '$600',
    id: "2"
  },
  {
    name: 'Papas Clasicas grandes',
    desc: 'Papas fritas clasicas',
    precio: '$450',
    id: "3"
  },
  {
    name: 'Papas Clasicas chicas',
    desc: 'Papas fritas clasicas',
    precio: '$350',
    id: "4"
  },
  {
    name: 'Papas cheddar y panceta grandes',
    desc: 'Papas fritas, cheddar y panceta',
    precio: '$450',
    id: "5"
  },
  {
    name: 'Papas cheddar y panceta chicas',
    desc: 'Papas fritas, cheddar y panceta',
    precio: '$450',
    id: "6"
  },
  ];

  titelName: string = 'hola';
  titelDesc?: string;
  titelPrecio?: string;
  todo: any = [];

  setIndex(i: string) {

   
    for (let index = 0; index < this.entradas.length; index++) {
      
      if(this.entradas[index].id == i){
         this.titelName = this.entradas[index].name;
        this.titelDesc = this.entradas[index].desc;
        this.titelPrecio = this.entradas[index].precio;
      }
     
      
    }

       


     
   
   

  }


}
