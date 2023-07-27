/*let js = 'amazing';
console.log(40+8+23-10);*/

 //console.log(typeof true)
/*
let age = 30;  //this value can change
age = 31;

const birthYear = 1991;  //this value never have been changed
//birthYear = 1990;

//const job;  //variable needs be declare

var job = 'programmer';
job = 'teacher';
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old' + job + '!';

const jonasNew = "I'm ${firstName} ,a ${year - birthYear} years old ${job}!"
console.log(jonas,jonasNew);
 */

// const age = 15;
// const isOLdEnough = age >= 18;
//
// if(isOLdEnough){
//     console.log("Sarah can start driving license.");
// }else{
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young.Wait another ${yearsLeft} year.`);
// }
//
// const birthYear = 1991;
//
// let century;
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century)
// //Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);
// console.log(String(18), 18);
//
// //Type coercion
// console.log("I'm" + 23 + 'years old.')
// console.log("I'm" + ' 23 ' + 'years old.')
// console.log("I'm" + String(23) + 'years old.')
//
// console.log('23' + '19' - 3)
//
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// //5Falsy values: 0, "",undefined,null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
//
// const money = 0;
// if (money){
//     console.log('Do not spend it all ;)')
// }else{
//     console.log('You should get a job!')
// }
//
// let height;
// if(height){
//     console.log('YAY!Height is defined');
// }else{
//     console.log('Height is undefined');
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult (strict)');
// if (age == 18) console.log('You just became an adult (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite)
// if (favourite === 23){//23 == 23
//     console.log('Cool!')
// }else if(favourite ===7){
//     console.log('7 is also cool..')
// }else if(favourite ===9) {
//     console.log(' is also cool..')
// }else{
//     console.log('Number is not 23 or 7')
// }
//
// if(favourite !== 23) console.log('Why not 23??')

// //Logical Operators
// const hasDriversLicense = true  //A
// const hasGoodVision = true  //B
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
//
// // if (hasDriversLicense && hasGoodVision){
// //     console.log('Sarah is able to drive')
// // }else{
// //     console.log('Someone else should drive...')
// // }
//
// const isTired = true;  //C
// console.log(hasDriversLicense && hasGoodVision && isTired);
//
// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive')
// }else{
//     console.log('Someone else should drive...')
// }


// const day = 'monday';
// switch(day){
//     case 'monday':   // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!')
//         break;
// }
//
// if(day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }else if(day === 'tuesday'){
//     console.log('Prepare theory videos');
// }else if(day === 'wednesday' || day ==='thursday'){
//     console.log('Write code examples');
// }else if(day === 'friday'){
//     console.log('Record videos');
// }else if(day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend');
// }else{
//     console.log('Not a valid day!')
// }

const age = 23;
// age >= 18 ? console.log('I like drink wine'):
//     console.log('I like drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);
console.log(`I like drink ${age >= 18 ? 'wine' : 'water'}`)





