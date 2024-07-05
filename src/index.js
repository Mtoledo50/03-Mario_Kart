const player1 ={
    NOME: "Mario",
    VELOCIDADE : 4,
    MANOBRABILIDADE : 3, 
    PODER : 3,
    PONTOS : 0, // no javascript nao é obrigatorio o ponto e virgula
}

const player2 ={
    NOME: "Luigi",
    VELOCIDADE : 3,
    MANOBRABILIDADE : 4, 
    PODER : 4,
    PONTOS : 0, // no javascript nao é obrigatorio o ponto e virgula
}
const player3 ={
    NOME: "Peach",
    VELOCIDADE : 3,
    MANOBRABILIDADE : 4, 
    PODER : 2,
    PONTOS : 0, // no javascript nao é obrigatorio o ponto e virgula
}
const player4 ={
    NOME: "Yoshi",
    VELOCIDADE : 2,
    MANOBRABILIDADE : 4, 
    PODER : 3,
    PONTOS : 0, // no javascript nao é obrigatorio o ponto e virgula
}
const player5 ={
    NOME: "Bowser",
    VELOCIDADE : 5,
    MANOBRABILIDADE : 2, 
    PODER : 5,
    PONTOS : 0, // no javascript nao é obrigatorio o ponto e virgula
}
const player6 ={
    NOME: "Donkey Kong",
    VELOCIDADE : 2,
    MANOBRABILIDADE : 2, 
    PODER : 5,
    PONTOS : 0, // no javascript nao é obrigatorio o ponto e virgula
}

// para fazer uma ação no JavaScript é necessário declarar uma função
// vamos abaixo declarar a função do java script que é de rolar os dados 

async function rollDice() {// função rolar dados
 return Math.floor(Math.random() * 6) +1; 
 // Math é a função matemática 
 // resumindo essa função funciona da seguinte maneira
 // toda vez que rolar os dados é executada a função roolDice que retorna o resultado desse calculo 
 // math.floor é o arredondamento do calculo matemático
 // math.random vai sortear de zero a um e para dar um numero seis.. devemos multiplicar por 6 
 // para saber o resultado aleatorio soma-se com mais um
 // o return significa que o valor dado nessa função poderá ser utilizado por outras funções fora dessa função
 //para tornar essa função assincrona (que deve esperar uma coisa para terminar para depois executar) colocamos o async
}

// a seguir iremos construir a parte das rodadas de partidas

//  (async function main(){
//       console.log("hello");
//   })();

// os parenteses no inicio da função e no final significam que ela se tornou "auto invocável"

/** 
(async function main(){
   console.log(
    "🏁🚨 Corrida entre Mario e Luigi começando... \n"); 
    // para colocar emoji pressiona a tecla Windows e o ponto.
    // para pular para nova linha coloca-se \n
})();

// essa função acima funciona chamando os dois jogadores, porem nao vou jogar somente com eles 
// precisamos colocar o valor ao inves de ser fixo,, deve ser variável (os nomes dos jogadores)
// para usarmos o valor variável devemos utilizar as propriedades dos nomes dos players
// usaremos ao inve´s das aspas duplas por crase 
// utilizados as chaves e passamos a propriedade do nome ex. ${player1.NOME} e ${player2.NOME}

a função ficaria assim : 

(async function main(){
   console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`); 
    // para colocar emoji pressiona a tecla Windows e o ponto.
    // para pular para nova linha coloca-se \n
})();

// chamamos essa função acima de técnica de concatenação de strings ou interpolação de strings (TEMPLATE STRING)
*/

// função pegue um bloco aleatório:

