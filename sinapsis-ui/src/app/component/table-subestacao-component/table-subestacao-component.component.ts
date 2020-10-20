import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Acao } from 'src/app/model/acao';
import { Subestacao } from 'src/app/model/subestacao';
import { SubestacaoService } from 'src/app/service/subestacao.service';
import { MostrarDialogComponent } from '../mostrar-dialog/mostrar-dialog.component';

@Component({
  selector: 'app-table-subestacao-component',
  templateUrl: './table-subestacao-component.component.html',
  styleUrls: ['./table-subestacao-component.component.css']
})
export class TableSubestacaoComponentComponent implements OnInit {

  subestacao = {};
  subestacoes = [];

  constructor(
    private subestacaoService: SubestacaoService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.subestacaoService.listar().subscribe(resposta => this.subestacoes = <any> resposta);
  }

  confirmarExclusao(subestacao: Subestacao) {
    const dados: any = {};
    dados.acao = Acao.EXCLUIR;
    dados.mensagem = `Realmente deseja excluir a Subestação com código ${subestacao.codigo}?`;
    const ref = this.dialogService.open(MostrarDialogComponent, {
      data: {
        subestacao,
        dados
      },
      header: 'Confirmar exclusão',
      width: '70%',
      contentStyle: { "max-height": "350px", "overflow": "auto" }
    });
  }
}
