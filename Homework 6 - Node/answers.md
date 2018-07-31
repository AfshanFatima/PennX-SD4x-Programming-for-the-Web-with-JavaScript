# Week - 4


# Building Scalable Web Apps with  Server-Side JavaScript



## 1 -  Building Web Applictions with Node.js



**Problem 1**

The purpose of using frameworks such as Node.js and Express is to:

Use JavaScript to dynamically generate web content on the server.  -  correct

Use JavaScript to dynamically generate web content on the client/in the browser.

Use HTML to dynamically generate web content on the server.

Establish HTTP connections between the client and the server.

Correct Answer:
Node.js and Express are server-side frameworks that allow you to build web apps in JavaScript. These apps run on the server and dynamically generate content.


**Problem 2**

The purpose of the listen function in an Express app is to:


Send web content from the server to the client/browser.

Send web content from the client/browser to the server.

Wait for incoming HTTP requests on the specified port number.  -  correct

Notify the client/browser that web content is available.

Answer Correct:
This function is the “start” of the web app and listens for incoming connections, which are then handled by different callback functions.



**Problem 1**

How do we retrieve the “Date” field from an HTTP header using a Node Express Request object called req?


req.header.Date

req.Date

req.get('Date') -  correct

req.headers('Date')

Answer
Correct:
The Request object’s “get” function allows us to access HTTP headers. We can also use the “headers” array property, but the “get” function is preferred.


**Problem 2**

How do we set the status code field to 500 in an HTTP header using a Node Express Response object called res?


res.status = 500;

res.status(500); -  correct

res.setStatus(500);

res.headers({ status : 500 });

Answer
Correct:
The Response object’s “status” function allows us to set the status code in the header.


**Problem 3**

In a Node Express Response object, what is the difference between the “write” and “send” functions?


The “send” function closes the connection after sending the message, but the “write” function does not.  -   correct

The “send” function can only take a string as an argument, but the “write” function can take any variable

The “write” function can only be called once on the object, but the “send” function can be called multiple times.

There is no difference, they do the same thing.

Answer
Correct:
Both can be used for sending content to the browser, but after “send” is called, the connection is closed.


**Problem 1**

My Node Express app includes the following line:
app.use('/static', express.static('html')); 
Which of the following is true?


A request for /public/info.html will result in files/info.html being sent to the browser.

A request for /static/info.html will result in html/info.html being sent to the browser. -  correct

A request for /html/info.html will result in static/info.html being sent to the browser.

A request for /static/info.html will result in static/info.html being sent to the browser.

Answer
Correct: The first argument to the “use” function is the path or URI for which this middleware should be invoked. The argument to “express.static” is the name of the directory where the static content can be found.



**Problem 2**


The purpose of the express.Router() function is to:

Create a route (or subroute) of middleware functions that can be used in the app. - correct

Identify the single callback function to be invoked upon receiving a request for a given URI.

Invoke the next middleware function along a route.

Change the route of middleware functions depending on data in the HTTP Request. 

Correct Answer:
When we create a Router, we specify the middleware functions that are to be invoked on that route, and then set the Express app to use the Router.


**Problem 1**

My Node Express app includes the following code: 

```
app.use('/static', express.static('html'));
```

Which of the following is true?

   A request for /public/info.html will result in files/info.html being sent to the browser.
   
A request for /static/info.html will result in html/info.html being sent to the browser. correct

A request for /html/info.html will result in static/info.html being sent to the browser.

A request for /static/info.html will result in static/info.html being sent to the browser.

Answer
Correct: The first argument to the “use” function is the path or URI for which this middleware should be invoked. The argument to “express.static” is the name of the directory where the static content can be found.
Submit


**Problem 1**

Which of the following URIs would cause this code to be invoked and the id and name to be properly written to the console?


/userID/1234/userName/banana

/id/1234/name/banana -  correct

/?id=1234&name=banana

/?userID=1234&userName=banana

Correct Answer:
 This is a parameterized query, and the URI must match the pattern “/id/[value]/name/[value]”. The values can then be accessed from the req.params object using the parameter/property names “userID” and “userName”.



**Problem 2**


What is the difference between submitting an HTML form with method = “GET” and doing it with method = “POST”?


With a “POST” the form data is sent in the body of the HTTP Request; with a “GET” it is sent as a query in the URL. -   correct

