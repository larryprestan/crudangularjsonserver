import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  sesion:boolean;

  ngOnInit(): void {
    this.ObtenerPerfil();
  }

  ObtenerPerfil(){
    let perfil = localStorage.getItem("perfil");
    if(perfil === "Administrador"){
      this.sesion=true;
    }
  }

}
