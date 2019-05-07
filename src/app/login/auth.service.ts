import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();// é chamado no app.componet para mostrar ou não o menu

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome == 'usuario@email.com' && usuario.senha === '1234') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
