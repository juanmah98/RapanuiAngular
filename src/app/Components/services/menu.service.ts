import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc } from '@angular/fire/firestore'
import { Producto } from '../interface/producto';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private firestore: Firestore) { }

  addEntradas(entrada: Producto){
    const entradaRef = collection(this.firestore, 'entrada');
  return addDoc(entradaRef, entrada);
  }
}
