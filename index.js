const inputbox=document.getElementById("inputbox");
const generate=document.getElementById("generate");
const copy=document.getElementById("copyy");
const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*()_{[}]";
const allchar=uppercase+lowercase+symbols+numbers;
const length=12;
function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
while(length>password.length){
    password+=allchar[Math.floor(Math.random()*allchar.length)];
}
inputbox.value=password;
}
function copypassword(){
    inputbox.select();
    document.execCommand("copy");
}