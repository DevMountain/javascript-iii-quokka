## Object assign

### Object.assign is a function used to copy properties from one object to another

`Object.assign( destination, source )`

`Object.assign( { }, { name: "Me" } )`

#### Object.assign copies from the right to the left and returns the final copy

```js
Object.assign( { age: 27 }, { name: "Myself"}) 
-> returns 
{ age: 27, name: "Myself"}
```

###### correct syntax
```js
var result = Object.assign( { age: 27 }, { name: "Myself"}) 
```

###### Can copy multiple times 
```js
var result = Object.assign( { age: 27 }, { name: "Myself"}, { color: "Red"}, { food: "Wings" }) 
```