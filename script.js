m = new MJ();
m.lol();

document.addEventListener('mousemove',function(event){
    // Engine to move along with.
    m.movementEngine(event)
    console.log(event)
});

document.getElementsByClassName('def-sec')[4].addEventListener('mouseenter',function(){
    // 
    m.drawClassic();
})
document.getElementsByClassName('def-sec')[4].addEventListener('mouseleave',function(){
    // 
    m.undrawClassic();
})

document.getElementsByClassName('def-sec')[3].addEventListener('mouseenter',function(){
    // 
    m.drawImage('images/1.jpg');
})
document.getElementsByClassName('def-sec')[3].addEventListener('mouseleave',function(){
    // 
    m.undrawImage();
})


document.getElementsByClassName('def-sec')[5].addEventListener('mouseenter',function(){
    // 
    m.drawImage('images/4.jpg');
})
document.getElementsByClassName('def-sec')[5].addEventListener('mouseleave',function(){
    // 
    m.undrawImage();
})