

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngulaAnimationComponent } from './angula-animation/angula-animation.component';

import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//import { routing } from './app.routing';
import { AppRegRoutingModule } from './app-reg-routing.module';/* ng generate module App-routing --flat --module=app */
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';


/* import { CursosModule } from './cursos/cursos.module';
 import { AlunosModule } from './alunos/alunos.module';*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DialogComponent,
    MenuPrincipalComponent,
    PaginaNaoEncontradaComponent,
    HeroAsyncMessageComponent,
    //BrowserAnimationsModule,
    //AngulaAnimationComponent
  
  
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MaterializeModule,
    /* routing, */
    AppRegRoutingModule,
 /*    CursosModule,  foi retirado por esta sendo usando 'lazy loading' , que seria carregamento sob demanda*/ 
    // AlunosModule
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
  AlunosGuard,
  DialogService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
