
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { AuthService } from './login/auth.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(3500)
      ]) ,
      transition('* => void', [
        animate(3500, style({transform: 'translateX(100%)'}))
      ]) 
    ])
  ]
})
export class AppComponent {
  title = 'app';
  mostrarMenu: boolean = false;


  constructor(private authService: AuthService) {

  }


 

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  
  }


}
