import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'navegacion',component:NavegacionComponent, canActivate: [AuthGuard], children:[
    {path:'',component:InicioComponent},
    {path:'navegacion/nuevocliente',component:NuevoclienteComponent},
    {path:'navegacion/listadoclientes',component:ListadoclientesComponent},
    {path:'navegacion/editarcliente/:id',component:EditarclienteComponent},
    {path:'navegacion/adminusers',component:AdminUsersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
