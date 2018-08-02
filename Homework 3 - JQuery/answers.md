# USING JAVASCRIPT IN WEB PAGES


**Problem 1**

Given the HTML <span id='mySpan'>hello</span>, which of the following JavaScript code will use the DOM to access this HTML element?


document.get('#mySpan');

document.getElement('#mySpan');

document.getElementById('mySpan'); - correct

document.getElementById('span');

Answer
Correct: 
We can use the DOM to get an HTML element using the getElementById function and the id of the element.

**Problem 2**

The localStorage global variable can be used by JavaScript in an HTML page to:


Store data in the browser across multiple page requests. -  correct

Access data on the local computer’s file system.

Create global JavaScript variables for use in the page.

Share data between multiple users of a Web page.


Answer
Correct: 
The localStorage variable is an object that maintains the same value for different pages. It cannot, however, be used to access any data on the local computer.

**Problem 1**

In JavaScript, a callback function is:


A function that is invoked as the result of some type of action or event.-  correct

A function that has no return value.

A function that can be used to call other functions.

A function that is used as part of another function.


Answer
Correct: 
A callback function is one that you as the programmer implement but do not invoke; rather, the underlying system (in this case, the browser) invokes it after some event or action.

**Problem 2**

What is the result of the following JavaScript code?

When the user places the mouse over any element in the “one” class, any element that is either in the “one” or “two” class becomes red.

When the user places the mouse over any element in the “one” class, any element that is in both the “one” and “two” classes becomes red.
 
When the user places the mouse over any element in the “two” class, all elements in the “one” class become red.

When the user places the mouse over any element in the “one” class, all elements of the “two” class become red.-  correct


Answer Coreect:
The outer loop applies the event listener to each element in the “one” class. The inner loop is what is executed when that event occurs, and it changes all elements of the “two” class to red.



**Problem 1**

The command document.getElementsByClassName('something')is equivalent to which of the following jQuery commands?


$('something')

$('.something') - correct

$('#something')

$('class:something')


Answer
Correct: 
To access a class in jQuery, use the “dot” notation as you would in CSS.

**Problem 2**

I have a variable mySpan that refers to an HTML element. Which of the following jQuery commands is equivalent to mySpan.innerHTML = 'hello';?


mySpan = 'hello'; 

mySpan.innerHTML('hello');

mySpan.html() = 'hello'; 

mySpan.html('hello');  - correct


Answer Correct:
Using jQuery, the html function allows us to modify an HTML element’s contents.


**Problem 1**

The purpose of the jQuery “on” function is to:


Specify the callback function to be invoked when the user places the mouse over the element.

Specify the callback function to be invoked when the element is first rendered in the page.

Specify a sequence of callback functions to be invoked when the user interacts with the element.

Specify an object that defines callback functions for different actions/events for a given element or elements.-  correct

Answer
Correct: 
The argument to the “on” function is an object in which the properties are the names of the different events, and their corresponding values are the corresponding callback functions.



**Problem 2**

Which of the following jQuery commands selects all <div> elements that are in the “fun” class?
    
    
$('div.fun') - correct

$('fun.div')

$('div').find('.fun')

$('.fun').find('div')

Answer
Correct: 
This selector combines the div element type with the “fun” class using the '.fun' notation. Option #2 would attempt to select fun elements in the “div” class. Option #3 would select elements in the “fun” class that are children of “div” elements, but not the “div” elements themselves. Likewise for Option #4.


**Problem 1**

What HTML elements are selected with the jQuery command $("select[name='id']")?


All elements with the name “id” that are children of <select> elements.

All <select> elements that have the name “id”.-  correct

All elements with the name “id”.

All elements in the class “id”.
    
    
Answer
Correct: 
This notation allows us to select HTML elements but also specify their attributes; here, we’re selecting <select> elements but also specifying that we want the ones with the “name” attribute set to the value “id”.

**Problem 2**

In jQuery, the selector $(this) refers to:


A specific element that was selected as part of a group of elements. - correct

All elements that were selected as part of a group of elements.

The current HTML page.

All elements in the HTML page.

Answer
Correct: 
Depending on the selector, we may choose many elements in a page, and any specified callback function will be applied to each element that is selected. In order to access each individual element in the callback function, we use $(this) within the function.
