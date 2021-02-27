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
let vowelBonusScore ;
let userWord;
let number=0;
let scrabbleScore; 



function scorerPrompt() {}



let newPointStructure =
{
    
      a: 1,
		  e: 1,
			i: 1,
			o: 1,
			u: 1,
			l: 1,
			n: 1,
			r: 1,
			s: 1,
			t: 1,
			d: 2,
			g: 2,
			b: 3,
			c: 3,
			m: 3,
			p: 3,
			f: 4,
			h: 4,
			v: 4,
			w: 4,
			y: 4,
			k: 5,
			j: 8,
			x: 8,
			q: 10,
			z: 10,
};
let scoringAlgorithms;
let score=0;

  



 
	
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function runProgram(){

  userWord=initialPrompt();



  transformStyle=scoreStylePrompt();

  console.log(userWord);
  console.log(transformStyle);
  
}
  function oldScrabbleScorer(word,obj) {
      let score=0
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
  return input.question("How do you want to score this? Enter 1 for classic 2 for new point structure or 3 for bonus vowel.");
}



function oldScrabbleScorer(classic){

  console.log("inOldScrabbleScorer");
  console.log(classic);
  return classic;
}

function transform(scoreMethod,word)  {
  if(scoreMethod==("1")){
    return oldScrabbleScorer(word);
  }
  if(scoreMethod==("2")){
    return vowelBonusScore(word);
  }
  If(scoreMethod==("3"))
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

