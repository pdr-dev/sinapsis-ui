import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Acao } from 'src/app/model/acao';
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

  subestacao = {};
  dados: any;
  adicionar: boolean;
  editar: boolean; 
  excluir: boolean;

  ngOnInit() {
    this.subestacao = this.config.data.subestacao;
    this.dados = this.config.data.dados;
    const acao: any = this.dados.acao;

    if(acao === Acao.ADICIONAR){
      this.adicionar = true;
      this.editar = false;
      this.excluir = false;
    } else if (acao === Acao.EDITAR) {
      this.adicionar = false;
      this.editar = true;
      this.excluir = false;
    } else if (acao === Acao.EXCLUIR){
      this.adicionar = false;
      this.editar = false;
      this.excluir = true;
    }
  }

  confirmarExclusao(idSubestacao: number){
    this.subestacaoService.excluir(idSubestacao).subscribe(() => {
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
