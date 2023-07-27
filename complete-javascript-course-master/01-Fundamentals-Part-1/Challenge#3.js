
// const scoreDolphins = Number(96 + 108 +89) / 3;
// const scoreKoalas = Number(91 + 110 + 88) / 3;
// console.log(scoreKoalas,scoreDolphins)
//
// if (scoreDolphins > scoreKoalas){
//     console.log('Dolphins win the trophy.');
// }else if(scoreDolphins < scoreKoalas){
//     console.log("Koalas win the trophy.");
// }else if(scoreDolphins === scoreKoalas){
//     console.log("Both win the trophy.");
// }

//Bonus 1
const scoreDolphins = Number(97 + 112 + 80) / 3;
const scoreKoalas = Number(109 + 95 + 50) / 3;
console.log(scoreKoalas,scoreDolphins)
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy.');
}else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100 ){
    console.log("Koalas win the trophy.");
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy.");
}else{
    console.log('No one wins the trophy.')
}