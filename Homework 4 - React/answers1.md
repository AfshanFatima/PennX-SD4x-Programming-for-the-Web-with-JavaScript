# Week-3


## Client-Side Frameworks for Developing Modular  Web Page Components


 ### Developing Web Applications with React
    
  
 
**Problem 1**

The primary difference between the standard DOM and the React Virtual DOM is that:


The React Virtual DOM selectively renders HTML elements instead of rendering all elements in the page.-  correct

The standard DOM consists only of HTML elements but the React Virtual DOM also includes JavaScript. 

The React Virtual DOM is accessible via JavaScript, whereas the standard DOM is not.

The React Virtual DOM uses a tree structure, whereas the standard DOM does not.


Answer Correct:
Both the React Virtual DOM and standard DOM use a tree structure and allow for access via JavaScript. However, the elements in the React Virtual DOM are rendered only when needed, as opposed to the standard DOM, which always re-renders all elements whenever anything changes.

**Problem 2**

JSX allows us to:

Separate JavaScript from HTML using the <script> tag.
    
Include HTML within the JavaScript when invoking a React component’s “render” function.-  correct

Render React components anywhere in the HTML page.

Write functions that are invoked when rendering a React component.


Answer
Correct:
JSX is a technology that converts HTML to JavaScript, so that we can then use it in the JavaScript function that renders a React component.

**Problem 1**

The two ways of creating a React component in JavaScript are:

using the React.Component or React.createComponent prototype functions.

using the React.Component or React.createClass prototype functions.

using the React.createClass prototype function, or creating a class that extends React.Component. -  correct

using the React.createComponent prototype function, or creating a class that extends React.Class.


Answer
Correct:
React.createClass is a function that returns an object; the argument is an object that maps properties to functions. In ES6, we can create classes using React.Component as the prototype.


**Problem 2**


The difference between a React component’s properties and its state is that:


The state can be changed after the component is initialized, but the properties should not be. - correct

The state can be used when the component is rendered, but properties cannot.

The properties are reset every time the component is rendered, but the state maintains its values.

The state is only accessible in the component’s “render” function, but the properties are accessible in all functions.

Answer
Correct:
The properties are set when the component is created, but should not change afterward. On the other hand, the state should change during the component’s lifecycle.

**Problem 1**

I have implemented a React component that uses a callback function that contains the line: ```this.state = { value : this.state.value+1 };``` I see that the callback function is invoked and this line is executed, but the HTML that uses this.state.value never changes. What code should I instead use to fix this problem?


```this.state.value+1;```

```this.state.value = this.state.value+1;```

```this.setState({value : this.state.value+1});```-  correct

```this.setState({value + 1});```


Answer
Correct:
this.setState will force the ```render``` function to be called so that the component is re-rendered, whereas directly setting ```this.state``` will not.

**Problem 2**

I have a React component called “MyText” that is inserted into the HTML page using the following: 
```
ReactDOM.render(
  <div><MyText value = "Hi there!" /></div>,
  document.getElementById('container')
);
```
My component defines a callback function named “modifyText” and I want the function to be invoked when the user places the mouse over the text that is set as a property when this component is created. How should I implement the MyText component’s “render” function?

 Answer:
```
render () {
return (
<span onMouseOver={this.modifyText.bind(this)}>
 {this.props.value}
    </span>
);
}
```
Answer
Correct: Explanation:
To invoke “modifyText” when the user mouses over this text, we need to bind it to the “onMouseOver” event using ```this.modifyText.bind(this)```. To display the text that is set as a property, we use ```this.props.value;``` note that the property is named “value”.

