import { Key } from "./key";

class User {
    id?: string;
    nome?: string;
    cpf?: string
    idade?: number;
    email?: string;
    senha?: string;
    keys?: Key[]; 


    constructor(id?: string, user: User = {}) {
        this.id = id;
        this.cpf = user.cpf
        this.nome = user.nome;
        this.idade = user.idade;
        this.email = user.email;
        this.senha = user.senha;


    }
}

export default User