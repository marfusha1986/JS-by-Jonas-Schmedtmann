const bill = 65;
// let tip;
// let total;
// if(bill < 50) {
//     tip = bill * 15 / 100;
//     total = tip + bill
//     console.log(`The bill was ${bill},the tip was ${tip} and the total value ${total}.`)
// }else if(bill >= 50 && bill <= 300 ) {
//     tip = bill * 15 / 100;
//     total = tip + bill
//     console.log(`The bill was ${bill},the tip was ${tip} and the total value ${total}.`)
// }else if(bill > 300){
//     tip = bill * 20 / 100;
//     total = tip + bill
//     console.log(`The bill was ${bill},the tip was ${tip} and the total value ${total}.`)
// }


const tip = bill <= 300 && bill >= 50 ? bill * 0.15:
    bill * 0.2;
    console.log(`The bill was ${bill},the tip was ${tip} and total value ${bill + tip}.`);