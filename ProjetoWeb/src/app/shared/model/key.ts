import { Game } from "./game";
import User from "./user";

export class Key {

    id? :string;
    codigo: string;
    preco: Number;
    user_id: string;
    user_email: string;
    game_id: string;
    
    // user: User;
    // game: Game;
    constructor(codigo: string, preco: Number, user_id: string, user_email: string, game_id: string, id?: string) {
        this.id = id;
        this.codigo = codigo;
        this.preco = preco;
        this.user_id = user_id;
        this.user_email = user_email
        this.game_id = game_id;
        
        // this.user = user;
        // this.game = game;
    }
}