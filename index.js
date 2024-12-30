
import inquirer from 'inquirer';

 async function effectCategoryQuestions() {
  const dryOrWetAnswers = await inquirer.prompt([
    {
      type: 'list',
      name: 'category',
      message: 'Dry or wet effects?',
      choices: ['Dry', 'Wet'],
    },
    {
      type: 'confirm',
      name: 'continue',
      message: 'Do you want to continue?',
      default: true,
    },
  ])
  .then((answer)=>{
    if (answer.category.toLowerCase() == 'dry'){
      const dryAnswers = inquirer.prompt([
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
  ])
  .then(answer => {
    console.log(answer);
  });
    } else {
const wetAnswers = inquirer.prompt([
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
  ])
  .then((answer) => {
    console.log(answer.category);
    if (answer.category == 'delay'){
      // show delay pedals
    } else {
      // reverb pedals
    }
  })
    }
  })


// console.log(`You chose, ${dryOrWetAnswers.category} effects!`);
//   if (dryOrWetAnswers.continue) {
//     console.log('Great! Let’s continue.');
//   } else {
//     console.log('Goodbye!');
//   }
  // console.log(`Check out the various ${dryAnswers.category} effects!`);
  // if (dryAnswers.continue) {
  //   console.log('Great! Let’s continue.');
  // } else {
  //   console.log('Goodbye!');
  // }

  // console.log(`Check out the various ${wetAnswers.category} effects!`);
  // if (wetAnswers.continue) {
  //   console.log('Great! Let’s continue.');
  // } else {
  //   console.log('Goodbye!');
  // }
}

effectCategoryQuestions();

/*
import inquirer from 'inquirer';

effectCategoryQuestions();

async function prompt (choice1, choice2) {
  return new Promise((resolve) => {
    if (Math.round(Math.random())) {
      resolve(choice1);
    } else {
      resolve(choice2);
    }
  });
}

function askAboutAorB () {
  prompt('A', 'B')
    .then((choice) => {
      if (choice === 'A') {
        askAboutA();
      }
      if (choice === 'B') {
        askAboutB();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function askAboutA () {
  prompt('C', 'D')
    .then();
}
function askAboutB () {
  prompt('E', 'F')
    .then();
}
*/
