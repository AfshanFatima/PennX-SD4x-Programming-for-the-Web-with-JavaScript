
# Week-2 



## USING JAVASCRIPT TO CREATE  DYNAMIC, DATA-DRIVENWEB PAGES 
 
 
 
### 1-JAVASCRIPT BASICS



Problem 1

The primary variable types in JavaScript are:

Number, String, Boolean, Null, Undefined -  correct


Integer, Floating Point, Character, Boolean, Byte
Number, Object, Pointer


byte, short, int, long, double, float, boolean, char


Answer
Correct: 
JavaScript has five primary variable types.



Problem 2

In JavaScript, what will happen if we attempt to change a variable’s type like this? 


This will result in an error/exception because we cannot change the type of the variable value.

The variable value will not be changed and will still be equal to 11.

We are able to change the variable’s type so value will now equal “true”.-  correct

This will create another variable that is also named value.

Answer
Correct: 
In JavaScript, it is okay to change a variable’s type, so here value becomes “true”.



Problem 1

Given the following JavaScript, what is printed to the console?

The value 16 since it is element #3 of the array.

undefined since there is no element #3. - correct

Nothing is printed because an exception would occur.

All three elements are printed.

Answer
Correct: 
The array indices are 0-based, meaning that there are elements #0, 1, and 2 but not #3. In JavaScript, accessing an index that does not exist in the array returns undefined.



Problem 2

Given the following JavaScript, what behavior would you observe? 

An exception would occur.

The string 'dog' would be replaced by the string 'eagle'.

The string 'eagle' would be added to the end of the array. -  correct

The string 'eagle' would be added to the front of the array.


Answer
Correct: 
In JavaScript, it is possible to set elements using an index that is outside the bounds of the array, and the element will then be added to the array. Here, it is added to the end because the array already has 4 elements, so index #4 would come after the last element.



Problem 3

I have a JavaScript object defined as follows: 

What are the two ways of accessing the balance 
property?

account.balance and account.get('balance')

account.balance and account[1]

account.balance and account['balance'] -  correct

account::balance and account->balance

Answer
Correct: 
In JavaScript we can access an object’s properties using the “dot” notation or by using the “array” notation with the property name passed as a string.



Problem 1

I have some JavaScript code for which the expression a===b returns true. In this case, what will a==b return?

true -  correct

false

It depends on the variable types of a and b.

This will not execute because a==b is not legal JavaScript.


Answer
Correct: 
In JavaScript, the triple-equals operator compares values as well as types, whereas double-equals only compares values. If a===b returns true, a and b must have the same value, so a==b will return true.




Problem 2

In JavaScript the expression if(′false′) will evaluate to:

false because the string ′false′ is converted to the Boolean value false.

false because all strings are considered falsy.
true because all non-empty strings are considered truthy.-  correct

This will cause an exception because it is not possible to use a string in an if-statement.

Answer
Correct: 
JavaScript allows all variable types to be evaluated in the conditions of if-statements. Any non-empty string is considered truthy, which will then evaluate to true.




Problem 1 

If I have a JavaScript array called array and a function called fun, the array.forEach(fun)will:


return true if fun returns true for each element in array.

return a new array in which each element holds the output of invoking fun on the corresponding element in array.

modify array such that each element now holds the output of invoking fun on the corresponding original element in array.

invoke fun on each element of array. -  correct

Answer
Correct: 
The forEach function does not return anything or modify the array; it simply applies the function to each element.



Problem 2

A JavaScript prototype function is:

a function that can be used to create objects. -  correct

a function that can be used to create other functions.

a function that is automatically invoked as a result of invoking another function.

shorthand notation for specifying a function’s parameters.

Answer
Correct: 
Prototype functions are invoked using the keyword new and return objects.



Problem 1

Given the following JavaScript, what would be printed to the console?

true and false

0 and -1

16 and -1 -  correct

'fox' and null

Answer
Correct: 
The search function determines whether the argument can be found within the string. If so, it returns the index at which the argument starts; if not, it returns -1.




Problem 2 

Given a string variable named str with value 'abc1', which of the following will return true?

/[a-z][a-z0-9][0-9]/.test(str) -  correct

/[0-9][a-z]/.test(str)

/[0-9][a-z0-9]/.test(str)

/[a-z][0-9][a-z0-9]/.test(str)

Answer
Correct:
This regular expression means “a lowercase letter; followed by a lowercase letter or digit; followed by a digit,” which matches “bc1” at the end of the string. None of the other regular expression patterns match this string.




Problem 3

Given a string variable named str with value 'abc1def2', which of the following will return true?

/^[a-z][a-z0-9]*[0-9]$/.test(str) -  correct

/[0-9][a-z]$/.test(str)

/^[0-9][a-z0-9]*$/.test(str)

/[a-z][0-9][a-z0-9]$/.test(str)

Answer
Correct: 
This regular expression means “starts with a lowercase letter; followed by 0 or more lowercase letters and digits; ends with a digit,” which matches this string. None of the other regular expression patterns match this string.