With a “POST” the form data is sent to the server; with a “GET” no data is sent.

With a “POST” the browser can then request a different URL; with a “GET” it stays on the same web page.

There is no difference; they both do the same thing.

Answer
Correct: Both types of requests send data to the server, and both can be used to access different URLs, but the difference is in how the data is sent to the server.



**Problem 1**


My Node Express app is using EJS as the view engine with the default settings and includes the following code: 

```
app.use('/about', (req, res) => {
      res.render('/about-page');
});
```
Which .ejs file would be used to generate the HTML for this request?

ejs/about.ejs

ejs/about-page.ejs

views/about.ejs

views/about-page.ejs - correct


Answer
Correct: By default, EJS pages are in the “views” subdirectory, and the argument to res.render specifies the name of the file, without the extension.



**Problem 2**

My Node Express app is using EJS as the view engine with the default settings and includes the following code: 
```
res.render('/page', {data : values });
```

where values is an array of strings. In the EJS page that is used to generate the HTML, which of the following correctly prints each element of the values array?

Here are the values:
```
<%  data.forEach ( (value) => { % >
    <p>  <%= value %> <p>
 <% }); %>
```

Correct Answer: The name of the property in the argument passed to this page is “data,” so that’s the object on which we invoke the forEach function. Then we use the EJS tags to surround the JavaScript code and evaluate each individual value.



 ## 2 -  DATABASES AND WEB APPLICATIONS


**Problem 1**

In MongoDB, data are stored as:


collections of documents.-   correct

tables of records.

records of objects.

collections of tables.


Answer
Correct: A “document” is similar to a JavaScript object, and rather than store them in some fixed-organization structure, they are simply grouped together into a “collection.”



**Problem 2**

When using MongoDB and Mongoose, the purpose of a “Schema” is to:

establish a connection to the database.

define a blueprint that describes the objects that will be stored in the database. -  correct

specify the location of the database instance.

make data from the database available to JavaScript code in other files.


Answer
Correct: The Schema class allows us to create other objects that represent the data in the database.


**Problem 1**


I am using MongoDB and Mongoose and have defined a Schema that I have exported as the “Student” class. Which function should I use in order to retrieve all of the Student objects in my database?


Student.search

Student.all

Student.find -  correct

Student.select


Answer
Correct: The “find” function is defined in the Schema class and is used to conduct a search for the objects in the database.



**Problem 2**

I am using MongoDB and Mongoose and want to update the data for a particular object in my database. Which function, or sequence of functions, should I use?


findOne, then save -   correct

findOne, then update

update

update, then save


Answer
Correct: In MongoDB, we first need to get the object out of the database using findOne (or find). Then we can modify it and call save to put it back in the database, thus updating it.


**Problem 1**

I am using MongoDB and Mongoose and have a “Flight” schema that defines an object that has properties “origin” and “destination.” If I want to do a search that returns all objects for which the origin is “ORD”  the destination is “SFO”, the argument I should pass to Flight.find is:


[{origin: 'ORD'}, {destination: 'SFO'}]

{origin: 'ORD', destination: 'SFO'}  -  correct

{ $and: {origin: 'ORD', destination: 'SFO'}}

{origin: 'ORD' && destination: 'SFO'}


Answer
Correct: To do an “and” or “all” search, we just construct a single object that maps the properties to the values we’re searching for.
   

**Problem 2**


I am using MongoDB and Mongoose and have a schema that includes the following: 
```
var itemSchema = new Schema ( {
    description: String,
    prices: Numbers,
    colors: [String]
} );
var storeSchema =  new Schema ({
    id: String,
    items: [itemSchema]
} );
```

Assuming the storeSchema is exported to a module named “Store”, which of the following query objects would I use with that Schema to find all stores that have items that are red or items that are white?

{ items.colors: 'red', items.colors: 'white' 

{ $or: [{itemSchema.colors: 'red'}, {itemSchema.colors: 
'white'}] }

{ $or: [{items.colors: 'red'}, {items.colors: 'white'}] }  -  correct

{ $or: [{colors: 'red'}, {colors: 'white'}] }


Answer
Correct: We need to construct an “or” query using an object with “$or” as the property and an array of query terms as the value. To access the colors of the items, we use the store’s “items” property and then the itemSchema’s “colors” property.