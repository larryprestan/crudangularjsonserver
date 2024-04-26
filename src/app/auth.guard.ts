import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  sesion:any = localStorage.getItem("sesion");

  constructor(private router: Router) {}

  canActivate(): any {
    if (this.sesion === "true") {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}