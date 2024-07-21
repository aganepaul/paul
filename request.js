




JavaScript
----------------

Javascript is a scripting language used add functionality (actions) to the HTML components.You want message to be display , some pop message to display.



Java Script developer console
--------------------------------

To run the javascript snippet for testing purpose, we need javascript developer console.
Similar to IDLE.
Java script is run on an environment called console. 		




How to launch console
----------------------
Most modern web browsers will provide you with access to a Developer Console where you can work with JavaScript in an interface similar to a terminal shell. 

Chrome Browser
------------------
To open the JavaScript Console in Chrome, you can navigate to the menu at the top-right of your browser window signified by three vertical dots. From there, you can select More Tools then Developer Tools.

ctrl+shift+j


Firefox
------------
To open the Web Console in FireFox, navigate to the ☰ menu in the top right corner next to the address bar. Select More Tools. With that open, click on the Web Developer Tools item.

--------------------------------------------------

Data type in javascript
----------------------------

1) Numbers:

10
10.5
-20


var x = 10
typeof x

We get the output  'number'

------------------------



10+20 

10-20 


10*20 

10%2 
 
10**2

10.5+20.6



Java Script never cares about float-point.

General Operator precedence also applicable.

10+20*3      ---> 70
10*(2+3)   ----> 50

------------------

String Datatype
------------------

Any sequence of characters within either single quotes or double quotes is treated as string.

'sunil'

"sunil"


We can apply + operator for Strings also and it acts as concatenation operator.


Rule: If both arguments are number type then + operator acts as arithmetic addition operator. 

If atleast one argument is of string type then + operator acts as concatenation operator.

----------------

10+20 ----------------> 30 

'sunil'+10 ---------------> sunil10

clear()  to clear the console

-----------------

To find by using length string.

The length property returns the length of a string.

Syntax:
---------
string.length


ex:

'sunil'.length

5

---------------

How to access characters of the String?


By using index

'sunil'[2]  --------> n

index starts with 0

'sunil'[200]  -----> undefinied
'sunil'[-1]  ------>  undefined

---------------------

Note: If we are trying to access string elements with out of range index or negative index then we will get undefined value and we won't get any Error.

boolean:
-------------

The only allowed values are: true and false (case sensitive)


Ex:
-------

typeof true

---------------------------------------

JavaScript Variables

Variables are containers to store values.

Syntax: 
var variableName=variableValue


Eg: 
var name = 'sunil' 
var age = 60 
var isMarried = false

Note: we are not mentioning datatype. So javascript also is dynamically types programming language.

typeof name
typeof age
typeof isMarried

++++++++++++++++++++++++++++++++++++++++++++++++++++

Note: JavaScript variables follow CamelCase Convention

+++++++++++++++++++++++++++++++++++

null and undefined datatype


Variables that are declared but not initialized, are considered as undefined


Eg: 

var h; 
typeof h ----------- undefined


null value means nothing. 
If the value of a variable null means that variable not pointing to any object.


var currentplayer = 'sunil'

currentplayer = null

+++++++++++++++++++++++++++++++++++++++++++++++++

The 3 most commonly used methods of Java Script


1) alert(): 
To display alerts to the end user

alert('Hello there') 
alert(100000) 
alert(10.5)

+++++++++++++++++++++++++++++++++

2) console.log():

console.log():

Ex:
--------

console.log('Hello there')
console.log(10*20)

Note: These console message not meant for end user.

+++++++++++++++++++++++++++++++++++++++
3) prompt():


To get input from the end user

prompt('What is Your Name:')


But we can save as follows

var name= prompt('What is Your Name:')

alert('Hello '+name+' Good Evening')

+++++++++++++++++++++++++++++++++++++++++++

































