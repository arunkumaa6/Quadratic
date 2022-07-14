// quadratic equation


let a=prompt('enter the 1st value');
console.log('a=',a);
let b=prompt('enter the 2nd value');
console.log('b=',b);
let c=prompt('enter the 3rd value');
console.log('c=',c);

let y;

y=b*b-4*a*c;
console.log(y);

z=Math.sqrt(y);
console.log(z);

x1=(-b+z)/(2*a);
console.log(x1);

x2=(-b-z)/(2*a);
console.log(x2);