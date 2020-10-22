import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Rede } from 'src/app/model/rede';
import { RedeService } from 'src/app/service/rede.service';
import { TableRedeComponentComponent } from '../table-rede-component/table-rede-component.component';

@Component({
  selector: 'app-rede-incluir',
  templateUrl: './rede-incluir.component.html',
  styleUrls: ['./rede-incluir.component.css']
})
export class RedeIncluirComponent implements OnInit {

  @Input() subestacao: any = null;
  rede: any = {};
  redes = [];
  constructor(
    private redeService: RedeService,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void{ }

  ngOnChanges(subestacao: SimpleChanges) {
    this.subestacao= subestacao.subestacao.currentValue;
  }

  incluir() {
    this.rede.subestacao = this.subestacao;
    this.redeService.incluir(this.rede).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Rede adicionada com sucesso.'
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
  }
}
