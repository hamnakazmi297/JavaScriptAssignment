// Chapter No: 01 & Task No: 01
// alert("Welcome to my website...!");

// Chapter No: 01 & Task No: 02
// alert("Error! Please enter a valid password.");

// Chapter No: 01 & Task No: 03
// alert("Welcome to JS Land...\nHappy Coding!");

// Chapter No: 01 & Task No: 04
// alert("Welcome to JS Land...");
// alert("Happy Coding! \n Prevent this page from creating additional dialogs.");

// Chapter No: 01 & Task No: 05
// Go to your web browser's console and write this:
// alert("Hello... I can run JS through my web browser's console");

// Chapter No: 01 & Task No: 06
// alert("Hello World...! \nI am using JS alert...!");



// Chapter No: 02 & Task No: 01
// var username;

// Chapter No: 02 & Task No: 02
// var myName = "Hamna Kazmi";

// Chapter No: 02 & Task No: 03
// var message;
// message = "Hello World";
// alert(message);

// Chapter No: 02 & Task No: 04
// var studentName = prompt("Enter Your Name");
// var studentage = prompt("Enter Age");
// var certified = prompt("If you have got the certificate then write 'Certified' below");
// alert(studentName);
// alert(studentage);
// alert(certified + " Mobile Application Development");

// Chapter No: 02 & Task No: 05
// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(pizza);

// Chapter No: 02 & Task No: 06
// var email = "hamnakazmi297@gmail.com";
// alert("My email address is " + email);

// Chapter No: 02 & Task No: 07
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from a Book " + book);

// Chapter No: 02 & Task No: 08
// document.write("Yah! I can write HTML content through JavaScript.");

// Chapter No: 02 & Task No: 09
// var char = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(char);



// Chapter No: 03 & Task No: 01
// var age = 22;
// alert("I am " + age + " years old.");

// Chapter No: 03 & Task No: 02
// var n = 14;
// alert("You have visited this site " + n + " times.");

// Chapter No: 03 & Task No: 03
// var birthYear = 1998;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + typeof (birthYear));

// Chapter No: 03 & Task No: 04
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>" + quantity + " " + productTitle + "</b>" + "(s) on XYZ Clothing store.");



// Chapter No: 04 & Task No: 01
// var a = 10, b = 20, c = 30;

// Chapter No: 04 & Task No: 02
// var legalVariable, _legalVariable, legalVariable786, $legalVariable, legal_5thVariable;
// var 7861illegalVariable, illegal Variable, #illegalVariable, illegal - Variable, var ;

// Chapter No: 04 & Task No: 03
// document.write("<h1> Rules for naming JS variables </h1>");
// document.write("<br> Variable names can only contain , numbers, $ and _ . For example $my_1stVariable");
// document.write("<br> Variables must begin with a letter, $ or _ . For example $name, _name or name");
// document.write("<br> Variable names are case sensitive.");
// document.write("<br> Variable names should not be JS keywords.");



// Chapter No: 05 & Task No: 01
// var num1 = prompt("Enter 1st Value");
// var num2 = prompt("Enter 2nd Value");
// var sum = (+num1) + (+num2);
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Chapter No: 05 & Task No: 02
// var num1 = prompt("Enter 1st Value");
// var num2 = prompt("Enter 2nd Value");
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub);
// document.write("<br> Multiplication of " + num1 + " and " + num2 + " is " + mul);
// document.write("<br> Division of " + num1 + " and " + num2 + " is " + div);
// document.write("<br> Modulus of " + num1 + " and " + num2 + " is " + mod);

// Chapter No: 05 & Task No: 03
// var a;
// document.write("Value after variable declaration is: " + a);
// a = 5;
// document.write("<br> Initial value: " + a);
// a++;
// document.write("<br> Value after increment is: " + a);
// a = a + 7;
// document.write("<br> Value after addition is: " + a);
// a--;
// document.write("<br> Value after decrement is: " + a);
// a = a % 3;
// document.write("<br> The remainder is: " + a);

