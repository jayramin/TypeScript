function add() {
    var no = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        no[_i] = arguments[_i];
    }
    console.log(no);
    var i;
    var sum = 0;
    for (i = 0; i < no.length; i++) {
        console.log(no[i]);
        sum = sum + no[i];
    }
    var a = "Sum : " + sum;
    return a;
}
console.log(add(1, 2, 3, 4, 5));
