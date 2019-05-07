import { Component, OnInit} from '@angular/core';

import { AlunosService } from './alunos.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({  
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],

  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class AlunosComponent implements OnInit {

  constructor(private alunosService:AlunosService ) { }
private alunos: any[] = [];

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
