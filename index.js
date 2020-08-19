function update(original, updates) {
    var updateProps = Object.getOwnPropertyNames(updates);

    for (var i = 0; i < updateProps.length; i++) {
        var currentUpdateField = updates[updateProps[i]];
        var operation = Object.getOwnPropertyNames(currentUpdateField)[0];

        var updateVal = currentUpdateField[operation];

        switch (operation) {
            case "set":
                original[updateProps[i]] = updateVal
                break;
            case "add":
                original[updateProps[i]] = original[updateProps[i]] + updateVal
                break;
            case "push":
                console.log("pushing")
                var newArr = original[updateProps[i]];
                newArr.push(updateVal);
                original[updateProps[i]] = newArr;
                break;
            case "concat":
                console.log("concatting")
                original[updateProps[i]] = original[updateProps[i]].concat(updateVal);
                break;

        }
    }

    return original;
}

export default update;