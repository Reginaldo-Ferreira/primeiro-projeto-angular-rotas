import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  mostrarMenuMobile: boolean = false;
  constructor() { }

  ngOnInit() {
    $(".button-collapse").sideNav();//menuMobile  $(".button-collapse").sideNav();
    $(".button-collapse").sideNav({ closeOnClick: true })
  }


  abrirFecharMenuMobile() {//esse código não é mais necessário a biblioteca materilize já implementa o codigo de abertura e fechamento do memu

    if (!this.mostrarMenuMobile) {

      $('.button-collapse').sideNav('show'); // Show sideNav
      this.mostrarMenuMobile = !this.mostrarMenuMobile;
      console.log("Abrir--");
    } else {//
      $('.button-collapse').sideNav('hide');// Hide sideNav
      console.log("fecha-");
      this.mostrarMenuMobile = !this.mostrarMenuMobile;
    }


  }
}
