import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';// 'RouterModule' para funcionamento do routerLink no template

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDesactivateGuard } from '../guards/alunos-desactivate.guard';
import {alunoDetalheResolver} from './guards/aluno-detalhe.resolver';


const alunosroutes: Routes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      // para evitar colisões de rotas....'alunos/novo' antes de rota com paramentro [hardcode]
      // tslint:disable-next-line:max-line-length
      { path: 'novo', component: AlunoFormComponent }, // foi necessário coloca-lo antes das rotas com paramentros para verificação ordinária , que no caso de cima para baixo.
      { path: ':id', component: AlunoDetalheComponent,
      resolve: {aluno: alunoDetalheResolver}// precisa passar um paramentro pra resgatar no component
    },
      { path: ':id/editar', component: AlunoFormComponent,
        canDeactivate: [AlunosDesactivateGuard] }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(alunosroutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AlunosRoutingModule { }
