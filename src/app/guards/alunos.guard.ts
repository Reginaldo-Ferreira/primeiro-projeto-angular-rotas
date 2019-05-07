import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DialogService } from '../dialog/dialog.service';


@Injectable()
export class AlunosGuard implements CanActivateChild {
  constructor(private dialogService: DialogService ){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
     // console.log(childRoute);
     // console.log(state);
      if(state.url.includes('editar')){
        //this.dialogService.add('Guarda rota filha aluno',"usuário sem acesso!",'fechar');
       // alert('usuário sem acesso!');
        
       // return Observable.of(false);
      }
   // throw new Error("Method not implemented.");
return true;
  }
}
