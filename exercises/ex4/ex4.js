function upper(strings, ...values) {
    console.log(strings, values);
    str = "";
    for (var i = 0; i < strings.length; i++) {
        str += strings[i];
        if (i < values.length) {
            let upped = "";
            for (var j = 0; j < values[i].length; j++) {
                upped += values[i][j].toUpperCase();
            }
            str += upped;
        }
    }
    return str;
}

var name = "kyle",
    twitter = "getify",
    classname = "es6 workshop";

console.log(
    upper `Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
    "Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);