//'use strict';     //Strict Mode

// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest) hasDriversLicense=true;
// if(hasDriversLicense) console.log('I can drive')

//const private = 'Audio';
//const interface = 123;

// //Functions
// function logger(){
//     console.log('My name is Jonas');
// }
//
// logger();
// logger();
// logger();
//
// function fruitProcessor(apples, oranges){
//     const juice = 'Juice with ${apples} apples and ${oranges} oranges.';
//     return juice;
// }
//
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice)
//
// const appleOrangeJuice = fruitProcessor(2,5);
// console.log(appleOrangeJuice);
//
// const num = Number('23');
// console.log(num)


// //Function declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991)
//
// //Function expression
// const calcAge2 = function(birthYear){
//     return 2037- birthYear;
// }
// const age2 = calcAge2(1991);
//
// console.log(age1,age2);

// //Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
//
// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement
//     return `${firstName} retires in ${retirement} years.`;
// }
//
// console.log(yearsUntilRetirement(1991,'Jonas'));

// //Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }
// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//
//     const juice = "Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.";
//     return juice
// }
// console.log(fruitProcessor(2,3));


// //Reviewing functions
//
// const calcAge = function (birthYear){
//     return 2037 - birthYear
// }
// const yearsUntilRetirement = function (birthYear,firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }
// }
//
//
// console.log(yearsUntilRetirement(1991,'Jonas'));
// console.log(yearsUntilRetirement(1970,'Mike'));

// //Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
//
// const friends = ['Michael','Steven','Peter'];
// console.log(friends);
//
// const y = new Array(1991,1984,2001,2020);
//
// console.log(friends[0]);
//
// console.log(friends.length);
// console.log(friends[friends.length-1]);
//
// friends[2] = 'Jay';
// console.log(friends);
//
//
// const firstName = 'Jonas';
// const jonas = ['Jonas','Schmedtmann',2037 - 1991,'teacher',friends];
// console.log(jonas);
// console.log(jonas.length);
//
// //Exercise
// const calcAge = function(birthYear){
//     return 2037-birthYear;
// }
// const years = [1990,1967,2002,2010,2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);
//
// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
// console.log(ages)

// //Array Methods
// const friends = ['Michael','Steven','Peter'];
// //Add Elements
// const newLength = friends.push('Jay');  //push is attaches anything in the array
// console.log(friends);
// console.log(newLength);
//
// friends.unshift('John');
// console.log(friends);  //unshift attaches element to the 1st place
//
// //Remove Elements
// friends.pop(); //remove last element
// console.log(friends);
// const popped = friends.pop(); //popped return removed element
// console.log(popped)
//
// friends.shift();  //removed First element
// console.log(friends);
//
// console.log(friends.indexOf('Steven'));
//
// console.log(friends.includes('Steven')); //boolean is it in the array true or false
//
// if(friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

//Objects
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']
// ];

// const jonas = {
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     age:2037-1991,
//     job: 'teacher',
//     friends:['Michael','Peter','Steven']
// };
// console.log(jonas)
//
// console.log(jonas.lastName)
// console.log(jonas["lastName"]);
//
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
//
//
// const interestedIn = prompt('What do you want to know about jonas?Choose between firstName,lastName,age,job and friends');
//
// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log('Wrong request!Choose between firstName,lastName,age,job and friends');
// }
//
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas)

//Challenge
//'Jonas has 3 friends,and his best friend is called Michael.'
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is ${jonas.friends[0]}`);

// const jonas = {
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     birthYear:1991,
//     job: 'teacher',
//     friends:['Michael','Peter','Steven'],
//     hasDriverLicense:true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }


    // calcAge: function(){
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    //     }

//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//
//     getSummary:function(){
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job},and he has ${this.hasDriverLicense ?
//             'a' : 'no'} driver's license.`
//     }
// };
//
// console.log(jonas.calcAge());
// console.log(jonas.age);
// //console.log(jonas['calcAge'](1991));
// //Challenge
// //'Jonas is a 46-years old teacher,and he has a driver's license'
// console.log(jonas.getSummary())

//For Loops
//for loop keeps running while condition is True
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} `);
// }
//Looping Arrays
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']
// ];
// const types = [];
// for(let i = 0; i < jonas.length; i++) {
//     //reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
//
//     //filling types array
//     //types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);
//
// const years = [1991,2007,1969,2020];
// const ages = [];
// for(let i = 0;i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']
// ];
// console.log('----ONLY STRINGS-----')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue
//     console.log(jonas[i], typeof jonas[i]);
// }
//
// console.log('----BREAK WITH NUMBER-----')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break
//
//     console.log(jonas[i], typeof jonas[i]);
// }

// //Reverse  Looping
// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(jonas[i]);
// }
//
// //Loop in Loops
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`-------Starting exercise ${exercise}-------`);
//     for(let rep = 1;rep < 6; rep++){
//         console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);
//     }
// }
//While Loop
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} `);
// }

let rep = 1;
while(rep<=10){
    // console.log(`WHILE: Lifting weights repetition ${rep} `);
    rep++;
}

let dice =Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice===6) console.log('Loop is about to end..');
}