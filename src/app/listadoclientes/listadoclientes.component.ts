import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrl: './listadoclientes.component.css'
})
export class ListadoclientesComponent {

  url:string='http://localhost:3000/Clientes';
  Clientes:any;
  perfil:any=localStorage.getItem("perfil");
  Usuario:any=localStorage.getItem("usuario");

  constructor(private Http:HttpClient){}

  ngOnInit(): void {
    this.ObtenerClientes();
  }

  //obtener clientes//
  ObtenerClientes(){
    if(this.perfil === "Administrador"){
      this.Http.get(this.url).subscribe((res:any)=>{
        this.Clientes=res;
      })
    }else{
      this.Http.get(this.url).subscribe((res:any)=>{
        this.Clientes = res.filter((cliente:any)=>cliente.autor === this.Usuario);
        console.log(this.Clientes);
        
      })
    }
    
  }

    //eliminar registro cliente///
    EliminarCliente(id:any){
      this.Http.delete(`${this.url}/${id}`).subscribe(res=>{alert("Cliente "+id+" eliminado");
      this.reloadPage();
      })
    }
    
    //recargar la vista despeus de eliminar
    reloadPage() {setTimeout(() => { location.reload(); }, 100)};

}
