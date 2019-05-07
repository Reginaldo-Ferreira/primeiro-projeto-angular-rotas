import { Injectable } from '@angular/core';
import {Aluno} from './aluno';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'reginaldo Ferreira', email: 'reginaldo@email.com' },
    { id: 2, nome: 'gabriel guimarães', email: 'gabriel@email.com' },
    { id: 3, nome: 'izaque guimarães', email: 'izaque@email.com' },
    { id: 4, nome: 'wilmar junior', email: 'wilmar@email.com' },
    { id: 5, nome: 'rildo fonseca', email: 'rildo@email.com' },
    { id: 6, nome: 'rogerio braga', email: 'rogerio@email.com' },
    { id: 7, nome: 'fabio correia', email: 'fabio@email.com' },
    { id: 8, nome: 'joão alvelino', email: 'joao@email.com' },
    { id: 9, nome: 'izabel silva', email: 'izabel@email.com' },
  ]


  getAlunos() {
    return this.alunos;
  }


  getAluno(id: number) {
    let aluno = this.getAlunos();

    let retorno: any = null;
    // percorre o array com os objetos com forEach
    aluno.forEach(aluno => {// parametro de curso para o forEach
      if (aluno.id == id) {// verifica se o id passado é o mesmo id que tem no objeto
        retorno = aluno;
        return retorno;// coso seja o mesmo retorna o objeto
      }
    });

    return retorno;// caso contrario retorna nulo;
  }

  constructor() { }

}
