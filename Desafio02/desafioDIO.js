
function balance_win(Win,defeat){

    return Win-defeat;
}
let balance_victory = balance_win(100,25)
let patent = ["Ferro","Bronze","Prata","Ouro", "platina" ,"diamante","Lendário","imortal"]

if(balance_victory<=10){
    console.log(`O heroi tem saldo de ${balance_victory} , está no nível de ${patent[0]}`)
} 
else if(balance_victory>=11 && balance_victory<=20){
    console.log(`O heroi tem saldo de ${balance_victory} , está no nível de ${patent[1]}`)
}
else if(balance_victory>=21 && balance_victory<=50){
    console.log(`O heroi tem saldo de ${balance_victory} , está no nível de ${patent[2]}`)
}
else if(balance_victory>=51 && balance_victory<=80){
    console.log(`O heroi tem saldo de ${balance_victory} , está no nível de ${patent[3]}`)
}
else if(balance_victory>=81 && balance_victory<=90){
    console.log(`O heroi tem saldo de ${balance_victory} , está no nível de ${patent[4]}`)
}
else if(balance_victory>=91 && balance_victory<=100){
    console.log(`O heroi tem saldo de ${balance_victory} , está no nível de ${patent[5]}`)
}
else{
    console.log(`O heroi tem saldo de ${balance_victory} , está no nível de ${patent[6]}`)
}

