class User {
    id?: string;
    cpf?: string
    nome?: string;
    idade?: number;
    email?: string;
    senha?: string


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