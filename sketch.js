let palavra //cria a variável GLOBAL palavra
function palavraAleatoria( ) {//cria função palavraAleatoria
let palavras = ["Tecnologia", "Javascript", "Programação", "alura", "Robótica", "P5JS", "Escola"]; //cria uma variável tipo array palavras
return random(palavras); //retorna a palavra sorteada para a chamada da função
}
function setup( ) {
  createCanvas(600,400); // cria a tela e define tamanho (x,y) (largura/altura)
  palavra =palavraAleatoria(); //chama a função palavraAleatoria( )
}
function inicializaCores( ) {//cria a função inicializaCores 
background ('#FF643B');
//cor de fundo da telalet
fill('rgb(32,201,58)'); //cor da caneta /letra
textSize(96); //tamanho da fonte
textAlign(CENTER, CENTER); //alinhamento do texto
}
function draw( ) { 
inicializaCores( ); //chyama a funcao inicializaCores( )
let maximo = width //cria a variavel máxima e define o valor com a largura da tela
let minimo = 0; //cria a variavel minimo e define o valor como zero
let quantidade = map(mouseX, 0, width, 0, palavra.length);
if (quantidade < 1){
  palavra = palavraAleatoria( );
}
let parcial = palavra.substring(0,quantidade);
text(parcial, 300,200);}