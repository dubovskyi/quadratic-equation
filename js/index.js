const a = prompt('Введіть (A)');
const b = prompt('Введіть (B)');
const c = prompt('Введіть (С)');

document.write(quadraticEq(a,b,c));
function quadraticEq(a, b, c) {
 const d =discriminant(a,b,c);

if (d < 0) {
    return "Error d<0"
}
 
if (d > 0) {
   let x1 = (-b - Math.sqrt(d)) / 2 * a;
   let x2 = (-b + Math.sqrt(d)) / 2 * a;
}
if (d===0) {
    let x1 = -b/2*a;
    return "x="+x1;
}
    {
    return "x1="+x1+" x2="+x2+"" ;
}
 function discriminant(a,b,c) {
    let result=b*b-4*a*c;
    return result;
}
