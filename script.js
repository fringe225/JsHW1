let time= new Date().getHours();
let temp = document.querySelector('body');
console.log(time)
if(time>18 || time<10){
    temp.style.backgroundColor='rgb(0,0,0,0.5)';
}else{
    temp.style.backgroundColor='#fff';
}