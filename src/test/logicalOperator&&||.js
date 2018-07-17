
var char = null && 1
char

char = null || 1
char

// falsy value in JS 
// undefined null Nan 0 ""

// Logical AND operation
true  && true;  // true
true  && false; // false
false && true;  // false
false && false; // false

// Logical OR operation
true  || true;  // true
true  || false; // true
false || true;  // true
false || false; // false


"foo" && "bar"; // "bar"
"bar" && "foo"; // "foo"
"foo" && "";    // ""
""    && "foo"; // ""

"foo" || "bar"; // "foo"
"bar" || "foo"; // "bar"
"foo" || "";    // "foo"
""    || "foo"; // "foo"
