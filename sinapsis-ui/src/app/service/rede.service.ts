import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Rede } from '../model/rede';
import { Subestacao } from '../model/subestacao';

@Injectable({
  providedIn: 'root'
})
export class RedeService {

    apiUrl = "http://localhost:8080/redes";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private httpClient: HttpClient) { }

    listar(){
        return this.httpClient.get(this.apiUrl, this.httpOptions);
    }

    buscarPorCodigoDaRede(codigo: string): Observable<Rede>{
        const path = "codigo";
        const url = `${this.apiUrl}/${path}/${codigo}`;
        return this.httpClient.get<Rede>(url, this.httpOptions);
    }

    buscarPorSubestacao(subestacao: Subestacao): Observable<Rede>{
        const path = "subestacao";
        const url = `${this.apiUrl}/${path}/${subestacao.codigo}`;
        return this.httpClient.get<Rede>(url, this.httpOptions);
    }

    incluir(rede: Rede){
        return this.httpClient.post(this.apiUrl, rede, this.httpOptions);
    }

    alterar(rede: Rede): Observable<any>{
        const id = rede.idRedeMT;
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.put<Rede>(url, rede, this.httpOptions);
    }

    excluir(idRede: number): Observable<Rede>{
        const url = `${this.apiUrl}/${idRede}`;
        return this.httpClient.delete<Rede>(url, this.httpOptions);
    }
}