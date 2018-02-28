## Classes

### Classes are a construct to help us build objects

The class syntax allows us to define a template and then use that template repeatedly.

The keyword to define a class is `class`

The keyword to use an already defined class and to make an object is `new`

`class Music {}`

`var pop = new Music()`

### Building objects

Classes can be invoked as often as you want.  Every time you do you will get a new object.

The setup function for a class is called constructor.

### Functions

Functions are defined on the template and then shared between every copy.

They are created as siblings to the constructor at the top level.

They must use the `this` keyword to access the object the function was invoked from.