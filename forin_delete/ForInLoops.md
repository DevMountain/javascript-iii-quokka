## For In Loops

### Use the for key word

`for() {}`

### use in the in keyword to indicate they are a different kind of for loop

`for(... in ...) {}`

### need a variable to the left of the in

`for(var key in ...) {}`

### place the object you are looping over to the right of the in

`for(var key in object){}`

### Are used to loop over all of the keys of an object

```
var obj = {
    x: 7,
    y: 2,
    z: 2
}

for(var key in obj){
    key === x / y / z
}

```

### Commonly paired with square bracket notation to access the object

```
for(var key in obj){
    var value = obj[key]; //key is a string representing each object 1 at a time

    obj[key] = newValue; //square bracket is also used to assign
}

```