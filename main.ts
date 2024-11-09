// let fruitchaat = ["Apple", "Mango", "Banana",]

// // fruitchaat.push("Melon");
// // console.log(fruitchaat);


// // fruitchaat.pop();
// // console.log(fruitchaat);


// fruitchaat = fruitchaat.concat(["Melon", "Kiwi"]);
// console.log(fruitchaat);

//   while loop
//  let ramadanDays = 0;

//  while(ramadanDays <= 10 ){
//     console.log("ramadanfasting")
//     ramadanDays++;
//  }


// let i = 0; //initialize

// while(i <= 10 ){
//    console.log(i);
//    i++
//    //codeExecute
// }
 import inquirer from "inquirer"; 
  let todos= []; 
  let condition =true; 

  while(condition) {


let todoQuestions = await inquirer.prompt(
    
       [
         {
          name: "firstQuestion", 
          type: "input" ,
          message: "what do you what to add in your Todos?" ,
        }, 

    
        {
            name:  "secondQuestion", 
            type: "confirm", // when type is confirm answer is in yes or no
            message: "Do you want to add more?" ,
            default: "true"
        }
    ]

 );    
  
 todos.push( todoQuestions.firstQuestion);
 console.log(todos)
 //this loop is running on the base of this variable condition
 condition =  todoQuestions.secondQuestion;

  }


