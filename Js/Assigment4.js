function isprime(number){
    if (number<=1){
        return false;
    }
    if(number%2===0||number%3===0)
    {return true;
    }
}
let intnumber=prompt("enter the postive number:");
let check=parselint("intnumber");
if(isprime(check)){
    console.log(check+"this is not prime number:");

}
else{
    console.log(check+"this is a prime number:");
}