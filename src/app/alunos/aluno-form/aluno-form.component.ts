import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs/Subscription';
import { DialogService } from '../../dialog/dialog.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {



  id: number;
  aluno: any = [];
  inscricao: Subscription;
  // tslint:disable-next-line:member-ordering
  static formMudou: boolean = false;

  constructor(private route: ActivatedRoute,
    private alunosService: AlunosService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id);
        // console.log(this.curso ) ;
        if (this.aluno == null) {
          // this.router.navigate(['/naoEncontrado',this.id ])
        }
      }
    );
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  onInput() {// clicando de qualque jeito já chama este metodo
    AlunoFormComponent.formMudou = true;
    console.log(' -formulário foi modificado:');
  }

  podeMudarRota() {
    console.log(' -verificando se pode sair do formulário modificado = ' + AlunoFormComponent.formMudou);

    if (AlunoFormComponent.formMudou === true) {// o formulário mudou? se sim abrir dialog
      // let confimacao = this.dialogService.add('Alerta', "Deseja realmente sair desta página?", 'fechar');
      AlunoFormComponent.formMudou = false; // deixo falso denovo para proxima confirmação...
      this.dialogService.add('Alerta', 'Deseja realmente sair desta página?', 'fechar'); // confirm("Deseja sair?");
      return  this.dialogService.navigateAwaySelection$ ;

    } else { // se não passar para proxima rota
      return true; // confimação positiva para sair da pagina; ou nada foi mudado nos campos
    }

  }

  podeDesativar() { // da interface IFormCanDeactivate
    // throw new Error("Method not implemented.");
   // return this.podeMudarRota();
  // AlunoFormComponent.formMudou = false;
   return this.podeMudarRota();
/* return confirm('deseja realmente sair desta pagina?'); */
  }
}
