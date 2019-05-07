import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      console.log('guarda de rotas filhas');
    //throw new Error("Method not implemented.");
    return true;

  }
/*   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */
}
