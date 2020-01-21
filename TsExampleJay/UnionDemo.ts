function display(name:number|string[])
{
    if(typeof name=='number')
    {
        console.log("Name : ",name);
    }
    else
    {
        var i;
        for(i=0;i<name.length;i++)
        {
            console.log(name[i]);
        } 
    }
}

display(021);
display(["Jay","Yogesh","Jigar","Harsh","vijay"]);