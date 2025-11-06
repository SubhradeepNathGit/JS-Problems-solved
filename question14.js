// condition statement to find the largest of five numbers

function findLargest(a, b, c, d, e) {
    if (a >= b && a >= c && a >= d && a >= e) {
        return a;
    } else if (b >= a && b >= c && b >= d && b >= e) {
        return b;
    } else if (c >= a && c >= b && c >= d && c >= e) {
        return c;
    } else if (d >= a && d >= b && d >= c && d >= e) {
        return d;
    } else {
        return e;
    }
}


console.log(findLargest(10, 2, 233, 98, 32));

