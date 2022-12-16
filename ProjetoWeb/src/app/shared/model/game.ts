import { Key } from "./key";

export class Game {

    codigo: string;
    nome: string;
    genero: string;
    keys?: Key[];


    constructor(codigo: string, nome: string, genero: string) {
        this.codigo = codigo;
        this.nome = nome;
        this.genero = genero
    }

}

