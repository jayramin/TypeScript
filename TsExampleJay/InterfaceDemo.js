var Customer = {
    fname: "Jay",
    lname: "Amin",
    sayHi: function () { return " Hi " + Customer.fname + " " + Customer.lname; }
};
console.log("Customer Object");
console.log(Customer.fname);
console.log(Customer.lname);
console.log(Customer.sayHi());
