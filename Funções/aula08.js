function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}
let User_Name = getFirstName("andre mourao");
console.log(User_Name);