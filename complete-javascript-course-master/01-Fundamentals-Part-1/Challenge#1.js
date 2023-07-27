const massMark = 78;
const heightMark = 169;
const massJohn = 92;
const heightJohn = 195;

const BMIMark = massMark / heightMark * heightMark;
console.log(BMIMark)
const BMIJohn = massJohn / heightJohn * heightJohn;
console.log(BMIJohn)
const markHigherBMI = BMIJohn > BMIMark;
console.log(markHigherBMI);
