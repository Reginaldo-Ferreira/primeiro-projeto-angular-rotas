import { Observable, Subject } from 'rxjs/Rx';
import { DialogComponent } from './dialog.component';

import { Injectable, EventEmitter } from '@angular/core';
declare var $: any;
import { Mensagens } from './mensagens';


@Injectable()
export class DialogService {

  mens: Mensagens;
  private modal: DialogComponent;
  mostrarMensag = new EventEmitter<boolean>(); // é chamado no app.componet para mostrar ou não o menu
  repostaDialog = new EventEmitter<boolean>();
 // mostrarMensag = new EventEmitter<object>();
  // {mudouValor: this.valor}

  carregado: boolean = false;

  navigateAwaySelection$: Subject<boolean> = new Subject<boolean>(); // retorno assincrono da resposta

  add(cabecalho: string, conteudo: string, rotuloBotao: string) {
// no momento de add é carregado o template do modal e já é aberto o mesmo
    this.carregado = true;
     this.modal.open( new Mensagens(cabecalho, conteudo, rotuloBotao));
    // this.mostrarMensag.emit(this.carregado);
   // this.carregado = false;//só para verificar serm tem mensagens novas
  }



  inicializadorModal(dialog: DialogComponent) {
    this.modal = dialog;
  }

   constructor() {
   this.modal = null;
/*     this.carregado = false;//só é instanciado uma vez...
    console.log("constructor - carregado? =" + this.carregado);
    this.mens = new Mensagens("cabecalho","conteudo","rotuloBotao"); */
  }


  fechar() {
    setTimeout(() => {
      this.modal.abrirFecharDlg(false);
    }, 250);
  }
}
