interface Person{
    fname:string,
    lname:string,
    sayHi: () =>string
}

var Customer:Person={
    fname:"Jay",
    lname:"Amin",
    sayHi: ():string=>{return " Hi "+Customer.fname+" "+Customer.lname}
}

console.log("Customer Object");
console.log(Customer.fname);
console.log(Customer.lname);
console.log(Customer.sayHi());