// Chapter No: 05 & Task No: 04
// var oneTicket = 600;
// var fiveTickets = 5;
// document.write("Total cost to buy " + fiveTickets + " tickets to a movie is " + oneTicket * fiveTickets + "PKR.");

// Chapter No: 05 & Task No: 05
// var num = prompt("Enter number");
// document.write("Table of " + num);
// for (var i = 1; i <= 10; i++) {
//     document.write("<br>" + (+num) + "x" + i + "=" + (+num) * i);
// }

// Chapter No: 05 & Task No: 06
// var celsius = 25;
// var cToF = celsius * 9 / 5 + 32;
// document.write(celsius + "°C is " + cToF + "°F.");
// var fahrenheit = 70;
// var fToC = (fahrenheit - 32) * 5 / 9;
// document.write("<br>" + fahrenheit + "°F is " + fToC + "°C.");

// Chapter No: 05 & Task No: 07
// var item1 = +prompt("Price of item 1");
// var item1_Quantity = +prompt("Quantity of item 1");
// var item2 = +prompt("Price of item 2");
// var item2_Quantity = +prompt("Quantity of item 2");
// var shippingCharges = 100;
// var totalCost = (item1 * item1_Quantity) + (item2 * item2_Quantity) + shippingCharges;
// document.write("<h1> Shopping Cart </h1> <br>");
// document.write("<br> Price of item 1 is " + item1);
// document.write("<br> Quantity of item 1 is " + item1_Quantity);
// document.write("<br> Price of item 2 is " + item2);
// document.write("<br> Quantity of item 2 is " + item2_Quantity);
// document.write("<br> Shipping Charges" + shippingCharges + "<br> ");
// document.write("<br> Total cost of your order is " + totalCost);

// Chapter No: 05 & Task No: 08
// var totalMarks = +prompt("Enter total marks ");
// var obtainedMarks = +prompt("Enter obtained marks ");
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write("<h1> Mark Sheet </h1> <br>");
// document.write("<br> Total marks: " + totalMarks);
// document.write("<br> Marks obtained: " + obtainedMarks);
// document.write("<br> Percentage: " + percentage + "%");

// Chapter No: 05 & Task No: 09
// var total_pkr = (10 * 104.80) + (25 * 28);
// document.write("<h1> Currency in PKR </h1> <br>");
// document.write("<br> Total Currency in PKR: " + total_pkr);

// Chapter No: 05 & Task No: 10
// var cal = 10;
// cal = ((cal + 5) * 10) / 2;
// document.write("Output is: " + cal);

// Chapter No: 05 & Task No: 11
// var currentYear = +prompt("Enter Current Year");
// var birthYear = +prompt("Enter Your Birth Year");
// var age = currentYear - birthYear;
// document.write("<h1> Age Calculator </h1> <br>");
// document.write("Your Current Year: " + currentYear);
// document.write("<br> Your Birth Year is: " + birthYear);
// document.write("<br> Your Age is: " + age);

// Chapter No: 05 & Task No: 12
// var pi = 3.142;
// var radius = +prompt("Enter Radius");
// var circum = 2 * pi * radius;
// var area = pi * radius * radius;
// document.write("<h1> The Geometrizer </h1> <br>");
// document.write("Your Radius of a circle: " + radius);
// document.write("<br> The circumference is: " + circum);
// document.write("<br> The Area is: " + area);

// Chapter No: 05 & Task No: 13
// var snack = prompt("Enter your favorite snack");
// var currentAge = +prompt("Enter your age");
// var maxAge = +prompt("Enter your estimated maximum age");
// var ammountPerDay = +prompt("Enter amount of snack per day");
// var total = (maxAge - currentAge) * ammountPerDay;
// document.write("<h1> The Lifetime Supply Calculator </h1> <br>");
// document.write("Favorite Snack: " + snack);
// document.write("<br> Current Age: " + currentAge);
// document.write("<br> Estimated Maximum Age: " + maxAge);
// document.write("<br> Amount of snacks per day: " + ammountPerDay);
// document.write("<br> You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge);



