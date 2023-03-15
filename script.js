/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let button = document.querySelector(".button");
let storyOpening = document.querySelector("story-opening");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionFour = document.querySelector(".option-four");
let optionFive = document.querySelector(".option-five");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(."option-one-end");
let optionTwoEnd = document.querySelector(."option-two-end");



 When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

option-One.onclick=function(){
optionOneScreen.style.display = "block";
storyOpening.style.display = "none";
title.style.display ="none";
buttons.style.display = "none";
    
};

optionTwo.onclick=function(){
optionTwoScreen.style.display
storyOpening.style.display = "none";
title.style.display ="none";
buttons.style.display = "none";
 
};


optionFour.onclick=function(){
optionOneEnd.style.display = "block";
optionOneScreen.style.display = "none";
storyOpening.style.display = "none";
title.style.display = "none";
buttons.style.display = "none";
  
}; 

optionFive.onclick=function(){
optionTwoEnd.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
optionTwoScreen.style.display = "none";
  
}; 

next.onclick=function(){ 
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none"; 

};
  
