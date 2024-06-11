// challenge 1

let a = 10;
let b = "20";
let c = 80;


console.log(++a + +b++ + +c++ - +a++);
console.log(11  +  20  +  80  -  11);


/*

[++a]

value: 11 
explain: pre increment

[+]
explain: add operator

[+b++]
value: 20
explain: (+): to change string to number,
         (b++): post increment,
          it will be print befor increment,
          it will be 21 in the next operation

[+c++]
value:80
explain: (+): Does not affect because it is allready a number,
         (c++): post increment,
         it will be 81 in the next operation

[-]
explain: subtraction operator

[+a++]
value: 11
explain: (+): Does not affect because it allready number,
         (a++): post increment,
          it will be 12 in the next operation


*/




console.log(++a + -b  + +c++ - -a++ + +a);
console.log(13  + -21 +  81  -  -13  + 14)
 
/*

[++a]
value: 13
explain: pre increment, and it was 12 in the previous operation

[+]
explain: add operator

[-b]
value: -21
explain: (-): change it to negative number,
          and it was 21 in the previous operation

[+]
explain: add operator

[+c++]
value: 81
explain: (+): Does not affect because it is allready a number,
         (c++): post increment, and it was 81 in the previous operation
         it will be 82 in the next operation

[-]
explain: subtraction operator

[-a++]
value: -13
explain: (-): change it to negative number,
          and it was 31 in the previous operation
          (a++): post increment,
          it will be 14 in the next operation

[+]
explain: add operator

[+a]
value: 14
explain: (+): Does not affect because it is allready a number,
          (a): it was 14 in the previous operation 

*/



console.log(--c + +b + --a * +b++ - +b *  a  + --a - +true);
console.log( 81 + 21 + 13  *  21  - 22 *  13 +  12 -  1);

/*
[--c]
value:81
explain: pre decrement, and it was 82 in the previous operation

[+]
explain: add operator

[+b]
value: 21
explain: (+): change it to number,
          and it was 21 in the previous operation

[+]
explain: add operator

[--a]
value: 13
explain: pre decrement, and it was 14 in the previous operation

[*]
explain: multiplication operator

[+b++]
value: 21
explain: (+): change string to number,
         (b++): post increment,
          and it was 21 in the previous operation
          it will be 22 in the next operation

[-]
explain: subtraction operator

[+b]
value: 22
explain: (+): change it to number,
          and it was 22 in the previous operation

[*]
explain: multiplication operator

[a]
value: 13
explain: it was 13 in the previous operation

[+]
explain: add operator

[--a]
value: 12
explain: pre decrement, and it was 13 in the previous operation

[-]
explain: subtraction operator

[+true]
value:  1
explain: (+): Does not affect because true value = 1




*/

// challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;


console.log(-d * +e); //2000

console.log(++e * ++g  +  ++f + -d  ); //173

