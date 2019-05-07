import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';



import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { DialogComponent } from './dialog/dialog.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncotradoComponent } from './cursos/curso-nao-encotrado/curso-nao-encotrado.component';

const APP_ROUTES: Routes = [

  // { path: '#' },
  {
    path: 'cursos',
    loadChildren: 'app/cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard], // guardado de rotas classe que cuida dos acesso por rota
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: 'app/alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard], // ,
    canLoad: [AuthGuard]
    // canActivateChild:[AlunosGuard] esta no modulo de rota de alunos
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
  },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '', redirectTo: '/home', pathMatch: 'full',
    canActivate: [AuthGuard],
    canLoad:[AuthGuard]
  },

  {path:'**', component: PaginaNaoEncontradaComponent,/* canActivate: [AuthGuard] */}


  // { path: 'naoEncontrado/:id', component: CursoNaoEncotradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,{useHash:true})],
  exports: [RouterModule],
  declarations: []
})
export class AppRegRoutingModule { }
