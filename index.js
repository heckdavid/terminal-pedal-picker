// Favorite guitar effect survey //
// Tuesday 22 Current problem. Dry and Wet log shows up at the same time. //
import inquirer from 'inquirer';

async function dryCollectFeedback() {
        console.log("What are your favorite dry effect for praise and worship?\n");

    const dryEffectQuestions = [

        {
            type: 'list',
            name: 'volume',
            message: 'What is your favorite volume pedal?',
            choices: ['Dunlop DVP4 Volume (X) Mini', 'Boss EV-30 Dual Expression Pedal','Mission Engineering EP-1 Expression Pedal'],
        },
        {
            type: 'list',
            name: 'tuner',
            message: 'What is your favorite tuner pedal?',
            choices: ['TC Electronic PolyTune 3 Noir','Peterson StroboStomp HD', 'Walrus Audio Canvas Tuner','Boss TU-3W Waza Craft'],
        },
        {
            type: 'list',
            name: 'compression',
            message: 'What is your favorite compressor pedal?',
            choices: ['Diamond Pedals Comp/EQ', 'Origin Effects Cali76 FET Compressor', 'Wampler EGO 76 Compressor','Jackson Audio Bloom Optical Compressor/EQ/Boost'],
        },
        {
            type: 'list',
            name: 'preamp',
            message: 'What is your favorite preamp pedal?',
            choices: ['Benson Amps Germanium Boost','Paul Cochrane Timmy', 'Jackson Audio Twin Twelve 1484 Pedal'],
        },
        {
            type: 'list',
            name: 'singleOverdrive',
            message: 'What is your favorite single overdrive pedal?',
            choices: ['Browne Amplification Carbon V1/V2','Greer Amps Lightspeed'],
        },
        {
            type: 'list',
            name: 'dualOverdrive',
            message: 'What is your favorite dual overdrive pedal?',
            choices: ['Browne Amplification Carbon X Dual Overdrive','Browne Amplification Protein','Drive-Thru JemmyJems Signature Overdrive','Browne Amplification Protein'],
        },
        {
            type: 'list',
            name: 'distortion',
            message: 'What is your favorite distortion pedal?',
            choices: ['Electronic Audio Experiments Longsword', 'Revv G3'],
        },
        {
            type: 'list',
            name: 'fuzz',
            message: 'What is your favorite fuzz pedal?',
            choices: ['Cornerstone Nero'],
        },
        {
            type: 'list',
            name: 'octaveFuzz',
            message: 'What is your favorite octave fuzz pedal?',
            choices: ['MXR Poly Blue Octave','Walrus Audio Kangra Filter Fuzz'],
        },
    ];

    const dryAnswers = await inquirer.prompt(dryEffectQuestions);

    // Dry effect //
    console.log("\nChoose your favorite dry effect in each category!");
    console.log(`Your favorite volume pedal: ${dryAnswers.volume}`);
    console.log(`Your favorite tuner pedal: ${dryAnswers.tuner}`);
    console.log(`Your favorite compressor pedal: ${dryAnswers.compressor}`);
    console.log(`Your favorite single overdrive pedal: ${dryAnswers.singleOverdrive}`);
    console.log(`Your favorite dual overdrive pedal: ${dryAnswers.dualOverdrive}`);
    console.log(`Your favorite distortion pedal: ${dryAnswers.distortion}`);
    console.log(`Your favorite fuzz pedal: ${dryAnswers.fuzz}`);
    console.log(`Your favorite octave fuzz pedal: ${dryAnswers.octaveFuzz}`);
  }

    // Wet effects //
    async function wetCollectFeedback() {
    console.log("What are your favorite wet effect for praise and worship?\n");

    const wetEffectQuestions = [

        {
            type: 'list',
            name: 'delay',
            message: 'What is your favorite delay pedal?',
            choices: ['Strymon Timeline'],
        }
    ]
  const wetAnswers = await inquirer.prompt(wetEffectQuestions);
        console.log(`Your favorite delay pedal: ${wetAnswers.delay}`);
    }


// Start the feedback collection
dryCollectFeedback();
wetCollectFeedback();

// Trying out promises 10-28-24 //
/* const dryCollectFeedbackPromise = new Promise((resolve, reject) => {
    let dryEffectQuestions = true;

    if(dryEffectQuestions) {
        resolve('Selected');
    } else {
        reject('Not selected');
    }
});
dryCollectFeedbackPromise.then((message) => {
    console.log(message);
    }).catch((message) => {
        console.log(message);
    });
*/
