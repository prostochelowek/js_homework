
let message = ''
let age = ""
age = prompt("Введіть свій вік")
if (age === null) {
    message = "Скасовано користувачем" 
    console.log (message)
} else if(isNaN(Number(age))) {
   alert ("ви ввели не число")
} else if (age<=0){
   alert ("Помилка, будь ласка, введіть число від 0 до 150")
} else{
    if (age <2) {
        alert("Ви немовля")
    } else if(age>2 && age<18) {
       alert("Ви дитина")
    }
    else if (age>=18 && age<=150){
        alert("Ви доросла людина")
    
    } else {
       alert ( "Помилка, будь ласка, введіть число від 0 до 150")
    }
}

