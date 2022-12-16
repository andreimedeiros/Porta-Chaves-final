import { Game } from "./game";
import User from "./user";

export class Key {

    codigo: string;
    preco: Number;
    user: User;
    game: Game

    constructor(codigo: string, preco: Number, user: User, game: Game) {
        this.codigo = codigo;
        this.preco = preco;
        this.user = user;
        this.game = game;
   
    }


}