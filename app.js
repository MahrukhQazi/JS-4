// arry
//Q-1
var studentNames = [];
alert("studentNames");

//Q-2
var studentNames = new Array();
alert("studentNames");

//Q-3
var stringArray = ["Father", "Mother", "Children"];
alert(stringArray);

//Q-4
var numberArray = [1, 2 , 3 , 4];
alert(numberArray);

//Q-5
var booleanArray = [true, false, true, false];
alert(booleanArray);

//Q-6
var mixedArray = ["Father", 1, true, "Mother", 2, false];
alert(mixedArray);

//Q-7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phill", "PhD"];

document.write("<h1>Qualifications:</h1>");

for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}


//Q-8
var studentNames = ["Michael", "John" , "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;
for (var i = 0; i < studentNames.length; i++)
{
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>")
}

//Q-9
// Initialize array with some colors
var colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<h3>Initial Colors:</h3>" + colors.join(", ") + "<br><br>");

// a. Add color to the beginning
var colorAtBeginning = prompt("Which color do you want to add to the beginning?");
colors.unshift(colorAtBeginning);
document.write("<h3>After adding color at beginning:</h3>" + colors.join(", ") + "<br><br>");

// b. Add color to the end
var colorAtEnd = prompt("Which color do you want to add to the end?");
colors.push(colorAtEnd);
document.write("<h3>After adding color at end:</h3>" + colors.join(", ") + "<br><br>");

// c. Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.write("<h3>After adding two colors at beginning:</h3>" + colors.join(", ") + "<br><br>");

// d. Delete the first color
colors.shift();
document.write("<h3>After deleting first color:</h3>" + colors.join(", ") + "<br><br>");

// e. Delete the last color
colors.pop();
document.write("<h3>After deleting last color:</h3>" + colors.join(", ") + "<br><br>");

// f. Add color at user-defined index
var addIndex = +prompt("At which index do you want to add a color?");
var addColor = prompt("Which color do you want to add?");
colors.splice(addIndex, 0, addColor);
document.write("<h3>After adding color at index " + addIndex + ":</h3>" + colors.join(", ") + "<br><br>");

// g. Delete color(s) at user-defined index
var deleteIndex = +prompt("At which index do you want to delete color(s)?");
var deleteCount = +prompt("How many color(s) do you want to delete?");
colors.splice(deleteIndex, deleteCount);
document.write("<h3>After deleting " + deleteCount + " color(s) from index " + deleteIndex + ":</h3>" + colors.join(", ") + "<br><br>");


//Q-10
var studentScores = [320, 230, 480, 120];
document.write("<h2>Scores of Students:</h2>" + studentScores.join(", ") + "<br><br>");

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b; // numeric sort
});

// Display the sorted scores
document.write("<h2>Ordered scores of students:</h2>" + studentScores.join(", "));

//Q-11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h2>Cities List:</h2>" + cities.join(", ") + "<br><br>");
var selectedCities = cities.slice(2, 4);
document.write("<h2>Selected Cities List:</h2>" + selectedCities.join(", "));

//Q-12
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");

document.write("<h3>Array:</h3>" + "<br>" + singleString + "<br>");
document.write("<h3>String:</h3>" + "<br>" + singleString + "<br>");

//Q-13
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");


document.write("<h3>Devices:</h3>");
document.write(devices + "<br><br>");

document.write("<h3>Out:</h3>");
document.write(devices.shift() + "<br>"); 
document.write(devices.shift() + "<br>"); 
document.write(devices.shift() + "<br>"); 
document.write(devices.shift() + "<br>"); 

//Q-14
var stack = [];

stack.push("Monitor");
stack.push("Printer");
stack.push("Mouse");
stack.push("Keyboard");

document.write("<h3>Devices:</h3>");
document.write(stack + "<br><br>");

document.write("<h3>Out:</h3>");
document.write(stack.pop() + "<br>");
document.write(stack.pop() + "<br>");
document.write(stack.pop() + "<br>"); 

//Q-15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Select Phone Manufacturer:</h3>");
document.write("<select>");

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");
