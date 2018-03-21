## Destructuring

### Destructuring is a shortcut for pulling properties off of an object

#### move the property name(s) from the dot notation on the right into the curly braces on the left

```js
var first_name = employee.first_name;
//becomes
var {first_name} = employee
```

##### can get multiple variables

```js
var { first_name
    , age
    , city
    , last_name
    , state
    } = person;
```

var first_name = employee.first_name;
var last_name = employee.last_name;
var age = employee.age;
var city = employee.city;
var state = employee.state;

##### variable names must match

``` js
var object = {
    x: 7,
    y: 8
}

//Yup 
var { x } = object; 

//Nope
var { newX } = object;
```

### Destructuring is triggered by curly braces on the left side of an assignment

##### for var & let

`var { age } = person;`

`let { age } = person;`

##### in function parameters


function isOldEnough({age}){
    <!-- name === undefined -->
    <!-- age === 17 -->
}

var person = {name: 'Bigel', age: 17};
isOldEnough(person)

```js
function isOldEnough({age}){}

isOldEnough({name: "Higel", age: 20, eyeColor: 'brown'})
```

##### in a function

```js
function isOldEnough(person){
    var {age, eyeColor} = person;
}

var obj = {name: "Higel", age: 20, eyeColor: 'brown'}
isOldEnough(obj)
```

##### in an import statement

`import { age } from './person'`
