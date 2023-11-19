class Hero{

    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(){
        let typeattck = ["magia","espada","artes marciais","shuriken"];
        if(this.type = "mago"){
            console.log(this.type+" atacou usando "+ typeattck[0])
        }
        else if(this.type = "guerreiro"){
            console.log(this.type+" atacou usando a "+ typeattck[1]);
        }
        else if(this.type = "monge"){
            console.log(this.type+ " atacou usando " + typeattck[2]);
        } 
        else if(this.type = "ninja"){
            console.log(this.type +" atacou usando uma " + typeattck[3]);
        } else{
            console.log("error");
        }
    }
}
let heroi1 = new Hero("Andre", 21,"mago");
console.log(heroi1.attack());