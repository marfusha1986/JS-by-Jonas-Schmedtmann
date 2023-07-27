const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44,23,71);
console.log(scoreDolphins);
let scoreKoalas  = calcAverage(65,54,49);
console.log(scoreKoalas);

const checkwinner = function (avgDolphins,avgKoalas){
    if(avgDolphins >= avgKoalas * 2){
        console.log(`Team Dolphins: ${avgDolphins}.They are winner.`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Team Koala: ${avgKoalas}.You are winner.`);
    }else{
        console.log(`No team wins..`);
    }
}
checkwinner(scoreDolphins,scoreKoalas);

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
checkwinner(scoreDolphins,scoreKoalas);