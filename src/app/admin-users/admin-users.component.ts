import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {

  url:string='http://localhost:3000/Usuarios';
  id:string;
  Usuarios:any;
  UsuarioEditar:any;

  //datos de nuevousuario//
  nombre:string;
  contrasena:string;
  perfil:string;

  //datos usuario editar//
  nombreEditar:string;
  contrasenaEditar:string;
  perfilEditar:string;

  constructor(private Http:HttpClient){}

  ngOnInit(): void {
    this.AsignarId();
    this.ListarUsusarios();
  }

  //obtener longitud para asignar nuevo id//
  AsignarId(){
    this.Http.get(this.url).subscribe((res:any)=>{
      this.id=res.length;
      console.log(this.id);
      
    })
  }

  //agregar nuevo usuario al registro//
  AgregarUsuario(){
    let nuevousuario = {
      "id":(this.id+1).toString(),
      "nombre":this.nombre,
      "contrasena":this.contrasena,
      "perfil":this.perfil
    }
    this.Http.post(this.url,nuevousuario).subscribe(
      res=>{alert("usuario agregado con exito");
            this.reloadPage();},
      error=>{alert('Usuario no creado');
            this.reloadPage();}    
    )
  }

  //listar Ususarios//
  ListarUsusarios(){
    this.Http.get(this.url).subscribe((res:any)=>{this.Usuarios=res})
  }


  //obtener id//
  ObtenerUsuario(id:any){  
    this.Http.get(this.url).subscribe(
      (res:any)=>{
        this.UsuarioEditar=res.filter((usuario:any)=> usuario.id === id);
        this.nombreEditar=this.UsuarioEditar[0].nombre;
        this.contrasenaEditar=this.UsuarioEditar[0].contrasena;
      }
    )
  }

  //editar usuario aplica los cambios en el registro//
  EditarUsuario(){
    let usuarioeditado = {
      "id":this.UsuarioEditar[0].id,
      "nombre":this.nombreEditar,
      "contrasena":this.contrasenaEditar,
      "perfil":this.perfilEditar
    }
    this.Http.patch(`${this.url}/${this.UsuarioEditar[0].id}`,usuarioeditado).subscribe(res=>{alert("usuario: "+this.nombreEditar+" - Actualizado")})
    this.LimpiarCampos();
    this.reloadPage();
  }

  //eliminar usuario//
  EliminarUsuario(id:any){
    this.Http.delete(`${this.url}/${id}`).subscribe(res=>{alert("Usuario "+id+" Eliminado")});
    this.reloadPage();
    //console.log("eliminar"); 
  }


  //limpiar campos//
  LimpiarCampos(){
    this.nombre="";
    this.contrasena="";
    this.perfil="";
  }

  //recargar pagina//
  reloadPage() {setTimeout(() => {  location.reload(); }, 100)};

}
