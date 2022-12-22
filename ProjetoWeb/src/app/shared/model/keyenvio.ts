import { Game } from "./game";
import User from "./user";

export class KeyEnvio {

    id? :string;
    codigo?: string;
    preco?: Number;
    user?: User;
    game?: Game;
    constructor(keyenvio: KeyEnvio = {}, id?: string ) {
        this.id = id;
        this.codigo = keyenvio.codigo;
        this.preco = keyenvio.preco;
        this.user = keyenvio.user;
        this.game = keyenvio.game;
        
        // this.user = user;
        // this.game = game;
    }
}