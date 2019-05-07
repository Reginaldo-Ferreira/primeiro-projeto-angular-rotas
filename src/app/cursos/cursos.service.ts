import { Injectable } from '@angular/core';

export class Curso{
  constructor(public id: number, public nome: string ){}
}

const ALL_CURSOS: Curso[] = [
  'Angular 2',
  'java',
  'javaScript',
  'MySQL',
  'PHP',
  'Html 5',
  'Oracle',
  'PostgreSQL',
  'dBase',
  'Android Studio Básico',
  'PHP',
  'Python',
  'Interbase',
].map((name, index) => new Curso(index + 1, name));

@Injectable()
export class CursosService {

  getCursos() {

    /* ALL_CURSOS.forEach((curso,index) => {
      console.log("id: "+curso.id +"  Curso: " + curso.nome);
    }); */
    return ALL_CURSOS;

    /*  return [
       { id: 1, nome: 'Angular 2' },
       { id: 2, nome: 'java' },
       { id: 3, nome: 'javaScript' },
       { id: 4, nome: 'MySQL' },
       { id: 5, nome: 'PHP' },
       { id: 6, nome: 'Html 5' },
       { id: 7, nome: 'Oracle' },
       { id: 8, nome: 'PostgreSQL' },
       { id: 9, nome: 'dBase' },
       { id: 10, nome: 'Android Studio Básico' },
       { id: 11, nome: 'PHP' },
       { id: 12, nome: 'Python' },
       { id: 13, nome: 'Interbase' },
     ]; */
  }

  getCurso(id: number) {
    let cursoLocal: Curso;
    // percorre o array com os objetos com forEach


    this.getCursos().some(curso => {// parametro de curso para o forEach
      console.log('percorrendo --> every id: ' + curso.id + '  Curso: ' + curso.nome);
      if (curso.id === id) {// verifica se o id passado é o mesmo id que tem no objeto
        console.log(curso.id + '-----Encontrado----');
        cursoLocal = curso;
       // return cursoLocal;// coso seja o mesmo retorna o objeto
       return true;
      }
    });

    return cursoLocal; // caso contrario retorna nulo;
  }

  getCursoPorPagina(pagina: number, tamanho: number) {
 // retorna partes do array de objetos apartir do parametro pagina e tamanho da amostra.
    const inicio = tamanho * (pagina - 1); // defino o inicio do array , de onde começa retornar
    // exemplo: pagina=1,tamanho=3 {inicio = 3 * (1 - 1);}=0
    //                            {final = 3 * 1}=3;
    const final = tamanho * pagina; // defina a posição final do array

    // tslint:disable-next-line:max-line-length
    return this.getCursos().slice(inicio, final); // usando a função Métodos de Array JavaScript => O método slice () cria uma nova matriz. Ele não remove todos os elementos da matriz de origem. ;
  }
  constructor() {

   }

}
