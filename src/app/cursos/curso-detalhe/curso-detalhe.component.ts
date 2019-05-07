
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {


  id: number;
  curso: any;
  inscricao: Subscription;// criado somente para desfazer a inscrição do objeto para não ficar escultando...

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        // console.log("....id passado....."+ this.id ) ;
        this.curso = this.cursosService.getCurso(this.id);
       // console.log(this.curso + "....o curso encontrado.....") ;
       if ( this.curso== null) {
         this.router.navigate(['cursos/naoEncontrado',this.id ])
       }
      }
    );
  }
//Curso Angular #55: Rotas Imperativas: Redirecionamento via código
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

}
