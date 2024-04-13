let name1 = prompt("User name")
let surname = prompt("surname")
let age = prompt ("Age")

if (name1 === "admin" || surname === "user" && age <= 10 ){
    alert("hush kelibsiz")
    document.write(`<img src="собака.jpg"/>`)
}else if (name1 === "admin" || surname === "user" && age <= 20 ){
    alert("hush kelibsiz")
    document.write(`<img src="гф.gif"/>`)

}else if (name1 === "joxa" && surname === "toxa" && age === "25"){
    confirm("Vay oooo Joxa toxa mi bu ")
    alert("toshnamu bu")
    confirm("Anqpa bu")
    alert("Mujiqo buu")
    confirm("Yo mayo")
    document.write(`<img src="гф.gif"/>`)
}


else{
    alert("Кто ты ее по жизне ?")
}
