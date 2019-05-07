
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';// para funcionamento do routerLink no template


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
// import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
    // CursosRoutingModule
   // RouterModule

  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncotradoComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
