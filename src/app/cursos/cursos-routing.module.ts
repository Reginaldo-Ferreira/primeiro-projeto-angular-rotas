import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';// 'RouterModule' para funcionamento do routerLink no template

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';


const CURSOS_ROUTES: Routes = [
  { path: '', component: CursosComponent },
  { path: 'naoEncontrado/:id', component: CursoNaoEncotradoComponent },
/*   { path: 'cursos', component: CursosComponent }, foi retirado para usar o 'lazy loading' carregamento sob demanda */
  { path: ':id', component: CursoDetalheComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(CURSOS_ROUTES)
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