// Chapter No: 06 - 09 & Task No: 01
// a = 10;
// document.write("Result:");
// document.write("<br> The value of a is:" + a);

// document.write("<br> ...........................................<br>");

// document.write("<br> The value of ++a is:" + (++a));
// document.write("<br> Now the value of a is:" + a);

// document.write("<br><br> The value of a++ is:" + (a++));
// document.write("<br> Now the value of a is:" + a);

// document.write("<br><br> The value of --a is:" + (--a));
// document.write("<br> Now the value of a is:" + a);

// document.write("<br><br> The value of a-- is:" + (a--));
// document.write("<br> Now the value of a is:" + a);

// Chapter No: 06 - 09 & Task No: 02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// //            1  -  0  +  1  +  1 = 3
// document.write("a is: " + a);
// document.write("<br> b is: " + b);
// document.write("<br> Result is: " + result);

// Chapter No: 06 - 09 & Task No: 03
// var name = prompt("Enter your name");
// alert("Welcome " + name);

// Chapter No: 06 - 09 & Task No: 05
// var num = +prompt("Enter number");
// if (num !== 0) {
//     for (var i = 1; i <= 10; i++) {
//         document.write("<br>" + (+num) + "x" + i + "=" + num * i);
//     }
// }
// else {
//     num = 5;
//     for (var i = 1; i <= 10; i++) {
//         document.write("<br>" + num + "x" + i + "=" + num * i);
//     }
// }

// Chapter No: 06 - 09 & Task No: 06
// var sub1 = prompt("Enter Subject 1");
// var sub2 = prompt("Enter Subject 2");
// var sub3 = prompt("Enter Subject 3");
// var MarksSub1 = +prompt("Enter Marks of " + sub1);
// var MarksSub2 = +prompt("Enter Marks of " + sub2);
// var MarksSub3 = +prompt("Enter Marks of " + sub3);
// total = 100;
// totalmarks = 100 * 3;
// totalObtMarks = MarksSub1 + MarksSub2 + MarksSub3;
// document.write("<table> <tr> <th> Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th> Percentage </th> </tr>");
// document.write("<tr><td>" + sub1 + "</td><td>" + total + "</td><td>" + MarksSub1 + "</td><td>" + (MarksSub1 / total) * 100 + "%</td></tr>");
// document.write("<tr><td>" + sub2 + "</td><td>" + total + "</td><td>" + MarksSub2 + "</td><td>" + (MarksSub2 / total) * 100 + "%</td></tr>");
// document.write("<tr><td>" + sub3 + "</td><td>" + total + "</td><td>" + MarksSub3 + "</td><td>" + (MarksSub3 / total) * 100 + "%</td></tr>");
// document.write("<tr><td> </td><td><b>" + totalmarks + "</b></td><td><b>" + totalObtMarks + "</b></td><td><b>" + (totalObtMarks / totalmarks) * 100 + "%</b></td></tr></table>");



// Chapter No: 09 - 11 & Task No: 01
// var city = prompt("Enter City");
// city = city.toLowerCase();
// if (city == "karachi") {
//     alert("Welcome to city of lights");
// }

// Chapter No: 09 - 11 & Task No: 02
// var gender = prompt("Enter Your Gender");
// gender = gender.toLowerCase();
// if (gender == "male") {
//     alert("Good Morning Sir");
// }
// else if (gender == "female") {
//     alert("Good Morning Ma'am");
// }
// else { }

// Chapter No: 09 - 11 & Task No: 03
// var color = prompt("Enter color of traffic signal");
// color = color.toLowerCase();
// if (color == "red") {
//     alert("Must Stop");
// }
// else if (color == "yellow") {
//     alert("Ready to move");
// }
// else if (color == "green") {
//     alert("Move now");
// }
// else {
//     alert("Please enter right color");
// }

