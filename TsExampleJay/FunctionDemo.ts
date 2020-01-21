function display(id:number,name:string,email?:string){
    console.log("ID : ",id);
    console.log("NAME : ",name);

    if(email!=undefined)
    {
        console.log("EMAIL : ",email);
    }
}

display(1,"Jigar");
display(2,"Jay","jay@gmail.com");