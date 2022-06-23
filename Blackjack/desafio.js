/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert('Boas vindas ao jogo de Blackjack!')
let jogarDesafio = confirm('Quer iniciar um nova rodada?')
   
   
const jogar = () => {
      //inicio rodada1
      //2 Cartas do bot
      let cartaBot
      let cartaNaipeBot = []
      let valorTotalBot = []
      let totalBot = 0
      const comprarBot = () =>{
         
         cartaBot = comprarCarta()
         cartaNaipeBot.push(cartaBot.texto)
         valorTotalBot.push(cartaBot.valor)
         totalBot = valorTotalBot.reduce((totalBot, i) => totalBot+i)
         
         
         
      }
      
      //2 Cartas Player
      let cartaUsr
      let valorTotalUsr = []
      let cartaNaipeUsr = []
      let totalUsr = 0
      const comprarUsr = () =>{
         cartaUsr = comprarCarta()
         cartaNaipeUsr.push(cartaUsr.texto)
         valorTotalUsr.push(cartaUsr.valor)
         totalUsr = valorTotalUsr.reduce((totalUsr, i) => totalUsr+i)
      
   }
   const conferir = () => { 
         if(totalUsr > 21 && totalBot!==totalUsr && totalUsr>totalBot){
            jogarDesafio = confirm(`Você Perdeu! \n Suas cartas são ${cartaNaipeUsr}, sua pontuação é ${totalUsr}\n As cartas do computador são ${cartaNaipeBot}, A pontuação do computador é ${totalBot}\n Deseja jogar mais uma rodada?`)
   
         }else if(totalBot > 21 && totalUsr <= 21){
            jogarDesafio = confirm(`Você Venceu! \n Suas cartas são ${cartaNaipeUsr}, sua pontuação é ${totalUsr}\n As cartas do computador são ${cartaNaipeBot}, A pontuação do computador é ${totalBot}\n Deseja jogar mais uma rodada?`)
   
         }else if(totalBot === totalUsr){
            jogarDesafio = confirm(`EMPATOU!!! \n Suas cartas são ${cartaNaipeUsr}, sua pontuação é ${totalUsr}\n As cartas do computador são ${cartaNaipeBot}, A pontuação do computador é ${totalBot}\n Deseja jogar mais uma rodada?`)
   
         }else if(totalUsr <= 21 && totalUsr>totalBot ){
            jogarDesafio = confirm(`Você venceu! \n Suas cartas são ${cartaNaipeUsr}, sua pontuação é ${totalUsr}\n As cartas do computador são ${cartaNaipeBot}, A pontuação do computador é ${totalBot}\n Deseja jogar mais uma rodada?`)
         }else if(totalBot <= 21 && totalBot>totalUsr){
            jogarDesafio = confirm(`Você perdeu! \n Suas cartas são ${cartaNaipeUsr}, sua pontuação é ${totalUsr}\n As cartas do computador são ${cartaNaipeBot}, A pontuação do computador é ${totalBot}\n Deseja jogar mais uma rodada?`)

         }else if(totalUsr<totalBot && (totalUsr-21)*(totalUsr-21)<(totalBot-21)*(totalBot-21)){
            jogarDesafio = confirm(`Você venceu! \n Suas cartas são ${cartaNaipeUsr}, sua pontuação é ${totalUsr}\n As cartas do computador são ${cartaNaipeBot}, A pontuação do computador é ${totalBot}\n Deseja jogar mais uma rodada?`)

         }else console.log(totalUsr, totalBot, 'DEU MERDA')
      }
   //RODADA 1
   comprarBot()
   comprarBot()
   comprarUsr()
   comprarUsr()
   //Conferir se a carta sorteada não é A's
   while(cartaNaipeUsr[0]==="A"&& cartaNaipeUsr[1]==='A'||cartaNaipeBot[0]==='A'&& cartaNaipeBot[1]==='A')
   {
         cartaNaipeBot = []
         valorTotalBot = []
         cartaNaipeUsr = []
         valorTotalUsr = []
         comprarBot()
         comprarBot()
         comprarUsr()
         comprarUsr()
         
      }
   let round2 = confirm(`Suas cartas são ${cartaNaipeUsr[0]}, ${cartaNaipeUsr[1]}. A carta do computador é ${cartaNaipeBot[0]}\n Deseja comprar mais uma carta?`)===true
   while((round2 !== false) && (totalUsr < 21)){
      comprarUsr()
      if(totalUsr >= 21){
      alert(`Suas cartas são ${cartaNaipeUsr} e a Carta revelada do computador é ${cartaNaipeBot[0]}, Você já atingiu ${totalUsr} pontos!`)
      }else round2 = confirm(`Suas cartas são ${cartaNaipeUsr} e a Carta revelada do computador é ${cartaNaipeBot[0]}, Deseja comprar mais uma carta?`)
      
   }
   jogarDesafio = false
   while(totalBot <21 && round2 === true){
      comprarBot()
   }
   //conferir os vencedores
   conferir()
}
while(jogarDesafio === true){
   console.log("ENTROU NO WULTIE WHILE")
   jogar()
}alert('Até a próxima')