// Chapter No: 09 - 11 & Task No: 04
// var reFuel = +prompt("Enter remaining fuel in car(in litres)");
// if (reFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// Chapter No: 09 - 11 & Task No: 05
// a.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// c.
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// e.
//     if(true){
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// f.
//     if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Chapter No: 09 - 11 & Task No: 06
// var eng = +prompt("Enter Marks of English");
// var urdu = +prompt("Enter Marks of Urdu");
// var maths = +prompt("Enter Marks of Maths");
// var totalMarks = +prompt("Enter Total Marks ");
// obtMarks = eng + urdu + maths;
// percentage = (obtMarks / totalMarks) * 100;

// document.write("<h1> Mark Sheet </h1> <br>");
// document.write("Total Marks: " + totalMarks);
// document.write("<br> Marks obtained: " + obtMarks);
// document.write("<br> Percentage: " + percentage + "%");

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
//     document.write("<br> Grade: " + grade);
//     document.write("<br> Remarks: " + remarks);
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
//     document.write("<br> Grade: " + grade);
//     document.write("<br> Remarks: " + remarks);
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
//     document.write("<br> Grade: " + grade);
//     document.write("<br> Remarks: " + remarks);
// }
// else if (percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
//     document.write("<br> Grade: " + grade);
//     document.write("<br> Remarks: " + remarks);
// }

// Chapter No: 09 - 11 & Task No: 07
// var a = 2;
// var b = +prompt("Enter any number from(1-10)")
// if (a == b) {
//     alert("Bingo! Correct answer");
// }
// if (a == ++b) {
//     alert("Close enough to the correct answer");
// }

// Chapter No: 09 - 11 & Task No: 08
// var a = +prompt("Enter a number")
// if (a % 3 == 0) {
//     alert(a + " is divisible by 3.");
// }

// Chapter No: 09 - 11 & Task No: 09
// var a = +prompt("Enter a number")
// if (a % 2 == 0) {
//     alert(a + " is an even number.");
// }
// else {
//     alert(a + " is an odd number.");
// }

// Chapter No: 09 - 11 & Task No: 10
// var temp = +prompt("Enter Temperature");
// if (temp > 40) {
//     alert("It is too hot outside.");
// }
// else if (temp > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (temp > 20) {
//     alert("Today’s Weather is cool.");
// }
// else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }

// Chapter No: 09 - 11 & Task No: 11
// var val1 = +prompt("Enter 1st value");
// var op = prompt("Enter operator");
// var val2 = +prompt("Enter 2nd value");

// if (op == "+") {
//     var cal = val1 + val2;
//     document.write(val1 + op + val2 + " = " + cal);
// }
// else if (op == "-") {
//     var cal = val1 - val2;
//     document.write(val1 + op + val2 + " = " + cal);
// }
// else if (op == "*") {
//     var cal = val1 * val2;
//     document.write(val1 + op + val2 + " = " + cal);
// }
// else if (op == "/") {
//     var cal = val1 / val2;
//     document.write(val1 + op + val2 + " = " + cal);
// }
// else if (op == "%") {
//     var cal = val1 % val2;
//     document.write(val1 + op + val2 + " = " + cal);
// }



// Chapter No: 12 - 13 & Task No: 01
// var val = prompt("Enter a letter or a number");

// if (val >= 0 && val < 10) {
//     alert("It is a number.");
// }
// else {
//     check = val.charCodeAt(0);
//     if (check >= 65 && check <= 90) {
//         alert("It is an uppercase letter.");
//     }
//     else if (check >= 97 && check <= 122) {
//         alert("It is a lowercase letter.");
//     }
// }

// Chapter No: 12 - 13 & Task No: 02
// var val1 = +prompt("Enter 1st value");
// var val2 = +prompt("Enter 2nd value");

// if (val1 > val2) {
//     document.write("The larger value is: " + val1);
// }
// else if (val1 < val2) {
//     document.write("The larger value is: " + val2);
// }
// else if (val1 == val2) {
//     document.write("Both values are equal.");
// }

// Chapter No: 12 - 13 & Task No: 03
// var val1 = +prompt("Enter a number");

