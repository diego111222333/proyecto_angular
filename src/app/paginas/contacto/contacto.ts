import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contactos } from '../../models/contacto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacto',
  imports: [FormsModule,CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
contacto: Contactos;
tablacontacto: Contactos[];
constructor(){
  this.contacto=new Contactos();
  this.tablacontacto=new Array<Contactos>();
}
registrar():void{
  console.log(this.contacto);
    this.tablacontacto.push({...this.contacto});
    this.contacto = new Contactos();
}
}
