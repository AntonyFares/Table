var text='';
var pluscount;
var nigcount;
function MyFunc(num){
    console.log(num);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1 ; j <= 10 ; j++) {
        text += '<button id="bt'+(i * j % 2)+'"  onclick="MyFunc('+ i * j +')">' + i * j + '</button>';
    }
        text += '<br/>';
}
MyFunc();
document.getElementById('div').innerHTML=text;
function Plus (){
if (i * j % 2){
    nigcount += num;
}
else{
    (num+nigcount);
}
}
document.getElementById('div2').innerHTML=text;