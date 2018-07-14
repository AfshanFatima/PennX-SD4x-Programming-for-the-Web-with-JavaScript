Advanced Conponent React for Design



I have a React component called “Parent” and want its “render” function to include a component called “Child,” and pass it a prop called “name” which comes from a property called “childName” in the Parent’s state. Which of the following is the correct implementation?


Answer
Correct: We can have the Parent’s “render” function include the Child using the JSX notation, and pass the prop by using this.state.childName and wrapping it in curly braces.

Problem 1


The concepts of “Service-Oriented Architecture” and “Software as a Service” refer to the idea that:
Applications expose their data and functionality through external interfaces.  -  correct
The source code of software must be available to anyone who requests it.
It must be possible to replicate software instances on multiple machines.
Software is separated into modules or components.


Answer
Correct: The main idea is that, rather than being implemented as a monolithic piece of software, applications are “services” that provide data and functionality to other software that need them, and that these “services” are accessible over the network.

Problem 2

When using jQuery AJAX to make a request to a Web API, the function we use is:
ajax.getJSON
ajax.get
$.getJSON -  correct
$.ajax


Answer
Correct: This function sends an HTTP request to the specified URL and expects a JSON object in return; it then invokes the specified callback function and passes the JSON object to it as an argument.



Problem 1

In testing a React application, Enzyme is used for:
Creating, manipulating, and inspecting React components. -  correct
Defining the callback functions that implement each test case.
Describing the expected results for a given test case.
Deploying the React application to a web server.


Answer
Correct: Enzyme is specifically used for creating the components using the “shallow” and “mount” functions. We can then manipulate and inspect their state based on events that we simulate in the test.




Problem 2


The benefit of using a framework such as Node.js to develop and deploy a React app is that it allows us to:
Define React components in different files.
Incorporate dependencies of the code within the file that requires it.
Separate the HTML from the JavaScript code for the React components.
All of the above  -  correct


Answer
Correct: Node.js uses the “require” keyword for incorporating dependencies and other packages, and the “import” keyword for including modules defined in other .js files.
