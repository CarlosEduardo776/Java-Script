const variavelNova = 'Valor desta váriavel é 20';
console.log(variavelNova);

let stringTemplate = `String Template usada para ${1 + 1}`;
console.log(stringTemplate);

let aspasSimples = 'Estamos criando uma String com aspas simples';
// String em resumo são textos que podem ser utilizados no JavaScript
// E para utiiza-lo podemos usar aspas simples, duplas, ou String template

let aspasDuplas = "Exemplo com aspas duplas.";

let templateLiteral = `String interpolation embedding expression like ${1 + 1}`;
// Essa é uma String Template, basicamente usamos em casos que há necessidade de realizar uma ação aritimédica (Como  no exemplo) ou quando guardamos váriaveis dentro dela

// Veja abaixo abaixo exemplo de como e quando usar as crases
let nome = 'Carlos';

// Número usados sem aspas (simples ou duplas)
let idade = 17;

let mensagem = `Olá meu nome é ${nome} e tenho ${idade} anos.`;

// Ele que vai imprimir nossa mensagem na tela
console.log(mensagem);

let primeiroNome = 'Carlos';
let ultimoNome = 'Eduardo';
let nomeCompleto = primeiroNome + ' ' + ultimoNome;       
// Usando o +

let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
// Usando template literal

console.log(nomeCompletoTemplate);
