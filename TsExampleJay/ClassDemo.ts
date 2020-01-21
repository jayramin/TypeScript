class Student{
    fname:string;
    lname:string;

    // constructor(){
    //     console.log("check");
    constructor(f,l){
        this.fname=f;
        this.lname=l;
    }
    // display(){
    //     console.log("Welcome : ");
    // }
}
// class Marks extends Student{

//     display():void{
//     // display():void{
//         console.log("Welcome : "+this.fname+" "+this.lname);
//     }
// }

// var obj=new Marks("Jay","Amin");
// we can create objtect through new keyword only
// we can give any name to objtect variable var koibhi=new ClassName;
var obj=new Student(12,12);
// obj.display();