// if (val1 > 0) {
//     document.write(val1 + " is a positive number.");
// }
// else if (val1 < 0) {
//     document.write(val1 + " is a negative number.");
// }
// else {
//     document.write("The value is zero.");
// }

// Chapter No: 12 - 13 & Task No: 04
// var char = prompt("Enter a letter");
// char = char.toLowerCase();
// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// Chapter No: 12 - 13 & Task No: 05
// var savedPass = "12345";
// var askPass = prompt("Enter Your Password");
// if (askPass == 0) {
//     alert("Please enter your password");
// }
// else {
//     if (savedPass == askPass) {
//         alert("Correct! The password you entered matches the original password");
//     }
//     else {
//         alert("Incorrect password");
//     }
// }

// Chapter No: 12 - 13 & Task No: 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }

// Chapter No: 12 - 13 & Task No: 07
// var time = +prompt("Enter time in 24 hours clock format like: 1900 = 7pm");

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// }



// Chapter No: 14 - 16 & Task No: 01
// var stuNames = [];

// Chapter No: 14 - 16 & Task No: 02
// var stuNames = new Array();

// Chapter No: 14 - 16 & Task No: 03
// var str = ["Hamna", "Kazmi"];

// Chapter No: 14 - 16 & Task No: 04
// var num = [1, 2, 3, 4, 5];

// Chapter No: 14 - 16 & Task No: 05
// var bool = [true, false, true];

// Chapter No: 14 - 16 & Task No: 06
// var arr = [true, false, 1, 5.5, "hello"];

// Chapter No: 14 - 16 & Task No: 07
// var eduPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("Qualifications:<br><br>");
// for (var i = 0; i < eduPak.length; i++) {
//     document.write((i + 1) + ") " + eduPak[i] + "<br>")
// }

// Chapter No: 14 - 16 & Task No: 08
// var stuName = [], stuScore = [], stuPer = [], totalMarks = 500;
// stuName[0] = prompt("Enter Name of Student 1");
// stuName[1] = prompt("Enter Name of Student 2");
// stuName[2] = prompt("Enter Name of Student 3");
// stuScore[0] = +prompt("Enter Score of Student 1");
// stuScore[1] = +prompt("Enter Score of Student 2");
// stuScore[2] = +prompt("Enter Score of Student 3");
// stuPer[0] = (stuScore[0] / totalMarks) * 100;
// stuPer[1] = (stuScore[1] / totalMarks) * 100;
// stuPer[2] = (stuScore[2] / totalMarks) * 100;
// document.write("Score of " + stuName[0] + " is " + stuScore[0] + ".Percentage:" + stuPer[0] + "%<br>");
// document.write("Score of " + stuName[1] + " is " + stuScore[1] + ".Percentage:" + stuPer[1] + "%<br>");
// document.write("Score of " + stuName[2] + " is " + stuScore[2] + ".Percentage:" + stuPer[2] + "%");

// Chapter No: 14 - 16 & Task No: 09
// var colors = [];
// var color1 = prompt("what color you wants to add to the beginning");
// colors.unshift(color1);
// document.write(colors);
// var color1 = prompt("what color you wants to add to the end");
// colors.push(color1);
// document.write("<br>" + colors);
// colors.unshift("Pink", "Blue");
// document.write("<br>" + colors);
// colors.shift();
// document.write("<br>" + colors);
// var ind = +prompt("At which index you wants to add a color");
// var indColor = prompt("Color name");
// colors.splice(ind, 0, indColor);
// document.write("<br>" + colors);
// var indDel = +prompt("At which index you wants to delete a color");
// var indDelColor = +prompt("how many colors you wants to delete a color");
// colors.splice(indDel, indDelColor + 1);
// document.write("<br>" + colors);

// Chapter No: 14 - 16 & Task No: 10
// var arr = new Array(320, 230, 480, 120);
// document.write("Scores of Students: " + arr);
// var sortArr = arr.sort();
// document.write("<br> Ordered Scores of Students: " + sortArr);