async function getRandomBlock(){  // função pegue um bloco aleatório
    //declarar uma variavel randomico que pegará dentro da biblioteca matemática um numero
    let random = Math.random();

    //dependendo do valor aleatório teremos um resultado diferente para usar esse valor usaremos uma variavel chamada result
    let result;
switch (true) {
    case random < 0.33:
        result = "RETA";
        break;
    case random < 0.66:
        result = "CURVA";
        break;
    default:
        result = "CONFRONTO";
}
return result;   
}
    // toda vez que passar por uma reta ou curva ele vai mostrar uma mensagem, para isso criamos uma função
    // e chamaremos ela em toda vez que for executar a função da corrida (reta ou curva)
    async function logRollResult(characterName, block, diceResult, attribute)
    {
        console.log(
            `${characterName}🎲 rolou um dado de ${block} ${diceResult} + ${attribute}= ${diceResult + attribute}`);
    
}
async function playRaceEngine(character1, character2){
    // inicio do escopo for
    for (let round = 1; round <= 5; round ++){
        console.log(`🏁 Rodada ${round}`);
        // sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);
        
        // rolar os dados  ...  com <ALT>+Shift vc consegue duplicar a linha 
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // teste de habilidade
        let TotalTestSkill1 = 0; // UM SINAL DE IGUAL ATRIBUI UM VALOR
        let TotalTestSkill2 = 0;
        
        // comando if (condicional) usado para testar o bloco
        if (block === "RETA"){ // DOIS SINAIS DE IGUAL COMPARA O VALOR  // TRES SINAIS DE IGUAL COMPARA O VALOR E O FORMATO (SE É TEXTO)
            TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            TotalTestSkill2 = diceResult2 + character2.VELOCIDADE;

        // chamada da função que apresenta a mensagem da função que mostra o resultado do dado
         await logRollResult(
            character1.NOME, 
            "velocidade",
            diceResult1,
            character1.VELOCIDADE
         );
         await logRollResult(
            character2.NOME, 
            "velocidade",
            diceResult1,
            character2.VELOCIDADE
         );
          // fim da função      
       
        }
        if (block === "CURVA"){
            TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
              // chamada da função que apresenta a mensagem da função que mostra o resultado do dado
         await logRollResult(
            character1.NOME, 
            "manobrabilidade",
            diceResult1,
            character1.MANOBRABILIDADE
         );
         await logRollResult(
            character2.NOME, 
            "manobrabilidade",
            diceResult1,
            character2.MANOBRABILIDADE
         );
          // fim da função  
        }
        if (block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;
            // inicio da implementação do resultado do confronto 

            console.log(`${character1.NOME} confrontou com ${character2.NOME}🥊`);
            await logRollResult(
                character1.NOME,
                "poder",
                diceResult1,
                character1.PODER
            );
            await logRollResult(
                character2.NOME,
                "poder",
                diceResult2,
                character2.PODER
            );
             // reduzindo a implementação de if ternário comentado abaixo para uma implementação de ifs normais de menor tamanho

             if( powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu um ponto 🐢`);
                character2.PONTOS --;
             }
             if( powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu um ponto 🐢`);
                character1.PONTOS --;
             }

            /** criação do if ternário - que substitui todo o codigo comentado abaixo - o resultado seria o mesmo
            // o codigo singnifica " pegando o resultado de pontos do character2 e diminuir um ponto do resultado (-=)
            // se o resultado do jogador1 for maior e se a pontuação do jogador2 for maior que zero 
            // caso não!! fazer uma segunda verificação (&&) que seria retornar o valor zero, ou seja nao alterar nada"
            
            character2.PONTOS -=
                powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;
            character1.PONTOS -=
                powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0;
            console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido!" : "");

            /*fim da criação do if ternário
        /*
            // inicio da função de verificação para  ver se deu empate ou vencedores
            if (powerResult1 > powerResult2){
                if (character2.PONTOS> 0){
                    character2.PONTOS--;
            }
        }
            if (powerResult2 > powerResult1){
                if (character1.PONTOS> 0){
                    character1.PONTOS--;
            }
        }
        if (powerResult2 === powerResult1){
            console.log("Confronto empatado! Nenhum ponto foi perdido!");
        }
*/
            // fim da implementação do resultado do confronto
        }
        // fim do escopo do for

        // inicio do escopo de verificação do resultado (if encadeado) quem é o vencedor
        //inicio do escopo if encadeado

        if (TotalTestSkill1 > TotalTestSkill2){
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if(TotalTestSkill2 > TotalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
            // final do escopo

         console.log("______________________________________");   
        }
    }
    // função declarar vencedor
    async function dclareWinner(character1, character2) {
    console.log("Resultado Final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if(character1.PONTOS>character2.PONTOS)
        console.log(`\n${character1.NOME}Venceu a Corrida! Parabéns! 🏆`);
         else if (character2.PONTOS > character1.PONTOS)
            console.log(`\n${character2.NOME}Venceu a Corrida! Parabéns! 🏆`);
            else console.log ("A corrida terminou empatada");
}

} //função playRaceEngine significa que ao receber dois parametros e aguarda ser chamada na sequencia dentro da função main
    
(async function main(){
    console.log(
     `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`); 
     await playRaceEngine(player1,player2); //await é o comando para a função esperar para terminar a anterior antes de iniciar
      // chamada da função para declarar o vencedor
      await dclareWinner(player1,player2);
 })();


