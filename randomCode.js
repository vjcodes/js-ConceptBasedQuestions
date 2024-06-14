var frequencySort = function (s) {

    let counter = new Map();
    for (const char of s) {
        counter.set(char, (counter.get(char) || 0) + 1)
    }

    counter.forEach((value, key) => {
        console.log(value, key)
    })

};

frequencySort("tree")