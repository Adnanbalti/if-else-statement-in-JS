/*                  Question-01. 
Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).*/

let char = prompt("Enter a character.");
if (char >= "A" && char <= "Z") {
    document.write(`${char} is uppercase letter.` + "<br>" + "<br>");
}
else if (char >= "a" && char <= "z") {
    document.write(`${char} is lowercase letter.` + "<br>" + "<br>");
}
else if (char >= 1 && char <= 9) {
    document.write(`${char} is a number.`);
}
else {
    document.write("You entered invalid character." + "<br>" + "<br>");
}



/*                  Question-02. 
Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.*/

let num1 = prompt("Enter first number.");
let num2 = prompt("Enter second number.");
if (num1 == num2) {
    document.write("The given number is equal:" + "<br>" + `${num1} = ${num2}` + "<br>" + "<br>");
}
else if (num1 > num2) {
    document.write("First number is greater than Second number" + "<br>" + `${num1} > ${num2}` + "<br>" + "<br>")
}
else {
    document.write("Second number is greater than First number" + "<br>" + `${num2} > ${num1}` + "<br>" + "<br>")
}



/*                  Question-03. 
Write a program that takes input a number from user & 
state whether the number is positive, negative or zero.*/

let num3 = prompt("Enter a number.");
if (num3 == 0) {
    document.write("You entered 0");
}
else if (num3 > 0) {
    document.write("You entered positive number." + "<br>" + "<br>");
}
else if(num3 < 0) {
    document.write("You entered negative number." + "<br>" + "<br>")
}
else {
    document.write("You entered invalid character." + "<br>" + "<br>")    
}



/*                  Question-04. 
Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise*/

let alpha = prompt("Enter any alphabet.");
if (alpha == "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u") {
    document.write("true" + "<br>" + "<br>");
}
else if(alpha == "A" || alpha == "E" || alpha == "I" || alpha == "O" || alpha == "U") {
    document.write("true" + "<br>" + "<br>");
}
else {
    document.write("false" + "<br>" + "<br>");
}



/*                  Question-05. 
Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then 
give message “ Please enter your password”
ii. Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise.*/

let password = "password123";
let userpassword = prompt("Enter password");
userpassword = "";
if (password == userpassword) {
    document.write("Correct! The password you entered matches the original password" + "<br>" + "<br>");
}
else if (password !== userpassword) {
    document.write("Incorrect password" + "<br>" + "<br>");
}
else if(password){
    document.write("Please enter your password." + "<br>" + "<br>");
}



/*                  Question-06. 
This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/

var greeting;
var hour = Number(prompt("Enter time in 24 hours clock format."));
if (hour < 18) {
    document.write("Good day" + "<br>" + "<br>");
}
else {
    document.write("Good evening" + "<br>" + "<br>");
}



/*                  Question-07. 
Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements*/
 

let time = prompt("Enter time in 24 hours clock format");
if (time == 100) {
    document.write("Its 1am O'clock" + "<br>");
}
else if (time == 200) {
    document.write("Its 2am O'clock." + "<br>");
}
else if (time == 300) {
    document.write("Its 3am O'clock." + "<br>");
}
else if (time == 400) {
    document.write("Its 4am O'clock." + "<br>");
}
else if (time == 500) {
    document.write("Its 5am O'clock." + "<br>");
}
else if (time == 600) {
    document.write("Its 6am O'clock." + "<br>");
}
else if (time == 700) {
    document.write("Its 7am O'clock." + "<br>");
}
else if (time == 800) {
    document.write("Its 8am O'clock." + "<br>");
}
else if (time == 900) {
    document.write("Its 9am O'clock." + "<br>");
}
else if (time == 1000) {
    document.write("Its 10am O'clock." + "<br>");
}
else if (time == 1100) {
    document.write("Its 11am O'clock." + "<br>");
}
else if (time == 1200) {
    document.write("Its 12pm O'clock." + "<br>");
}
else if (time == 1400) {
    document.write("Its 2pm O'clock." + "<br>");
}
else if (time == 1500) {
    document.write("Its 3pm O'clock." + "<br>");
}
else if (time == 1600) {
    document.write("Its 4pm O'clock." + "<br>");
}
else if (time == 1700) {
    document.write("Its 5pm O'clock." + "<br>");
}
else if (time == 1800) {
    document.write("Its 6pm O'clock." + "<br>");
}
else if (time == 1900) {
    document.write("Its 7pm O'clock." + "<br>");
}
else if (time == 2000) {
    document.write("Its 8pm O'clock." + "<br>");
}
else if (time == 2100) {
    document.write("Its 9pm O'clock." + "<br>");
}
else if (time == 2200) {
    document.write("Its 10pm O'clock." + "<br>");
}
else if (time == 2300) {
    document.write("Its 11pm O'clock." + "<br>");
}
else if (time == 2400) {
    document.write("Its 12pm O'clock." + "<br>");
}
else {
    document.write("OOP!");
}

