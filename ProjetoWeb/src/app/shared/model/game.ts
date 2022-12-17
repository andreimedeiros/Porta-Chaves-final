import { Key } from "./key";

export class Game {

    codigo: string;
    nome: string;
    genero: string;
    keys?: Key[];


    constructor(codigo: string, nome: string, genero: string, keys: Key[]) {
        this.codigo = codigo;
        this.nome = nome;
        this.genero = genero;
        this.keys = keys
    }

}

