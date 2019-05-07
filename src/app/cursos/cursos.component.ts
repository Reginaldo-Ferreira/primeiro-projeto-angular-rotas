import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1500)
      ]),
      transition('* => void', [
        animate(1500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class CursosComponent implements OnInit {
  cursos: any[];
  pagina: number; // pagina em que se esta navegando
  inscricao: Subscription;
  quantidadePorPagina: number = 5;

  constructor(
    private cursosService: CursosService,
    private routequeryParams: ActivatedRoute,
    private router: Router
  ) { this.cursos = []; }

  ngOnInit() {
    // this.cursos = this.cursosService.getCursos(); neste linha busco todos os cursos
    this.inscricao = this.routequeryParams.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
       // this.cursos= [];
       this.cursos = this.cursosService.getCursoPorPagina(this.pagina, 3); // nesta linha retorno de 5 em 5

      }

    );
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();

  }

  proximaPagina(){

    // this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: {'pagina': ++this.pagina}});

  }

}
