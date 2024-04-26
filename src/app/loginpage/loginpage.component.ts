import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

  url:string='http://localhost:3000/Usuarios';
  Usuario:any;

  //datos de usuario//
  UsuarioLogin:string;
  ContrasenaLogin:string;

  constructor(private Http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.BorrarSesion();
  }



  VerificarUsuario(){
    this.Http.get(this.url).subscribe((res:any)=>{
      this.Usuario=res.filter((user:any)=> user.nombre === this.UsuarioLogin);
      if(this.Usuario.length===0){
        alert("Usuario no registrado");
        this.LimpiarCampos();      
      }else{
        if(this.Usuario[0].contrasena === this.ContrasenaLogin){
          const sesion = "true"
          localStorage.setItem("usuario",this.UsuarioLogin);
          localStorage.setItem("perfil",this.Usuario[0].perfil);
          localStorage.setItem("sesion",sesion);
          this.router.navigate(['navegacion']);
        }else{
          alert("Verifique los datos del usuario Nombre o Contraseña incorrectos")
          
        }
      }

      
    })
  }

  Login(){
    this.VerificarUsuario();
  }

  LimpiarCampos(){
    this.UsuarioLogin="";
    this.ContrasenaLogin="";
  }

  BorrarSesion(){
    localStorage.clear();
  }



}
