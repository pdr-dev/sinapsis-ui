import { Component, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subestacao } from 'src/app/model/subestacao';
import { SubestacaoService } from 'src/app/service/subestacao.service';
import { TableRedeComponentComponent } from '../table-rede-component/table-rede-component.component';

@Component({
  selector: 'app-subestacao-incluir',
  templateUrl: './subestacao-incluir.component.html',
  styleUrls: ['./subestacao-incluir.component.css']
})
export class SubestacaoIncluirComponent implements OnInit {

  @Output() subestacao: any = {};
  subestacoes = [];

  constructor(
    private subestacaoService: SubestacaoService,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
  }

  incluir() {
    console.log('teste: ' + this.subestacao);
    this.subestacaoService.incluir(this.subestacao).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Subestação adicionada com sucesso.'
      });
      this.ref.close();
    },
      resposta => {
        let msg = 'Ocorreu um erro inesperado.';
        if (resposta.error.message) {
          msg = resposta.error.message;
        }
        this.messageService.add({
          severity: 'error',
          summary: msg
        })
      });
      this.ref.onClose.subscribe(res => {
        //TableRedeComponentComponent.subestacao = this.subestacao;          
      })
  }
}
