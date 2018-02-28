## Higher Order Functions, Reducing For Loops
Many of the for loops that we write are structured the same way every time.  We can save ourselves a lot of time by using higher order functions instead.  There are 4 patterns of for loops we are going to be addressing for our higher order functions.

### forEach 

In a forEach, we want to run a bit of code once on every element in an array.  

Maybe we want to create a full name on an array of users that already have first and last names.

```js 
ary = [{firstName:'Brack',lastName:'Carmony'},{firstName:'Joe',lastName:'Blank'},{firstName:'Ben',lastName:'Sellers'},{firstName:'Amy',lastName:'Webster'},{firstName:'Lori',lastName:'Webster'},{firstName:'David',lastName:'Ludlow'}]

for (var i=0; i<ary.length; i++){
    ary[i].fullName = ary[i].firstName + " " + ary[i].lastName
}
```

Or we want to console log all the users names and phone numbers so we can contact them.

```js 
// {fullName:'Bobby Bobbers', phone:'555-365-5618}
for (var i=0; i<ary.length; i++){
    console.log(ary[i].fullName + ' : ' + ary[i].phone)
}
```

Or we want to send an email to all users in an array (the sendEmail function would be defined elsewhere)

```js
// subject = "Rock your world"
// body = "Hi i am a Nigerian Prince with HUGE tracks of LAND... "
// ary = ['bobby@world.com', 'james@PEACH.com', 'jack@beanstalk.vine']
for (var i=0; i<ary.length; i++){
    sendEmail(ary[i].email, subject, body);
}
```

Notice how in all three of these cases, we have the exact same for loop structure.  Also notice that we pretty much just deal with ary[i] as the only thing we deal with inside of the for loop.  If our existing for loop looks like this, we can replace the for loop syntax with a forEach function call.

```js
    ary.forEach(user => user.fullName + " " + user.lastName)

    ary.forEach(contact => `${contact.fullName} : ${contact.phone}`)

    ary.forEach(email => sendEmail(email, subject, body))
```

### map

The basic pattern we want to do with a map, is in addition to going through each item in an array.  We want to transform those elements in some way to get a new array.

We may be calculating taxes on a bunch of purchases.

```js
    ary = [5.00, 1.62, 6.37, 7.36, 100]

    let postTax = [];
    for (var i=0; i<ary.length; i++){
        postTax.push( ary[i] * 1.076 );
    }
```

Or we might be generating a greeting for the begining of an email.

```js
    ary = ["Bob", "Jane", "Prince"]

    let greetings = [];
    for (var i=0; i<ary.length; i++){
        greetings.push( `${ary[i]}, it is nice to meet you.` );
    }
```

Notice how in both we start by making a new array, that is what we are intersted in.  Then we are always pushing the result of our calcuation into the array.


### reduce

Reduce is used in situations where we want to go through the array, and come up with some final result based on the elements in the array.  

Common examples include.  Summing all elements from an array.

```js
ary = [1,2,3,4,57,32,64,12,6];

let total = 0;
for (var i=0 ;i<ary.length ;i++){
    total += ary[i];
}
```

We can change this to a reduce. This has slightly different syntax than our previous examples.  Instead of getting the element as the first property.  Our total, or whatever is being passed along the reducer is our first parameter.  Also after the callback function, we pass in what we want the starting value of total to be.  In this case 0. If we don't give it a value it will use the first element in the array as the starting total.  And skip the first loop through the array.

```js
let sum = ary.reduce( (total, cur) => total + cur , 0)
```

```js
let scores = [[4,7],[7,2],[4,7],[5,5]];

let record = scores.reduce((record, game)=>{

    if (game[0] > game[1]){
        record.wins++;
    }else if (game[1] > game[0]){
        record.loses++;
    }else{
        ties++;
    }
    return record

}, {wins:0, loses:0, ties:0}) // Starting record
```

### filter

Filter lets us filter down our array to create a new array with only the pieces we want.

```js
    let numbers = [5,6,7,2,4,7,8,2,7,3,7,7,4,1,6, 5.4, "sup"];

    let odds = numbers.filter(num => num % 2 === 1);
    let evens = numbers.filter(num => num % 2 === 0);
    let other = numbers.filter(num => num % 2 !==0 && num % 2 !== 1);
```

### More that they can do

Sometimes when working with the loop, you need to know the index, or have access to the whole array.  The callbacks for all 4 of these methods accept two additional parameters. The majority of the time you probably won't need to use the index or the whole array.  But in that minority where you do, they are avaialbe.

ary.map((elem, index, wholeArray) => {})

ary.forEach((elem, index, wholeArray) => {})

ary.filter((elem, index, wholeArray) => {})

ary.reduce((total, elem, index, wholeArray) => {}, startingTotal)

