import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'app-angula-animation',
  templateUrl:  `
  <ul>
    <li *ngFor="let hero of heroes"
        (@flyInOut.start)="animationStarted($event)"
        (@flyInOut.done)="animationDone($event)"
        [@flyInOut]="'in'">
      {{hero.name}}
    </li>
  </ul>
`,
  styleUrls: ['./angula-animation.component.css'],animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AngulaAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
