
## Utility function

### indexOf

#### Gets the index of a given item
`array.indexOf(7)` -> Returns the index of the first time it found 7
#### Works with strings, numbers, booleans
`array.indexOf(22)`

`array.indexOf("twenty two")`

`array.indexOf(false)`
#### returns -1 of no match found
`array.indexOf(18)` -> Returns -1 because 18 is not in the array
#### can start later
`array.indexOf(10, 3)` -> Returns the index of 10, but only starts looking at index 3.

### split

#### breaks a string based on a character
`"hello, my, name, is, Jeremy".split(',')`

#### hard coded strings or variables
`str.split(',')`

#### returns an array with each chunk as a new item
`var splitArr = "hello, my, name, is, Jeremy".split(',')`

`splitArr === ["hello", " my", " name", " is", " Jeremy"]`

## Higher order functions

A higher order function is a like a mastermind with smaller functions that act as minions or workers.

A higher order function gets and uses other functions to perform *parts*.

### forEach

##### loops over all items in an array
`array.forEach(...)`
##### uses a callback function
`array.forEach(function(){})`

`array.forEach(()=>{})`

##### gives the callback function each item 1 at a time
`array.forEach( function( item ) { } )`

`array.forEach( ( item ) => { } )`

##### also gives the index, and the original array
`array.forEach( function( item, index, arr) { } )`

`array.forEach( ( item, index, arr) => { } )`

##### must use the arr parameter to change the original array
`array.forEach( function( item, index, arr) { arr[index] = 7 } )`

`array.forEach( ( item, index, arr) => arr[index] = 7 )`


### map

##### works just like a forEach function
`array.map( function( item, index, arr) { } )`

`array.map( ( item, index, arr) => { } )`

##### the callback is used to change/alter/re-map the item

`array.map( function(item){ return item + ", eh"})`

`array.map( function(item){ return item + 27})`
```
array.map( function(item){ 
    if(item.isDemoted){
      item.isAdmin = false;
    }
    if(item.isDavidBlaine){
      item.lovesCheezits = true;
    }
    return item;
})
```

##### anything returned by the callback function is added to a new array

`var array = [1, 2, 4, 10]`

`var mapResult = array.map( function( item ) { return item + 10} )`

`var mapResult = array.map( ( item ) => item + 10 )`

`mapResult === [ 11, 12, 14, 20]`

`array === [1, 2, 4, 10]`

### filter

##### works just like a forEach function
`array.filter( function( item, index, arr) { } )`

`array.filter( ( item, index, arr) => { } )`

##### the callback is used to check if the item goes into the new array


`array.filter( function(item){ return item > 21})`
`array.filter( (item) => item > 21 )`

`array.filter( function(item){ return item.isAdmin } )`
`array.filter( (item) => item.isAdmin )`

###### return truthy = included.  return falsy = excluded.

`var array = [1, 2, 4, 10, 11]`

`var filterResult = array.filter( function( item ) { return item % 2 === 0 } )`

`var filterResult = array.filter( ( item ) => item % 2 === 0 )`

`filterResult === [ 2, 4, 10]`

`array === [1, 2, 4, 10, 11]`

### reduce

##### works similar to a forEach function
##### adds a new prev parameter in the front
`array.reduce( function( prev, item, index, arr) { } )`

`array.reduce( ( prev, item, index, arr) => { } )`

##### adds a starting value after the function
`array.reduce( function( prev, item, index, arr) { }, startingValue )`

`array.reduce( ( prev, item, index, arr) => { }, startingValue )`

##### prev is whatever value the previous invocation returned

`array.reduce( function( prev, item, index, arr) { return prev + next }, 0 )`

`array.reduce( ( prev, item, index, arr) => prev + next, 0 )`

##### reduce is great for running totals

`var array = [1, 2, 4, 10, 11]`

`var reduceResult = array.reduce( function( prev, item ) { return prev + item }, 0 )`

`var reduceResult = array.reduce( ( prev, item ) => prev + item, 0 )`

`reduceResult === 28` 

`array === [1, 2, 4, 10, 11]`