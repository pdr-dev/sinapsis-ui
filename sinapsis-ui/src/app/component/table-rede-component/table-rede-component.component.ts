import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Acao } from 'src/app/model/acao';
import { Rede } from 'src/app/model/rede';
import { RedeService } from 'src/app/service/rede.service';
import { MostrarDialogComponent } from '../mostrar-dialog/mostrar-dialog.component';

@Component({
  selector: 'app-table-rede-component',
  templateUrl: './table-rede-component.component.html',
  styleUrls: ['./table-rede-component.component.css']
})
export class TableRedeComponentComponent implements OnInit {

  rede = {};
  redes = [];
  constructor(
    private redeService: RedeService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.redes = [];
    this.listar();
  }

  listar() {
    this.redeService.listar().subscribe(resposta => this.redes = <any> resposta);
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
      this.redes = this.redes.filter(h => h !== this.rede);
      this.rede = {};
      this.listar();      
    })
  }

}
