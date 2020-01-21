function add(...no:number[])
{
    console.log(no);
    var i;
    var sum:number=0;
    // sum=0;
    for(i=0;i<no.length;i++)
    {
        console.log(no[i]);
        sum=sum+no[i];
    }
    var a = "Sum : "+sum;
    return a;
}

console.log(add(1,2,3,4,5));