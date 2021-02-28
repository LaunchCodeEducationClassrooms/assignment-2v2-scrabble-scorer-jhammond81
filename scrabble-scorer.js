// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
let transformStyle;
let simpleScore;
let vowelBonusScore= "aeiou";
let userWord;
let number=0;
let scrabbleScore; 
let scoringAlgorithms;
let newPointStructure= "abcdefghijklmnopqrstuvwxyz";
let scorerPrompt;









	
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //





function runProgram(){

      userWord=initialPrompt();



  transformStyle=scoreStylePrompt();

  console.log(userWord);
  console.log(transformStyle);
  
}
  
  
  function oldScrabbleScorer(word,obj) {
      let score=0;
      for (var key in obj){


      }
      return score;

    }   

	function addOne(){
    number++;

  }

  function initialPrompt() {
   
   return input.question("Enter a word to score:");
}

  function scoreStylePrompt(){
  return input.question("How do you want to score this? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points .\n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2:");
}



function oldScrabbleScorer(classic){

  console.log("inOldScrabbleScorer");
  console.log(classic);
  return classic;
}

function transform(scoreMethod,word)  {
  if(scoreMethod==("0")){
    return oldScrabbleScorer(word);
  }
  if(scoreMethod==("1")){
    return vowelBonusScore(word);
  }
  If(scoreMethod==("2"))
    return  newPointStructure(word);
  }



   



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

