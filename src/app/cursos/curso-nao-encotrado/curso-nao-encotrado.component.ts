import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-nao-encotrado',
  templateUrl: './curso-nao-encotrado.component.html',
  styleUrls: ['./curso-nao-encotrado.component.css']
})
export class CursoNaoEncotradoComponent implements OnInit {

  inscricao: Subscription;// criado somente para desfazer a inscrição do objeto para não ficar escultando...
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}
