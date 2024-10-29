import inquirer from 'inquirer';

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

