state-update-helper
===
Easily mutate an object

Setup via NPM
```sh
npm install state-update-helper --save
```

## Usage
The `state-update-helper` package provides the `udpate()` function, which can be used to make a copy of a an object, changing only a few fields. Here is a basic example of a call to `update()`

```js
import update from 'state-update-helper'

const obj = {
    name: "John Doe",
    age: 40,
    profession: "programmer"
}

const newObj = update(obj, {
    name: { set: "Jane Doe" },
    age: { $add: 2 }
}); // {name: "Jane Doe", age: 42, profession: "programmer"}

// obj has not changed

```

### Update types
  * `{set: any}` overwrites existing field value
  * `{inc: Number}` adds number value to field
  * `{push: any}` pushes value onto array
  * `{concat: array}` concatenates given array with existing one (can be used to `push` multiple vlaues)

