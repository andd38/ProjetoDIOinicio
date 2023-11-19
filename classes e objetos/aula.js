class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }
    ToString(){
    console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }
}
let boloFesta = new formaDeBolo("massa de chocolate", "nutella");
let bolo2 = new formaDeBolo("Morango", "chocolate");
console.log(bolo2.ToString())

