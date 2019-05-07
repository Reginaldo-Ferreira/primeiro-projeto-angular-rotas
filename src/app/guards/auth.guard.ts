//import { Observable } from 'rxjs/Rx';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private verificarAcesso() {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    } else {
      // console.log(next)
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot, // router ou rota informação da rota ativa (a propria rota)
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.verificarAcesso();

  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: verificando se o usúario pode carregar o codigo do módulo')
    return this.verificarAcesso();
  }

}
