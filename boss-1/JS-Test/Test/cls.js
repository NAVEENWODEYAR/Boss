class Test
{
     cName = 'Boss';
    getMsg()
        {
            console.log(this.cName);
        }
}
var a = new Test();
console.log(a);
console.log(a.getMsg);
console.log(a.getMsg());