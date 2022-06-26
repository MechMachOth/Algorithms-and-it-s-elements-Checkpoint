
function lengthOfTheSentence(text) {
let len=text.split("");
for (i=0 , countLen = 0; i<len.length; i++){
    countLen++;}
    let x = 'There are ' + countLen + ' characters in this sentence.';

return x;}



function numberOfWords(text){
    let wor=text.split(" ");
    
    for (i=0 , countWor = 0; i<wor.length; i++){
        countWor++;}
        let x ='In this sentence there are ' + countWor + ' words.';
    return x;
}


function numberOfVowels(text){
const vowels = ["a", "e", "i", "o", "u"]
  let countVow = 0

  for (let i of text.toLowerCase()) {
    if (vowels.includes(i)) {
      countVow++
    }
  }
  let x ='In this sentence there are ' + countVow + ' vowels.';

return x;}