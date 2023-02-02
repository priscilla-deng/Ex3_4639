//three quotes
const quote1 = "'Actually, life is beautiful and I do have the time.'"
const quote2 = "'The other day, lying in bed, I felt my heart beating for the first time in a long while. I realized how little I live in my body, how much in my mind.' -Rodger Kamenetz"
const quote3 = "'I have buried myself in every place I have ever been.'"
//array of quotes
const quoteList = [quote1, quote2, quote3];
//random number from 0-2 (for quotes 1-3)
let num = Math.floor(Math.random() * 3);
//log random quote to the console
console.log(quoteList[num]);