// Chapter No: 14 - 16 & Task No: 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// document.write("Cities list: <br> " + cities);
// var selectedCities = cities.slice(2, 4);
// document.write("<br> Selected Cities list: <br> " + selectedCities);

// Chapter No: 14 - 16 & Task No: 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br> " + arr);
// var arrJoin = arr.join(" ");
// document.write("<br><br> String: <br> " + arrJoin);

// Chapter No: 14 - 16 & Task No: 13
// var arr = ["keyboard", "mouse", "printer", "moniter"];
// document.write("Devices: <br> " + arr);
// document.write("<br><br> Out: <br> ");
// document.write(arr.shift());
// document.write("<br> Out: <br> ");
// document.write(arr.shift());
// document.write("<br> Out: <br> ");
// document.write(arr.shift());
// document.write("<br> Out: <br> ");
// document.write(arr.shift());

// Chapter No: 14 - 16 & Task No: 14
// var arr = ["keyboard", "mouse", "printer", "moniter"];
// document.write("Devices: <br> " + arr);
// document.write("<br><br> Out: <br> ");
// document.write(arr.pop());
// document.write("<br> Out: <br> ");
// document.write(arr.pop());
// document.write("<br> Out: <br> ");
// document.write(arr.pop());
// document.write("<br> Out: <br> ");
// document.write(arr.pop());

// Chapter No: 14 - 16 & Task No: 15
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select><option>" + arr.shift() + "</option><option>" + arr.shift() + "</option><option>" + arr.shift() + "</option><option>" + arr.shift() + "</option><option>" + arr.shift() + "</option><option>" + arr.shift() + "</option></select>");



// Chapter No: 17 - 20 & Task No: 01
// var multiArr = [[], [], []];

// Chapter No: 17 - 20 & Task No: 02
// var multiArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 4; j++) {
//         document.write(multiArr[i][j] + " ");
//     }
//     document.write("<br>");
// }

// Chapter No: 17 - 20 & Task No: 03
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// Chapter No: 17 - 20 & Task No: 04
// var table = +prompt("Enter a number to show its multiplication table");
// var len = +prompt("Enter length of multiplication table");
// document.write("Multiplication Table of " + table + "<br>");
// document.write("Length " + len + "<br><br>");
// for (var i = 1; i <= len; i++) {
//     document.write(table + "x" + i + "=" + table * i + "<br>");
// }

// Chapter No: 17 - 20 & Task No: 05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// for (var j = 0; j < fruits.length; j++) {
//     document.write("<br>Element at index " + j + " is " + fruits[j]);
// }

// Chapter No: 17 - 20 & Task No: 06
// document.write("<h3> Counting: </h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",");
// }
// document.write("<h3> Reverse Counting: </h3>");
// for (var i = 10; i > 0; i--) {
//     document.write(i + ",");
// }
// document.write("<h3> Even: </h3>");
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ",");
// }
// document.write("<h3> Odd: </h3>");
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + ",");
// }
// document.write("<h3> Series: </h3>");
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i + "k, ");
// }

// Chapter No: 17 - 20 & Task No: 07
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// var ind = A.indexOf(order);

// if (ind >= 0 && ind < A.length) {
//     document.write(order + " is available at index " + ind + " in our bakery.");
// }
// else {
//     document.write("We are sorry. " + order + " is not available in our bakery.");
// }

// Chapter No: 17 - 20 & Task No: 08
// var A = [24, 53, 78, 91, 12];
// document.write("Array Items: " + A);
// var largest = 0;
// for (i = 0; i <= largest; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("<br>The Largest Number is: " + largest);

// Chapter No: 17 - 20 & Task No: 09
// var A = [24, 53, 78, 91, 12];
// document.write("Array Items: " + A);
// var smallest = A.sort();
// document.write("<br>The Smallest Number is: " + smallest[0]);

// Chapter No: 17 - 20 & Task No: 10
// for (var i = 5; i <= 100; i = i + 5) {
//     document.write(i + ", ");
// }