import update from './index.js';

var original = {
    name: "John Doe",
    age: 10,
    aliases: []
}


var copy = update(original, {
    name: { set: "Jane Doe" },
    age: { add: 1 },
    aliases: { push: "Johnathan" },

});

var copy2 = update(copy, {
    aliases: { concat: ["Big J", "J-Man"] },
});

console.log(copy2)