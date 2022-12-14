class User {
    id?: string;
    cpf: string
    nome: string;
    idade: number;
    email: string;


    constructor(id: string, cpf: string, nome: string, idade: number, email: string) {
        this.id = id;
        this.cpf = cpf
        this.nome = nome;
        this.idade = idade;
        this.email = email;


    }
}

export default User