console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 0; i < 100; i++)
{
    if (i % 2 == 0) {
        continue;
    }
    else { cosole.log(i); }
}
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
for (let i = 0; i < 100; i++)
{
    let answer = ""
    if (i % 3 == 0) { answer += "FIZZ"; }
    if (i % 5 == 0) { answer += "BUZZ"; }
    if (answer == "") { continue; }
    else { cosole.log(answer); }
}

console.log("EXERCISE 2:\n==========\n");

let i = 0
do {
    if (i % 2 == 0) {
        i++;
        continue;
    }
    else { cosole.log(i); i++ }
} while (i < 100);
do {
    let answer = ""
    if (i % 3 == 0) { answer += "FIZZ"; }
    if (i % 5 == 0) { answer += "BUZZ"; }
    if (answer == "") { i++; continue; }
    else { cosole.log(answer); i++ }

} while (i < 100);
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i < n; i++)
{
    let broken=false
    if (i == n)
    {
        broken = true
        break;
    }
}
if (broken) {
    console.log("Found value!");
}
else { console.log("Did not find value") }
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
for (let i = start; i < end; i++) {
    let answer = ""
    if (i % fizzDivisor == 0) { answer += "FIZZ"; }
    if (i % buzzDivisor == 0) { answer += "BUZZ"; }
    if (answer == "") { continue; }
    else { cosole.log(answer); }
}
