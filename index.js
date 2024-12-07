/* import inquirer from 'inquirer';

async function askQuestions(Dry, Wet) {
const questions = [
      {
        type: 'list',
        name: 'category',
        message: 'Dry or wet effects?',
        choices: ['Dry', 'Wet'],
      },
  return new Promise((resolve) => {
    if (Math.round(Math.random())) {
      resolve(Dry);
    } else {
      resolve(Wet);
    }
  });
}


/*
      {
            type: 'list',
            name: 'dryEffects',
            message: 'You chose dry effects',
            choices: ['A', 'B'],
    },
    {
            type: 'list',
            name: 'wetEffects',
            message: 'You chose wet effects',
            choices: ['C', 'D'],
    },

    return inquirer.prompt(questions);


// Using async/await to handle responses
(async () => {
    try {
        const answers = await askQuestions();

        if (answers.category) {
            console.log("Choose between dry or wet");
        }
        else if (answers.dry) {
            console.log(`Thanks for choosing, ${answers.dry}!`);
        }
        else if (answers.wet) {
            console.log(`Thanks for choosing, ${answers.wet}!`);
        }
        else if (answers.dryEffects) {
          console.log("Thanks for choosing one!")
        }
        else if (answers.wetEffects) {
          console.log("Thanks for choosing one!")
        }
    } catch (error) {
        console.error('Error:', error);
    }
})();
*/
import inquirer from 'inquirer';

// Function to ask the first set of questions
function askFirstQuestions() {
    const questions = [

        {
            type: 'list',
            name: 'effectCategory',
            message: 'Choose a category!',
            choices: ['Dry', 'Wet'],
        },
    ];

    return inquirer.prompt(questions); // Return the promise from inquirer
}

// Function to ask the second set of questions based on the first answers
function askSecondQuestions(answers) {
    const dryQuestions = [
           {
            type: 'list',
            name: 'Dry',
            message: 'Check out the different types of dry effects!',
            choices: ['A', 'B'],
        },
    ];
    return inquirer.prompt(dryQuestions).then(secondAnswers => {
        // Combine answers from both sets of questions
        return { ...answers, ...secondAnswers };
    });
}
/*
function askThirdQuestions(answers) {
    const wetQuestions = [
           {
            type: 'list',
            name: 'Dry',
            message: 'Check out the different types of dry effects!',
            choices: ['C', 'D'],
        },
    ];
   return inquirer.prompt(wetQuestions);
}
*/

// Start the survey by chaining the promises
askFirstQuestions()
    .then(askSecondQuestions) // Pass the first answers to the next function
    .then(finalAnswers => {
        // Handle the final combined answers
        console.log('Final Survey Responses:', finalAnswers);
    })
    .catch(error => {
        console.error('Error conducting the survey:', error);
    });

