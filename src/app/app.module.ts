import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    NuevoclienteComponent,
    ListadoclientesComponent,
    AdminUsersComponent,
    EditarclienteComponent,
    InicioComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
