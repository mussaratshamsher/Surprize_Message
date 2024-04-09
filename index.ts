#! /usr/bin/env node

// Eid Mubarak program: 'Happy Eid-ul-Fitar
import chalkAnimation from 'chalk-animation'
import chalk from 'chalk'
import inquirer from 'inquirer'

let myPin = 123;
//welcome Message

console.log(chalk.bold.bgHex("WELCOME IN Surprize Message APP."))

let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type: "number",
        message: (chalk.bold.yellow.underline("\n Please Enter your pin code:"))
    }
])
if (pinAnswer.pin === myPin){
    console.log(chalk.bold.magenta.underline("Pin code is Correct! Thank You to login."));
let operationAns = await inquirer.prompt([{
    name: "message",
    type: "string",
    message: (chalk.bold.bgRed.underline("To see Surprize Message please press ENTER!"))

}])
const rainbow = chalkAnimation.rainbow
    (`Happy Eid-ul-Fitar to All Muslims!
    May this Eid will be more Blessed as compared to previous ones. 
    May this Eid bring Happiness, Prosperous , Peace, Health & Faith for all of us & our families.
    Allah accept all our Prayers & little deeds of virtues & forgive our Sins.
         \n Have a great Day to all of you.
         
            Programmer: Mussarat Shamsher
            E-mail : musaratskhan@gmail.com
            Roll no: 302129
            center : Governor House Karachi
            Day/Time: Thursday-2:00PM- 05PM`); rainbow.start();
    setTimeout(( ) => {rainbow.stop();
        console.log('Animation stopped');
    }, 9000);
}else{
    console.log(chalk.bold.red("Pin code is Invalid! please try again"))
}

