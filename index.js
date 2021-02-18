let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = [];
foodCabinet = food.split(',').sort();
let equipmentCabinet = [];
equipmentCabinet = equipment.split(',').sort();
let petsCabinet = []
petsCabinet = pets.split(',').sort();
let sleepAidsCabinet = [];
sleepAidsCabinet = sleepAids.split(',').sort();




//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []
cargoHold.push(foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet);
console.log(cargoHold);
console.log("\n");

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
cabinetNumber = input.question("Select a cabinet from 0-3 in the cargoHold: ");
cabinetNumber = Number(cabinetNumber);

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

console.log(cargoHold[cabinetNumber]);
console.log("\n");

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

cabinetNumber = input.question("Select a cabinet from 0-3 in the cargoHold: ");
cabinetNumber = Number(cabinetNumber);
cabinetItem = input.question("Please type desired item to check cabinet: ");
if(cargoHold[cabinetNumber].includes(cabinetItem)){
  console.log(`Cabinet ${cabinetNumber} DOES contain ${cabinetItem}.`);
}else{
  console.log(`Cabinet ${cabinetNumber} DOES NOT contain ${cabinetItem}.`)
}