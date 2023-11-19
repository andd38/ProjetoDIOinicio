
let name = "Felipe";
let age = 28;
let products = ["mouse 2xwm","Teclado mecanico","monitor"]
let priceProducts = [29.90,129.99,899.99]
GenerateInvoice(name,age,products,priceProducts)
function GenerateInvoice(name){
    console.log("O comprador é " + name )
    console.log("O produlto é "+ products[0])
    console.log("idade é : "+ age)
    console.log("O valor é "+priceProducts[0])
}