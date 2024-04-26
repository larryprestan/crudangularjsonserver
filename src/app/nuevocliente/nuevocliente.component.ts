import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrl: './nuevocliente.component.css'
})
export class NuevoclienteComponent {

  nombre:string;
  telefono:string;
  correo:string;

  url:string='http://localhost:3000/Clientes';
  Id:any;

  constructor(private Http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.obtenerID();
  }


  //Agregar cliente: agrega un nuevo registro//
  AgregarCliente(){
    let perfil = localStorage.getItem("usuario")
    let nuevocliente = {
      "id":(this.Id+1).toString(), //a la variable Id la incremento en 1 para asiganar el Id al nuevo registro y la convierto a string//
      "nombre":this.nombre,
      "telefono":this.telefono,
      "correo":this.correo,
      "autor":perfil
    }
    this.Http.post(this.url,nuevocliente).subscribe(res=>{alert("cliente creado"+res)},error=>{alert("cliente NO creado"+error)})
    this.router.navigate(['navegacion/navegacion/listadoclientes']);
  }

  
  /*obtenerId: obtiene la longitud del 
  arreglo y utilizarla para crear
  el id del proximo nuevo cliente*/
  obtenerID(){
    this.Http.get(this.url).subscribe((res:any)=>{
      this.Id=res.length; // a la variable Id le asigno la longitud del arreglo//
    })
  }

}
