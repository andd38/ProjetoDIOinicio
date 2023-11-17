 pokemons = [{
    nome: 'pikachu',
    tipo: 'trovão',
    vida: 150,
    level: 40
},
{
    nome: 'Gyrados',
    tipo: 'agua',
    vida: 350,
    level: 45
},

{
    nome: 'charizard',
    tipo: 'Fogo',
    vida: 450,
    level: 50

} ]

let timePokemon = [
    ["pikachu,'m' ,level 23",],
    ["Charmander", 'F', "level : 2"]
] 
for (const Time of pokemons) {
    console.log(Time.nome + " e o seu level é :"+ Time.level);
}

/* for (const iterator of timePokemon) {
    console.log(iterator)
} */