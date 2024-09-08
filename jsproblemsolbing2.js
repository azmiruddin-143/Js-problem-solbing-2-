// Prectice Problem solbe 2 

// node jsproblemsolbing2.js//

// let azmir = 200;
// let soniya = 52;
// let badsha = 99;

// function higstnumber() {

//     if (azmir > soniya && azmir > badsha) {
//         console.log("Azmir Tumi Sob theke besi Number Paico", azmir);
//     }

//     else if (soniya > azmir && soniya > badsha) {
//         console.log("Soniya Tumi Sob theke besi Number Paico", soniya);
//     }
//     else {
//         console.log("Badsha tumi Sob theke besi paico", badsha);
//     }

// }

// higstnumber();


//  let man = Math.min(41,564,659,54,265,2,65,26,6,2,5)
//  console.log(man);


// node jsproblemsolbing2.js//

// let tallest = [54, 85, 56, 95, 96, 105, 5, 6, 8, 780, 545, 995, 500]
//  function lomba(big) {

//      let man = big[0]
//     for(let azmir of big){
//          if(azmir > man){
//             man = azmir      
//          }
//     }
//     return man
//  }

//  let max = lomba(tallest);
//  console.log(max);


// node jsproblemsolbing2.js//

// let khato = [5, 565, 65, 66, 99, 84, 59, 25, 56, 9, 85, 741, 18, 36]

// function choto(arry) {
//     let small = arry[0];
//     for(let number of arry){
//         if(number < small){
//             small = number
//         }
//     }
//     return small;
// }
// let finaly = choto(khato)
// console.log(finaly);



// node jsproblemsolbing2.js//

// let khatperpis = 16500;
// let cukesperpis = 8500;
// let dasintabileperpis = 5000;
// let almariperpis = 2200;

// function price(khat, cukes, dasintable, almari) {
//     let khatprice = khat;
//     let cukesprice = cukes;
//     let dasintableprice = dasintable;
//     let almariprice = almari;
//     let final = khatprice + cukesprice + dasintableprice + almariprice;
//     return final ;
// }

// let allprice = price(khatperpis, cukesperpis, dasintabileperpis, almariperpis);
// console.log(allprice);


// node jsproblemsolbing2.js//

// let khatperpis = 16500;
// let cukesperpis = 8500;
// let dasintabileperpis = 5000;
// let almariperpis = 2200;

// function price(khat, cukes, dasintable, almari) {
//     let khatprice = khat * 2;
//     let cukesprice = cukes *3 ;
//     let dasintableprice = dasintable * 5;
//     let almariprice = almari *1;
//     let final = khatprice + cukesprice + dasintableprice + almariprice;
//     return final ;
// }

// let allprice = price(khatperpis, cukesperpis, dasintabileperpis, almariperpis);
// console.log(allprice);


// node jsproblemsolbing2.js//

// let price = [5500, 655, 9665, 20000, 40000, 55000, 150000]
// function higst(boro) {
//     let valu = boro[0]
//    for(let phone of boro){
//       if(phone > valu){
//          valu = phone
//       }
//    }
//    return valu ;
// }

// let big = higst(price);
// console.log(big);



// node jsproblemsolbing2.js//

// let phones = [
//     { name: "samsang", price: 250, color: "black", ram: 8 },
//     { name: "Oppo", price: 200, color: "white", ram: 6 },
//     { name: "vivo", price: 26005, color: "red", ram: 7 },
//     { name: "Iphone", price: 160000, color: "blue", ram: 8 },
// ]
//  function azmir(phones) {
//     let bigprice = phones[0];
//      for(let valu of phones){
//         if(valu.price > bigprice.price){
//            bigprice = valu;
//         }
//      }
//      return bigprice;

//  }
//  let final = azmir(phones);
//  console.log("sob theke besi dam",final);



// node jsproblemsolbing2.js//
let shirtperprice = 750;
let pantperprice = 950;
let tshirtperprice = 400;
let showsperprice = 1600;

function shoping(shirtprice, pantprice, tshirtprice, showsprice) {
    let shirtperprice = shirtprice;
    let pantperprice = pantprice;
    let tshirtperprice = tshirtprice;
    let showsperprice = showsprice;
    let total = shirtperprice + pantperprice + tshirtperprice + showsperprice;
    return total;
};

let final = shoping(shirtperprice, pantperprice, tshirtperprice, showsperprice);
console.log(final);


