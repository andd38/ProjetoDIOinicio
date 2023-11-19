let invoice= {
    name : "Andre",
    age : 25,
    products :{
        0:["mouse 2xwm",29.90],
        1:["Teclado mecanico",129.90],
        2:["Monitor", 899.90]
    },
    taxes:98.90

};
for (const index in invoice.products) {
    let [productsName,productsPrice]= invoice.products[index]
    console.log(`Os produltos sao ${productsName} e seus preços sao :${productsPrice}`)
}