## Template Strings

### Cleaner String Concatenation

In javascript we can combine strings with the + symbol.
```js 
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + Last Name
```

"Jane said, \"Hello Dave, I missed you\" "

fullName would contain 'Jane Doe'

We can do the same thing with a template string instead.
In a template string we use the backtick (top left of keyboard on the ~ key)
We then use ${ } to break our of the string, and we can put in variables

```js
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`
```

For small strings like combining first and last name it doesn't look very helpful, but in something like an email template, it becomes much easier to read. 

```js
let exclain = "ouch"
let adverb = "coyly"
let noun = "turtle"
let adjective = "unfortunate"

`${exclaim} he said ${adverb} as he jumped into his convertible ${noun} and drove off with his ${adjective} wife.`
 ```           

### Multi Line
Normal string in javascript don't handle multi line very well.  You have to use \n to tell code you want it to put in a new line (called `carriage return` from the typewriter days.)

```js
    let str = 'If I try to put multiple lines I break my string
               if I try to keep typing I see that I am not in the string...' 
               
    let str2 = 'I have to do multiple lines like this.\n' +
               'And it starts to look really gorss.\n' + 
               'And who really wants to have to worry about this.'
                 
```

Instead we can use template strings and preserve that white space

```js
    let template = `I can put in extra lines
            And the template just keeps on keeping on
            It's so much nicer
            Plus I can use both ' and " without having to escape them.`
```