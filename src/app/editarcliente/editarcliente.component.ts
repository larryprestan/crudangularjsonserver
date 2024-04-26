import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrl: './editarcliente.component.css'
})
export class EditarclienteComponent {

  url:string='http://localhost:3000/Clientes';
  ClienteEditar:any;
  iDeditar:any;

  //datos a editar//
  nombre:string;
  telefono:string;
  correo:string;
  autor:string;

  constructor(private Http:HttpClient ,private activeroute:ActivatedRoute, private router:Router){}


  ngOnInit(): void {
    this.ObtenerClienteEditar();
  }


  //obtener parametro Id del cliente//
  ObtenerClienteEditar(){
    this.iDeditar= this.activeroute.snapshot.paramMap.get('id') // obtengo el id a editar//
    this.Http.get(this.url).subscribe((res:any)=>{
      this.ClienteEditar = res.filter((usuario:any) => usuario.id === this.iDeditar); //filtro los datos con el Id//
      //asignamos los valores a ditar//
      this.nombre=this.ClienteEditar[0].nombre;
      this.telefono=this.ClienteEditar[0].telefono;
      this.correo=this.ClienteEditar[0].correo;
      this.autor=this.ClienteEditar[0].autor;
    })
  }

  //Editar cliente //
  //guarda los cambios realizados en el registro//
  EditarCliente(){
    let tareaeditada = {
      "id":this.iDeditar,
      "nombre":this.nombre,
      "telefono":this.telefono,
      "correo":this.correo,
      "autor":this.autor
    }
    this.Http.patch(`${this.url}/${this.iDeditar}`,tareaeditada).subscribe(res=>{alert("Cliente "+this.nombre+" Editado");
    this.router.navigate(['navegacion/navegacion/listadoclientes']);
    })
  }



}
