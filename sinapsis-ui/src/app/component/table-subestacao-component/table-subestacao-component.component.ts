import { Component, OnInit } from '@angular/core';
import { SubestacaoService } from 'src/app/service/subestacao.service';

@Component({
  selector: 'app-table-subestacao-component',
  templateUrl: './table-subestacao-component.component.html',
  styleUrls: ['./table-subestacao-component.component.css']
})
export class TableSubestacaoComponentComponent implements OnInit {

  subestacao = {};
  subestacoes = [];

  constructor(
    private subestacaoService: SubestacaoService
  ) { }

  ngOnInit(){
    this.listar();
  }

  listar(){
    this.subestacaoService.listar().subscribe(resposta => this.subestacoes = <any> resposta);
  }

  excluir(idSubestacao: number): void {
    this.subestacoes = this.subestacoes.filter(h => h !== this.subestacao);
    this.subestacaoService.excluir(idSubestacao).subscribe();
  }
}
