import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SubestacaoService } from 'src/app/service/subestacao.service';

@Component({
  selector: 'app-mostrar-dialog',
  templateUrl: './mostrar-dialog.component.html',
  styleUrls: ['./mostrar-dialog.component.css']
})
export class MostrarDialogComponent implements OnInit {

  constructor(
    private subestacaoService: SubestacaoService,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  subestacoes = [];
  subestacao = {};
  dados = {};

  ngOnInit(): void {
    this.subestacao = this.config.data.subestacao;
    this.dados = this.config.data.dados;
  }

  listar(){
    this.subestacaoService.listar().subscribe(resposta => this.subestacoes = <any> resposta);
  }

  excluir(idSubestacao: number){
    this.subestacoes = this.subestacoes.filter(h => h !== this.subestacao);
    this.subestacaoService.excluir(idSubestacao).subscribe(() => {
      this.subestacao = {};
      this.listar();

      this.messageService.add({
        severity: 'sucess',
        summary: 'Subestação excluída com sucesso.'
      });
      this.ref.close();
    },
      resposta => {
        let msg = 'Ocorreu um erro inesperado.';

        if(resposta.error.message){
          msg = resposta.console.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        })
      });
  }
}
