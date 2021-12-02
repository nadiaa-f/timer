//beep after a specified amount of time has passed.
 //returns all the command-line arguments that are passed in node*/ 
const numbers = process.argv.slice(2);
console.log(numbers);
for (let num of numbers) { //time for every #
  let delay = Number(num) //changing to a num
  setTimeout (() => {
    process.stdout.write('\x07');
  }, 1000 * delay );
}
