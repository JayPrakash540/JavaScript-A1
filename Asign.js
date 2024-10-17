// #QUESTION(1)............................................................
function AddTwooNumbers(){
    const A = ("Enetr the value of A");
    const B = ("Enetr the value of B");
    const sum = A + B;
    console.log(sum);
}
AddTwooNumbers();


// #QUESTION(2).......................................................

A = 5;
B = 3;
if (A<10 && B<10){
    console.log(true);
}else{
    console.log(false);
}

// #QUESTION(3).--------------------------------------------------------------

num1 = 12;
num2 = 27;
//if both are divisible by 10 console true]]]]

if((num1,num2)%10){
    console.log(true);

}else{
    console.log(false);
}

//if both are not divisible by 10 console false]]]]]

if ((num1 , num2)%10 != 0){
    console.log(true);
}else{
    console.log(false);
}

// if one of them only is divisible by 10 console true]]]]]]

if((num1 % 10 == 0) || (num2 % 10 ==0)){
    console.log(true);
}else{
    console.log(false);
}

//  #QUESTION(4)..........................................................................
// Find the first number of a number

const N = 4567;
const First_Digit = String(N)[0];
console.log(First_Digit)

///........................................


// # QUESTION(5)...........................................
// Find the last digit of a number

const n = 4567;
const Last_Digit = String(n)[3];
console.log(Last_Digit);

const n1 = 4567;
for (i=0;i<n1[i];i++){
    console.log(n1[i]);
}

//  # QUESTION(6)..........................................
//find remainder

let a = 2;
let b = 9;
let Find_Remainder = (b % a);
console.log(Find_Remainder);


//  # QUESTION(7).......................................

let A = 2;
let B = 5;
let Multiply_Two_Numbers = (A * B);
console.log(Multiply_Two_Numbers);

