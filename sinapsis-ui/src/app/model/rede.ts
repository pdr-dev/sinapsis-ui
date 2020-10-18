import { Subestacao } from './subestacao';

export interface Rede {
    idRedeMT: number;
    subestacao: Subestacao;
    codigo: string;
    nome: string;
    tensaoNominal: any;
}