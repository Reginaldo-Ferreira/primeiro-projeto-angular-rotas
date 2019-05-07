import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";




@Injectable()
// tslint:disable-next-line:class-name
export class alunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    const id = route.params['id'];

    return this.alunosService.getAluno(id);
  }
}