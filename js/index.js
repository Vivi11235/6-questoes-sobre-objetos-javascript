function exercicio1(){
/* Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.*/

    let objeto = {preco:'90', descricao: 'Mouse'}

    console.log(objeto);

}

function exercicio2(){
/* Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade.*/

    let notebook = {
        processador: 'i7',
        memoria: '16GB',
        preco: '5000',
        HD: '1TB',
        SSD: '256GB'
    }
    
    console.log(`Processador = ${notebook.processador}`);
    console.log(`Memória = ${notebook.memoria}`);
    console.log(`Preço = ${notebook.preco}`);
    console.log(`HD = ${notebook.HD}`);
    console.log(`SSD = ${notebook.SSD}`);

}

function exercicio3(){
/* Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas 
para o primeiro objeto, que será nosso primeiro aluno. Agora crie mais um 
objeto para colocar informações do nosso segundo aluno. Mostre as 
informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.*/

    let aluno1 = {
        nome: 'Lucas',
        nota1: 9,
        nota2: 10
    }

    let aluno2 = {
        nome: 'Giordana',
        nota1: 9,
        nota2: 7
    }

    let mediaAluno1 = (aluno1.nota1 + aluno1.nota2)/2;
    let mediaAluno2 = (aluno2.nota1 + aluno2.nota2)/2;
    let mediaTurma = (mediaAluno1 + mediaAluno2)/2;

    console.log(aluno1);
    console.log(aluno2);

    console.log(`A média do aluno 1 é: ${mediaAluno1}.`);
    console.log(`A média do aluno 2 é: ${mediaAluno2}.`);
    console.log(`A média dessa turma de dois alunos é: ${mediaTurma}.`);

}

function exercicio4(){
/* Crie um cadastro de pessoas onde o usuário informe o nome,  idade e se 
está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele 
o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao 
usuário se ele deseja continuar cadastrando ou não. No final, mostre as 
pessoas que estão desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000 */

/*let pessoas = [];
let condicao = true;

do{
    let pessoa = {};
    pessoa.nome = prompt('Qual seu nome?');
    pessoa.idade = Number(prompt('Qual a sua idade?'));
    pessoa.trabalhando = confirm('Está trabalhando?');

    if(pessoa.trabalhando){
        pessoa.salario = Number(prompt('Qual o seu salário?'));
    }
    pessoas.push(pessoa);
    condicao = confirm('Deseja continuar cadastrando?');
}while(condicao);

console.log(pessoas);*/
let pessoas = [];

    let cadastrar = true;
    let contador = 0;
    let desempregados = [];
    let salarioMaior = [];
    let salarioMenor = [];

    while(cadastrar){
        let pessoa = {};
        pessoa.name = prompt('Digite o nome da pessoa que quer cadastrar:' );

        pessoa.idade = Number.parseInt(prompt(`Digite a idade da pessoa que quer cadastrar:` ));

        pessoa.atividade = confirm('Digite "ok" caso a pessoa cadastrada esteja atualmente trabalhando e "cancelar" caso esteja desempregada:' );

        if(pessoa.atividade){
            pessoa.salario = Number.parseFloat(prompt('Digite o valor do salário que a pessoa cadastrada está ganhando, em reais: '));
        }

        pessoas.push(pessoa);

        cadastrar = confirm('Deseja continuar cadastrando? Clique "ok" para sim e "cancelar" para não');
    }

    contador = pessoas.length;

    for(let i=0; i<contador;i++){
        if(pessoas[i].atividade===false){
            desempregados.push(pessoas[i]);
        }else if(pessoas[i].salario>2500){
            salarioMaior.push(pessoas[i]);
        }else if(pessoas[i].salario<2500){
            salarioMenor.push(pessoas[i]);
        }
    }

    for(let i=0; i<desempregados.length;i++){
        console.log(`Pessoas desempregadas: Nome: ${desempregados[i].name}.Idade: ${desempregados[i].idade}.`);
    }

    for(let i=0; i<salarioMenor.length;i++){
        console.log(`Pessoas empregadas com salários menores que 2500: Nome: ${salarioMenor[i].name}.Idade: ${salarioMenor[i].idade}. Salário: ${salarioMenor[i].salario}.`);
    }

    for(let i=0; i<salarioMaior.length;i++){
        console.log(`Pessoas empregadas com salários maiores que 2500: Nome: ${salarioMaior[i].name}.Idade: ${salarioMaior[i].idade}. Salário: ${salarioMaior[i].salario}.`);
    }
}



