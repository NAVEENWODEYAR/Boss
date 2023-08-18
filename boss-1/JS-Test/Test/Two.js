let st = 'AB!CD@';
var st1 = "";

for(let i=st.length-1; i>=0; i--)
{
    st1 += st[i];
}
console.log(st);
console.log(st1);

/** 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('welcome'));
*/