export class Aluno{

    constructor(
        public id: number,
        public nome: string,
        public email: string // poderia declar como private,contudo podemos fazer uma transfomação aqui no construtor
    ){}
}
