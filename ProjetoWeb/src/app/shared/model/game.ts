import { Key } from "./key";

export class Game {
    id?: string
    codigo: string;
    nome: string;
    genero: string;
    keys?: Key[];


    constructor(codigo: string, nome: string, genero: string, keys: Key[], id?: string) {
        this.id = id;
        this.codigo = codigo;
        this.nome = nome;
        this.genero = genero;
        this.keys = keys
    }

}

