import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Acao } from 'src/app/model/acao';
import { Rede } from 'src/app/model/rede';
import { Subestacao } from 'src/app/model/subestacao';
import { RedeService } from 'src/app/service/rede.service';
import { SubestacaoService } from 'src/app/service/subestacao.service';
import { MostrarDialogComponent } from '../mostrar-dialog/mostrar-dialog.component';

@Component({
  selector: 'app-table-rede-component',
  templateUrl: './table-rede-component.component.html',
  styleUrls: ['./table-rede-component.component.css']
})
export class TableRedeComponentComponent implements OnInit {

  @Input() subestacao: any = null;
  rede = {};
  redes = [];

  constructor(
    private redeService: RedeService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(subestacao: SimpleChanges) {
    console.log('mudou ' + subestacao.subestacao.currentValue.codigo);
    this.subestacao= subestacao.subestacao.currentValue;
    this.atualizar();
  }

  atualizar() {
    console.log('at: ' + this.subestacao.codigo);
    if(this.subestacao.codigo != null)
      this.redeService.buscarPorSubestacao(this.subestacao).subscribe(resposta => this.redes = <any> resposta);
  }

  confirmarExclusao(rede: Rede) {
    const dados: any = {};
    dados.acao = Acao.EXCLUIR;
    dados.mensagem = `Realmente deseja excluir a Rede com código ${rede.codigo}?`;
    const ref = this.dialogService.open(MostrarDialogComponent, {
      data: {
        rede,
        dados
      },
      header: 'Confirmar exclusão',
      width: '40%',
      contentStyle: { "max-height": "250px", "overflow": "auto" }
    });

    ref.onClose.subscribe(res => {
      this.rede = {};
      this.atualizar();      
    })
  }

}
