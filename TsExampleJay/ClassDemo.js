var Student = /** @class */ (function () {
    function Student() {
    }
    // fname:string;
    // lname:string;
    // constructor(){
    //     console.log("check");
    // // constructor(f,l){
    //     // this.fname=f;
    //     // this.lname=l;
    // }
    Student.prototype.display = function () {
        console.log("Welcome : ");
    };
    return Student;
}());
// class Marks extends Student{
//     display():void{
//     // display():void{
//         console.log("Welcome : "+this.fname+" "+this.lname);
//     }
// }
// var obj=new Marks("Jay","Amin");
var obj = new Student();
obj.display();
