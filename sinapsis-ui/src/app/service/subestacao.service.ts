import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Subestacao } from '../model/subestacao';

@Injectable({
  providedIn: 'root'
})
export class SubestacaoService {

    apiUrl = "http://localhost:8080/subestacoes/";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private httpClient: HttpClient) { }

    listar(){
        return this.httpClient.get(this.apiUrl, this.httpOptions);
    }

    buscarPorCodigo(codigo: string): Observable<Subestacao>{
        const path = "codigo";
        const url = `${this.apiUrl}/${path}/${codigo}`;
        return this.httpClient.get<Subestacao>(url, this.httpOptions);
    }

    incluir(subestacao: Subestacao){
        return this.httpClient.post(this.apiUrl, subestacao, this.httpOptions);
    }

    alterar(subestacao: Subestacao): Observable<any>{
        const id = subestacao.idSubestacao;
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.put<Subestacao>(url, subestacao, this.httpOptions);
    }

    excluir(idSubestacao: number): Observable<Subestacao>{
        const url = `${this.apiUrl}/${idSubestacao}`;
        return this.httpClient.delete<Subestacao>(url, this.httpOptions);
    }
}