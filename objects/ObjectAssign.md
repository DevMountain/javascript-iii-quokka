## Object assign

### Object.assign is a function used to copy properties from one object to another

`Object.assign( destination, source )`

`Object.assign( { }, { name: "Me" } )`

#### Object.assign copies from the right to the left and returns the final copy

```
Object.assign( { age: 27 }, { name: "Myself"}) 
-> returns 
{ age: 7, name: "Myself"}
```

###### correct syntax
```
var result = Object.assign( { age: 27 }, { name: "Myself"}) 
```

###### Can copy multiple times 
```
var result = Object.assign( { age: 27 }, { name: "Myself"}, { color: "Red"}, { food: "Wings" }) 
```