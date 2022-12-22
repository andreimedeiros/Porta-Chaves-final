import { Key } from "./key";

class User {
    id?: string;
    cpf?: string;
    nome?: string;
    email?: string;
    senha?: string;
    keys?: Array<Key>; 


    constructor(id?: string, user: User = {}) {
        this.id = id;
        this.cpf = user.cpf
        this.nome = user.nome;
        this.email = user.email;
        this.senha = user.senha;
        this.keys = user.keys;


    }
}

export default User