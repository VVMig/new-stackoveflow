function time(){
    let time=new Date();
    $('.time_online').html(time.toLocaleTimeString());
}

let time_timer=setInterval(time,10);

let menu=document.querySelector('.content');
let nav=document.querySelectorAll('section');

