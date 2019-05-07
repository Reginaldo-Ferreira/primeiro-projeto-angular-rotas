import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  aluno: Aluno;
  inscricao: Subscription; // criado somente para desfazer a inscrição do objeto para não ficar escultando...

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    /*  this.inscricao = this.route.params.subscribe(
       (params: any) => {
         this.id = params['id'];
         this.aluno = this.alunosService.getAluno(this.id);
        // console.log(this.curso ) ;
        if ( this.aluno== null) {
          //this.router.navigate(['/naoEncontrado',this.id ])
        }
       }
     ); */
    this.inscricao = this.route.data.subscribe(
      // tslint:disable-next-line:max-line-length
      (info: {aluno: Aluno} ) => { // duas vezes faz um casting ou definindo o paramentro do resover 'aluno' como um objeto Aluno que define o paramentro (info = Aluno)
        this.aluno = info.aluno;
       // console.log(info);
      }
    );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
