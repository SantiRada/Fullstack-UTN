// let planDelUsuario = "Premium"; // string
// let plan = planDelUsuario.toLowerCase();
// let price = 6999.99;

// switch(plan){ // premium ===
//     case "free": console.log("El usuario tiene un plan gratuito con anuncios."); break;
//     case "basic": console.log("El usuario tiene el plan basic de $4999.99"); break;
//     case "premium": console.log("El usuario tiene el plan " + plan + " de $" + price); break;
//     default: console.log("No se reconoce el plan del usuario."); break;
// }

// // CONVERSIÓN DE TIPOS
// let variableTexto = "27";
// console.log(typeof variableTexto);
// variableTexto = parseInt(variableTexto);
// console.log(typeof variableTexto);

// bool string number(int float double unit bigint) undefined 
// arrays - objetos - funciones

let num1 = 40;

//           0    1   2   3    4
let num2 = [ 40, 20, 10, 60, 150 ];

num2[1] = 18; // num2 = [ 40, 18, 10, 60, 150 ]

let planes = [ "free", "premium", "premium", "basic", "ultra vip", "platinum" ];

let countUsers = planes.length;

// BUCLES
// FOR - FOR OF - FOR IN
for(plan of planes) {
    // plan = planes[5] === "platinum"
    // console.log(plan);
}

planes = [ "free", "premium", "premium", "basic", "ultra vip", "platinum" ];
let prices = [ 0, 1, 2, 3, 4 ];

// RECORRER ARRAYS
for(plan of planes){
    // plan == [6] == "platinum"
    
    switch(plan.toLowerCase()){
        // case "free": console.log("El usuario tiene un plan gratuito y se le cobrará $" + prices[0]); break;
        // case "basic": console.log("El usuario tiene un plan basic y se le cobrará $" + prices[1]); break;
        // case "premium": console.log("El usuario tiene un plan premium y se le cobrará $" + prices[2]); break;
        // case "ultra vip": console.log("El usuario tiene un plan ultra vip y se le cobrará $" + prices[3]); break;
        // case "platinum": console.log("El usuario tiene un plan platinum y se le cobrará $" + prices[4]); break;
    }
}

let newPlanes = {
    // LLAVE: VALOR
    "free": 0,
    "basic": 2999.99,
    "premium": 3999.99,
    "ultra vip": 4999.99,
    "platinum": 6999.99,
};

console.log(newPlanes["basic"]);

// FOR IN - RECORRER OBJETOS
for(plan in newPlanes){
    // plan = ["free"] = "free"
    switch(plan.toLowerCase()){
        // case "free": console.log("El usuario tiene un plan gratuito y se le cobrará $" + newPlanes[plan]); break;
        // case "basic": console.log("El usuario tiene un plan basic y se le cobrará $" + newPlanes[plan]); break;
        // case "premium": console.log("El usuario tiene un plan premium y se le cobrará $" + newPlanes[plan]); break;
        // case "ultra vip": console.log("El usuario tiene un plan ultra vip y se le cobrará $" + newPlanes[plan]); break;
        // case "platinum": console.log("El usuario tiene un plan platinum y se le cobrará $" + newPlanes[plan]); break;
    }
}

// Pidamos un listado de juegos y validemos si el precio del juego es mayor menor o igual a la cantidad de plata del usuarios
// Si es menor, debe comprarlo y mostrar cuánta plata le quedó.

let games = {
    "Marvel's Wolverine": 142,
    "Dragon Quest 12: The Flames of Fate": 94,
    "Pragmata": 56,
    "Sparking Zero": 120,
    "Grand Theft Auto VI": 256,
};

let moneyUser = prompt("¿Cuánta plata tenes para gastar en juegos?");
moneyUser = parseFloat(moneyUser);
let purchased = {};

// game == "Grand Theft Auto VI"
// games[game] // 256
for(game in games){
    if(games[game] <= moneyUser){
        console.log("El usuario puede comprar " + game);
        let response = prompt(`¿Deseas comprar ${game} por $${games[game]}? (SI/NO)`);

        if(response.toUpperCase() == "SI"){
            moneyUser -= games[game];
            purchased[game] = games[game];
            console.log("El usuario compró " + game + " y le quedan " + moneyUser + " dolares.");
        }
    }
    else {
        console.log("El usuario no tiene suficiente plata para comprar " + game);
    }
}

for(game in purchased){
    console.log("El usuario compró " + game + " por " + purchased[game] + " dolares");
}