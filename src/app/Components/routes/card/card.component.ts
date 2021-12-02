import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private _users : UsersService) { }

  users!: any[];
  usuarios!: any[];
  

  ngOnInit(): void {
   this.listUser(),
   this.listUsuarios()
  }

  listUser(){
    this._users.getUsers().subscribe(responese=>{
      console.log(responese)
      this.users = responese;
    },error=>{
      console.log(error)
    });
  }

  listUsuarios(){
    this._users.getUsuarios().subscribe(responese=>{
      console.log(responese)
      this.usuarios = responese;
    },error=>{
      console.log(error)
    });
  }

}
