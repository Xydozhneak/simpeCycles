stringOfNumber = 9;
squareCounteer = 9;
multiplicationCounter = 0;
sum = 1;
sumCounter = 1; 
fifteenToThirtyResult = 1;
fifteenToThirtyCounter = 15;
sumForAvarage = 0;
count = 0;
avarageCounter = 0;
sumOfPariedNum = 0;
pariedCounter = 30;
divideByThree = 100;
naturalNumber = 20;
naturalCounter = 1;
divCounter = 0; 
divSum = 0;
firstMulipl = 1; 

document.write("<pre>String of numbers from 10 to 20<\/pre>");
while(stringOfNumber < 20){
    stringOfNumber+=1; 
    document.write(`${(stringOfNumber)},`); 
}

document.write("<pre>Squares of numbers from 10 to 20<\/pre>");
while (squareCounteer < 20){
    squareCounteer++;
    square=squareCounteer;
    square = square*square;
    document.write(`${(square)},`); 
}

document.write("<pre>Multiplication table for 7 <\/pre>");
while (multiplicationCounter < 10){
    multiplicationCounter++;
    multOnSeven=multiplicationCounter;
    multOnSeven = multOnSeven*7;
    document.write(`<pre> 7 * ${multiplicationCounter} = ${multOnSeven}, <\/pre>`); 
}

while (sumCounter < 15){
    sumCounter++;
    sum+=sumCounter;
}
document.write(`This is sum of numbers from 1 to 15 <br> ${sum}`); 

document.write("<pre>This is a result of mult from 15 to 35<\/pre>");
while (fifteenToThirtyCounter <= 35) {
    fifteenToThirtyResult *= fifteenToThirtyCounter;
    fifteenToThirtyCounter++;
}
document.write(fifteenToThirtyResult); 

document.write("<pre>This is avarage value 1-500<\/pre>");
while (avarageCounter <= 500) {
    sumForAvarage += avarageCounter;
    count++;
    avarageCounter++;
}
average = sumForAvarage / count;
document.write(average); 

document.write("<pre>This is sum of all paried numbers from 30 to 80 <\/pre>");
while (pariedCounter <= 80) {
  if (pariedCounter % 2 === 0) {
    sumOfPariedNum +=  pariedCounter;
  }
  pariedCounter++;
}
document.write(sumOfPariedNum);

document.write("<pre>This is a string of numbers can be diveded on 3 from 100 to 200<\/pre>");
while (divideByThree <= 200) {
  if (divideByThree % 3 === 0) {
    document.write(`${(divideByThree)},`); 
  }
  divideByThree++;
}

document.write("<pre>This is operations with the natural numer (20) <\/pre>");
while (naturalCounter <= naturalNumber) {
    if (naturalNumber % naturalCounter === 0) {
        document.write(`${(naturalCounter)},`); 
        if (naturalCounter % 2 === 0) { 
            divCounter++;
            divSum += naturalCounter;
          }
    }

    naturalCounter++;
  }
  document.write(` <br> ${(divCounter)}, <br> ${(divSum)} <br>`);

document.write("<pre>This is just multiplication table <\/pre>");
while (firstMulipl <= 10) {
  secondMultipl = 1; 
  while (secondMultipl <= 10) {
    document.write(`${firstMulipl} * ${secondMultipl} = ${firstMulipl*secondMultipl}  <br>`);
    secondMultipl++; 
  }
  firstMulipl++; 
  document.write("<br>"); 
}
 
  