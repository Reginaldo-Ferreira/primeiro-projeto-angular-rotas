//import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IFormCanDeactivate } from './iform-candeactivate';
import { retry } from 'rxjs/operator/retry';


@Injectable()
export class AlunosDesactivateGuard implements CanDeactivate<IFormCanDeactivate> {


  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {// ou Observable ou Promise
    console.log('guarda de desativação');
    // component.
  // this.dialogService.add('Alerta', "Deseja realmente sair desta página?", 'fechar');
 // console.log("canDeactivate-Aluno: "+component.podeDesativar(''));
 console.log('--------------AlunosDesactivateGuard:-----------');
 console.log(route);
      console.log(state);
   return component.podeDesativar('');
    // tslint:disable-next-line:max-line-length
    /* return component.podeDesativar('') ; */// this.verfic(component.podeDesativar());//this.permissions.canDeactivate(this.currentUser, route.params.id);
  }
}
