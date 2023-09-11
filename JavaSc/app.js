// 1.
let firstName = "Dima"
let lastName = "Varakuta"
let fullName =`${firstName} ${lastName}`
 console.log(fullName)
 
 // 2.
let length = 4;
let width = 6;
length * width
console.log(length * width)

//3.
console.log(Math.pow(10, 6))

//4.
console.log (Math.floor(Math.random()*50))

//5.
let number= -2
if (number < 0){
    console.log("positive value")
}else{
    console.log("negative value")
}

//6.
 let text ="Hi Nikolai"
 console.log(text[text.length-2])

//7.
let month = 10
switch(month){
        case 1:
     console.log("January")
        break;
        case 2:
            console.log("February")
         break;
        case 3 :
          console.log("March")
        break;
        case 4 : 
            console.log("April")
        break;
        case 5:
            console.log('may');
            break;
        case 6:
              console.log("June")
        break;
        case 7:
           console.log("July")
        break;
        case 8: 
            console.log("August")
         break;
         case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
         default:
          console.log("there is no such month")
}

//8.
let password = "pas&word";
if( password.length > 5) 
    if ( password.indexOf('$') >0){
     console.log('This password is strong!')
 }else{
     console.log("this password is weak")
 }

 //9.
 let a = 10
 let b = 12
 if (typeof a =="number" && typeof b =="number"){
    console.log (a + b)
 } else {
    console.log ( "Sum of those items can\’t be counted!")
 }
 
 //10.
 let textOne= 'Dima'
 let textTwo='Varakuta'
 if (typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length){
    console.log("those items are strings and they're equal")
 }else {
    console.log("items are not compareble")
 }