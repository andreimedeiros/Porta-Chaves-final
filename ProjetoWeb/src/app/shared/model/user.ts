class User {
    cpf: string
    nome: string;
    idade: number;
    email: string;


    constructor(cpf: string, nome: string, idade: number, email: string,) {
        this.cpf = cpf
        this.nome = nome;
        this.idade = idade;
        this.email = email;


    }
}

export default User