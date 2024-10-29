import inquirer from 'inquirer';

/* Current working code: not working
async function effectCategoryQuestions() {
  const dryOrWetAnswers = await inquirer.prompt([
    {
      type: 'list',
      name: 'category',
      message: 'Dry or wet effects?',
      choices: ['dry', 'wet'],
    },
    {
      type: 'confirm',
      name: 'continue',
      message: 'Do you want to continue?',
      default: true,
    },

  ]);

const dryAnswers = await inquirer.prompt([
    {
            type: 'list',
            name: 'category',
            message: 'You chose dry effects',
            choices: ['Volume', 'Compressor'],
    },
    {
      type: 'confirm',
      name: 'continue',
      message: 'Do you want to continue?',
      default: true,
    },

  ]);


const wetAnswers = await inquirer.prompt([
    {
            type: 'list',
            name: 'category',
            message: 'You chose wet effects',
            choices: ['Delay', 'Reverb'],
    },
    {
      type: 'confirm',
      name: 'continue',
      message: 'Do you want to continue?',
      default: true,
    },

  ]);

console.log(`You chose, ${dryOrWetAnswers.category} effects!`);
  if (dryOrWetAnswers.continue) {
    console.log('Great! Let’s continue.');
  } else {
    console.log('Goodbye!');
  }

  console.log(`Check out the various ${dryAnswers.category} effects!`);
  if (dryAnswers.continue) {
    console.log('Great! Let’s continue.');
  } else {
    console.log('Goodbye!');
  }

  console.log(`Check out the various ${wetAnswers.category} effects!`);
  if (wetAnswers.continue) {
    console.log('Great! Let’s continue.');
  } else {
    console.log('Goodbye!');
  }
}


effectCategoryQuestions();

*/
// Trying this solution out below //

async function askQuestions() {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        },
      {
        type: 'list',
        name: 'category',
        message: 'Dry or wet effects?',
        choices: ['Dry', 'Wet'],
      },
      {
        type: 'confirm',
        name: 'dry',
        message: 'Dry selected',
        default: true, // Default answer is true
      },
      /* {
        type: 'confirm',
        name: 'wet',
        message: 'Wet selected',
        default: false, // Default answer is false
        }, */
      {
            type: 'list',
            name: 'dryEffects',
            message: 'You chose dry effects',
            choices: ['Volume', 'Compressor'],
    },
    {
            type: 'list',
            name: 'wetEffects',
            message: 'You chose wet effects',
            choices: ['Delay', 'Reverb'],
    },
    ];

    return inquirer.prompt(questions);
}

// Using async/await to handle responses
(async () => {
    try {
        const answers = await askQuestions();

        console.log(`Hello, ${answers.name}!`);
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

// Reference: Trying this out //

/*
const inquirer = require('inquirer');

async function askQuestions() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'confirm',
            name: 'wantsCoffee',
            message: 'Do you want coffee?',
            default: false, // Default answer is false
        },
    ];

    return inquirer.prompt(questions);
}

// Using async/await to handle responses
(async () => {
    try {
        const answers = await askQuestions();

        console.log(`Hello, ${answers.name}!`);

        if (answers.wantsCoffee) {
            console.log("Great! I'll get you a coffee.");
        } else {
            console.log("No coffee? That's okay!");
        }
    } catch (error) {
        console.error('Error:', error);
    }
})();
Explanation:
Define Questions: The questions array includes a confirm prompt, which will return true if the user selects "Yes" and false if they select "No".
Using Async/Await: The askQuestions function is called within an async IIFE (Immediately Invoked Function Expression) to make handling promises easier.
Handle Responses: After getting the answers, a conditional check (if (answers.wantsCoffee)) is used to determine the user's choice and respond accordingly.
This approach allows you to easily manage yes/no questions and handle the corresponding logic in your application! If you have any specific scenarios in mind, let me know!
*/
