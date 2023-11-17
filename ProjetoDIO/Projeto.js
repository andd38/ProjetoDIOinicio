let name = "Hero jiraya";
let XP =8500;
let patent = ["Ferro","Bronze","Prata","Ouro", "platina" ,"diamante","Ascendente","imortal","Radiante"]

if(XP<1000){
    console.log(`O heroi de nome ${name} está no nível de ${patent[0]}`)
}
else if(XP>1001 && XP <2000){
    console.log(`O heroi de nome ${name} está no nível de ${patent[1]}`)
} 
else if(XP >2001 && XP<5000){
    console.log(`O heroi de nome ${name} está no nível de ${patent[2]}`)
} 
//não era pra ser 6001 , era pra ser 5001
else if(XP>5001 && XP <7000){
    console.log(`O heroi de nome ${name} está no nível de ${patent[3]}`)
}
else if(XP>7001 && XP<8000){
    console.log(`O heroi de nome ${name} está no nível de ${patent[5]}`)
}
else if(XP>8001 && XP<9000){
    console.log(`O heroi de nome ${name} está no nível de ${patent[6]}`)
}
else if(XP>9001 && XP<10000){
    console.log(`O heroi de nome ${name} está no nível de ${patent[7]}`)
} 
else if(XP>10.001) {
    console.log(`O heroi de nome ${name} está no nível de ${patent[8]}`)
}