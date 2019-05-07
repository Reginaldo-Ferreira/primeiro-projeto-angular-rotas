
import { take } from 'rxjs/operators';
import { Mensagens } from './mensagens';
import { Component, OnInit, Input, EventEmitter, HostListener } from '@angular/core';
import { Observable } from "rxjs";
import { interval } from 'rxjs/observable/interval';
import { DialogService } from './dialog.service';

//import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  // exports: const [DialogComponent.mens],
})

export class DialogComponent implements OnInit {

  public estado: boolean = false;// verfica se o modal esta ativo
  private teclaEsc: boolean = false;

  @Input() cabecalho: string = 'cabecalho';
  @Input() conteudo: string = 'conteudo';
  @Input() rotutoBotao: string = 'rotutoBotao';

  // tslint:disable-next-line:member-ordering
  private static mens: Mensagens;

  /**
    * keyup - Checks keys entered for the 'esc' key, attached to hostlistener
    */
  @HostListener('document:keyup', ['$event'])
  keyup(event: KeyboardEvent): void {
    console.log('IF => tecla digitada: [ ' + event.keyCode + ' ]');
    if (event.keyCode === 27) {// caso o botão "Esc" seja teclado fechará o dialogo, negativando a mensagem
      // console.log('IF => tecla digitada: [ ' + event.keyCode+ " ]");
      this.teclaEsc == true;
      this.dialogService.fechar();
    }

  }

  get mens(): Mensagens {// foi criada para poder acessar a variavel estática
    return DialogComponent.mens;
  }

  set mens(value: Mensagens) {
    DialogComponent.mens = value;
  }

  constructor(private dialogService: DialogService) {

  }

  ngOnInit() {
    // no complete ao findar o modal ele execulta uma ulima função
    $('#dialog1').modal({
      complete: () => {
        this.estado = false;
        // tslint:disable-next-line:max-line-length
        this.dialogService.navigateAwaySelection$.next(false); // já envio false para fechar o ciclo que fica esperando uma resposta , se tudo fica parado aguardando resposta
      }
    }); // variavel 'v' é do tipo boolean se for verdadeiro abrira o dialog
    this.dialogService.inicializadorModal(this); // recebo este modal no serviço para inicializado
    // tslint:disable-next-line:max-line-length
    // this.dialogService.mostrarMensag.subscribe((v)=> this.open(v));// escuta o evento emitter se for add uma mensagem então se abre o dialogo
  }

  open(mens: Mensagens) {

    // interval(1000).subscribe(v=> console.log("aguardando..."+v));
    this.mens = mens;
    this.abrirFecharDlg(true); // abrir dialog
    this.estado = true; // indica que o modal esta aberto
    // const source = interval(1000);
    // let t = Observable.interval(1000).take(5).do(i => {
    //  });
    /*
         if (contado == 4) {// aguardará por 4 tempos
           this.fechaLoop = false;
           this.confirmacao= false;
         }
         console.log( i +  "...aguardando entrada:");
    // console.log(" ---Fechar ou Abrir? : " + this.confirmacao);
    //   this.abrirFecharDlg(false);//abrir dialog
    //return this.confirmacao;
*/
  }


  abrirFecharDlg(ab: boolean) {
    if (ab) {
      $('#dialog1').modal('open');
      this.estado = true;
    } else {
      $('#dialog1').modal('close');
      this.estado = false;
    }
    console.log('---->  abrir dialog: ' + ab);
  }

  confirmar(resp: boolean): void {
    // this.dialogService.resposta = resp;
    // console.log("[DialogComponent confirmação]:" + resp);
    if (this.teclaEsc === true) { // esse codigo que espera o esc não é mais necessário...
      console.log('<<------Escolha tecla ESC--------------------------------------->>')
      // tslint:disable-next-line:max-line-length
      this.dialogService.navigateAwaySelection$.next(false); // se a variavel tecEsc for verdadeira enviará direto false para o canDeActivate
    } else {
      this.teclaEsc == false;
      this.dialogService.navigateAwaySelection$.next(resp);
    }
  }

}
