// for()

function Factorial(no)
{
    if(no<=0)
    {
        return 1;
    }
    else{
        return (no*Factorial(no-1))
    }
}

console.log(Factorial(5));
