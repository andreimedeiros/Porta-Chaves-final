import { Game } from "./game";
import User from "./user";

export class Key {

    id? :string;
    codigo?: string;
    preco?: Number;
    user?: User;
    game?: Game
    // id_game?: string
    // id_user?: string;

    constructor(id?: string, key: Key = {}) {
        this.codigo = key.codigo;
        this.preco = key.preco;
        this.user = key.user;
        this.game = key.game;
   
    }
}