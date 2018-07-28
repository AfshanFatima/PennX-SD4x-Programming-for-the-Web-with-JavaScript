
# CREATING DATA DRIVEN WEB CONTENT WITH  D3.js



Problem 1


In the code below, assume that button is a variable that represents a button in the HTML page’s DOM. Using ES6, how can I rewrite the code below? 


button.addEventListener('click', function() {
alert('clicked!');
}

 CORRECT ANSWER
 
 button.addEventListener'click', () => {
 alert('clicked!');
 }

EXPLANATION: This code uses the “arrow notation” for defining an anonymous function. Although it takes no parameters, we still need the empty parameter list within the parentheses before using the arrow symbol.

Problem 2

Two key data structures introduced by ES6 are:


Set and Map -  correct

Set and List

Array and Set

LinkedList and HashMap

 

EXPLANATION:There is no List data structure in JavaScript, and Arrays already exist, of course.


Problem 1

I have an SVG element that has width and height both equal to 100. Which of the following would I use in order to get a circle with radius 20 to appear in the center of the SVG element?


circle cx='0' cy='0' r='20'/


circle center='50, 50' r='20'/


circle cx='50' cy='50' r='20'/ -  correct


circle x='50' y='50' r='20'/


EXPLANATION: The origin point (0,0) is the top left corner, so the center of an SVG element that is 100x100 would be (50,50), and we use the “cx” and “cy” attributes to specify the circle’s center.


Problem 2

Which of the following uses D3.js to select an HTML page’s “svg” elements?


$('svg');


d3.select('svg'); -  correct


d3('svg');


$d3.select('svg');


EXPLANATION: The d3 variable is accessible in the page when you include the D3.js library, and you can use its “select” function to access HTML elements. Option #1 is jQuery, of course!


Problem 1

The purpose of the “transform” attribute of an SVG element and the “translate” function is to be able to:


convert the element from one shape to another.

alter the element’s color.

modify the element’s size. 

change the origin point of the element’s coordinate system. - correct


EXPLANATION:The “transform” attribute in general lets us modify the SVG element in some way, and the “translate” function change its location, thus affecting the origin of the coordinate system.


Problem 2

Which of the following would draw circles for which the radius of each circle equals the value in an array called 
 values?
 
 Correct Answer-
 
 
 var svg = d3.select('svg');
 
 .data(values)
 
 .enter()
 
 .append('circle')
 
 .attr('cx', (d, i) => { return d * 10; } )
 
 .attr('cy', (d, i) => { return d * 10;} )
 
 .attr('r', (d, i) => {return d; } );



EXPLANATION:We need to use the D3 “data” function to bind the array with the SVG container that we’ve created, and then “enter” to apply the following function to each element. When setting the “r” attribute of each circle, we use the parameter “d” which is the value that is stored in the array.

Problem 1

I am using D3 with an array of data defined as follows: 

var data =

[{ origin: 'PHL', dest: 'SEA', price: 500 },


 { origin: 'LHR', dest: 'ICN', price:1800 },
 
 
 { origin: 'YYZ', dest: 'PEK', price:2300 }];
 


If I were drawing circles, the following would set the radius to be equal to the “price” property of each object?

.attr('r', (d, i) => { return d.data.price; } );  -CORRECT ANSWER


EXPLANATION: In this case, the parameter “d” refers to the entire object in the array of data, so we can just get the “price” property using “d.price”.

Problem 2

When using D3 to make a request to a Web API, the function we use is:


d3.getJSON

d3.get

d3.json - correct

$.getJSON

EXPLANATION: This function sends an HTTP request to the specified URL and expects a JSON object in return; it then invokes the specified callback function and passes the JSON object to it as an argument.
