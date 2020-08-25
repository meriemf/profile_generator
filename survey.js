const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let questions =['What\'s your name? Nicknames are also acceptable :) ','What\'s an activity you like doing? ','What do you listen to while doing that? ','Which meal is your favourite (eg: dinner, brunch, etc. )','What\'s your favourite thing to eat for that meal? ','Which sport is your absolute favourite? ','What is your superpower? In a few words, tell us what you are amazing at! '];
let answer_tab =[];
rl.question(questions[0], (answer) => {
    answer_tab.push(answer);
    rl.question(questions[1], (answer) => {
      answer_tab.push(answer);
      rl.question(questions[2], (answer) => {
        answer_tab.push(answer);
        rl.question(questions[3], (answer) => {
          answer_tab.push(answer);
          rl.question(questions[4], (answer) => {
            answer_tab.push(answer);
            rl.question(questions[5], (answer) => {
              answer_tab.push(answer);
              rl.question(questions[6], (answer) => {
                answer_tab.push(answer);
                console.log(`The particpant ${answer_tab[0]} likes to listen to ${answer_tab[2]} while ${answer_tab[1]}. \n The ${answer_tab[3]} is his/her favorite meal especially the ${answer_tab[4]}. \n${answer_tab[0]} likes to ${answer_tab[5]}.\nThe superpower of ${answer_tab[0]} is ${answer_tab[6]}. `);
                rl.close();
              });
            });            
          });
        });    
      });       
    });  
  });
