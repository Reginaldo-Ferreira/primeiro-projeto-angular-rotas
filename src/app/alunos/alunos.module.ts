
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosService } from './alunos.service';
import { AlunosDesactivateGuard } from '../guards/alunos-desactivate.guard';
import { alunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers:[AlunosService, AlunosDesactivateGuard,alunoDetalheResolver]
})
export class AlunosModule { }
