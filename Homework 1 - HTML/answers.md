Week-1


WEB PROGRAMMING BASICS



BASICS OF THE WEB WORLD



Problem 1 

We can consider the Internet to be a graph in which:


Nodes are people and edges are computers.


Nodes are devices and edges are physical or virtual connections- correct


Nodes are pieces of content and edges are links between them.


Nodes are devices and edges are pieces of data.


Answer
Correct! 
The Internet is the physical network of machines that are connected by media.


Problem 2 

A Uniform Resource Locator (URL) is:


A unique address for a device on the Internet.


A piece of software used to find a resource on the World Wide Web.


A unique identifier for a resource on the World Wide Web that also specifies the protocol for retrieving it- correct


A protocol used for exchanging data on the World Wide Web.


Answer
Correct! 

A URL is a type of URI, but the URI does not necessarily specify the protocol used for accessing the resource.



Problem 1 

Hypertext Transfer Protocol (HTTP) is used to:


Request information about a resource on the World Wide Web.



Provide a unique identifier for a resource on the World Wide Web.



Locate a resource on the World Wide Web. 



Transfer content on the World Wide Web -correct



Explanation

The client initiates the transfer by sending an HTTP request to the server, which replies with an HTTP response.



Problem 2

The first line of an HTTP response always includes:



The protocol version and status code- correct



The HTTP action/verb and argument to the action/verb.



The URL that was requested and the content at that address.



Information about the server.



Explanation

This tells the client/browser which version of HTTP the server is using and whether the request was successfully handled.

Developing web pages with html



Problem 1

The two child elements of the html element in an HTML page are:
    

header and footer
    
    

head and body  - correct
    
    

meta and content
    
    

title and body
    
    

Answer
Correct! 

The head element contains information about the page and references to external resources; the body element contains the content itself.
    
    

Problem 2

When transmitted using HTTP, HTML content is part of the:



header of an HTTP request 



URI in an HTTP request



header of an HTTP response



body of an HTTP response -correct



Explanation

This is how the server sends the HTML content back to the client/browser.



Problem 1

In HTML, the <p> tag is used to:
    
    

Mark the beginning of a new page.



Mark the beginning of a new paragraph.- correct



Include a single line break between two sentences.



Render content in a larger font.



Answer
Correct: 

This should be used to represent the text that is a single thought or concept within the content.



Problem 2

In HTML, the difference between a div and a span is that:
    
    

A div should contain larger pieces of content that stand alone as a unit, whereas a span is a small piece of content.- correct
    
    

A div will always be rendered in a larger font than a span.
    
    

A div is part of the HTML page’s head element whereas a span is part of the body.
    
    

A div must have a p element as a child whereas a span cannot.
    

Answer
Correct: 

A div is generally used for holding major pieces of the page, e.g. a menu or navigation bar, whereas a span is generally just a few words or sentences.
    
    

Problem 1

The HTML “style” attribute allows us to:



Define a new HTML tag.



Specify the location of the HTML element within the page.



Specify the appearance of the HTML element.- correct



Indicate that an HTML element should only be rendered depending on the user’s actions.



Answer
Correct: 

This allows us to specify the font color, font size, background color, etc.



Problem 2

The difference between an HTML “class” and “id” is that:



An HTML element can belong to many classes but only have one id.



Multiple HTML elements can belong to the same class but each id must be unique. - correct



Every HTML element belongs to at least one class but does not have to have an id.



Nothing, they’re the same thing!



Answer
Correct: 

Classes are groups of elements, but only one element may have a given id.



Problem 1

Inline CSS uses:



A separate file for specifying HTML elements’ appearance.


The <style> tag in the header of the HTML.
    
    

The css tag in the header of the HTML.
    
    

The “style” attribute of the HTML element.-  correct



Answer
Correct: 

This allows us to specify the appearance for a single element.



Problem 2 

Assuming you have internal CSS that reads <style>.funText { color: blue; }</style>which of the following will be rendered as blue text?


Correct Answer

The “.” notation in the CSS selector selects elements in the specified class.


Problem

In an HTML form, the difference between a radio button and a check box is that:



The user may choose only one option from a group of radio buttons, but may choose many options from a group of check boxes. - correct



The user may choose only one option from a group of check boxes, but may choose many options from a group of radio buttonsWhen a check box is selected, all other check boxes are unselected, but this is not the case with radio buttons.



The only difference is their appearance.



Explanation

Radio button elements are grouped using their “name” attribute and the user can only choose one value for that name.


Problem 1

The purpose of the “alt” attribute of an HTML “img” element is to:



Specify the text that should appear when the mouse hovers over the image.



Specify the text that the user should click to reveal the image.



Specify the text that should appear if the image does not load. - correct



Specify the location of the image on the World Wide Web.


Explanation

The “title” attribute is used to show text when the mouse hovers over the image, but the “alt” attribute is used as the “alternative” to display.



Problem 2

You are viewing a webpage at http://www.example.com/fun/hello.html and the HTML includes the element <img src=”images/logo.jpg”> , which uses a relative path to locate the image. The absolute path of that image would be:



http://www.example.com/images/logo.jpg



http://www.example.com/fun/hello.html/images/logo.jpg



http://www.example.com/fun/images/logo.jpg  - correct



images/logo.jpg

Answer
Correct: 

The page hello.html is in the “fun/” directory. The relative path is relative to the location of the page, i.e. relative to the directory that it is in, so it would be in the “images/” subdirectory of “fun/”.



Problem 3

What would be generated by the following HTML? 


A table with two rows and two columns. - correct



A table with one row and two columns.



A table with two rows and four columns.



A table with one row and one column.


Answer
Correct: 
Each <tr> tag represents a new row in the table. Within the row, each <td> tag represents a new column.


Problem 1

The primary goal of Responsive Web Design is to:



Develop Web pages in such a way that they respond to the size of the device and browser when being rendered. - correct



Develop Web pages in such a way that they respond to the actions of the user.



Allow for the inclusion of libraries that modify the appearance of the Web content.



Allow parts of Web pages to change while other parts stay the same.



Answer
Correct: 

RWD is an approach to designing Web pages in a way that takes all devices into account.


Problem 2

When organizing content using Bootstrap, we use:



<div> elements in the “container” and “row” classes. - correct

<div> elements in the “table” and “tr” classes.
    

<table> and <tr> elements in the “container” classes.
    

<row> and <col> elements in the “container” classes.
    

Answer
Correct: 

The “container” <div> spans the width of the page and represents the area where the RWD content should reside. The “row” <div>represents the horizontal group of columns that hold the content.