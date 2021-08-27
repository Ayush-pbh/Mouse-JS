m = new MJ();
m.refreshFollow();

document.addEventListener('mousemove',function(event){
    m.moveDss(event);
    
});


// User will program like this...

document.getElementsByClassName('def-sec')[0].addEventListener('mouseenter',function(){
    m.setBackground('red','dmaj');
    m.setBackground('#111','dmin');    
    m.setDimension([150,150],'dmaj');
    m.setDimension([50,50],'dmin');
    m.addClass('translucent');
});
document.getElementsByClassName('def-sec')[1].addEventListener('mouseenter',function(){
    m.setBackground('seagreen','dmaj');
    m.setBackground('yellow','dmin');
    m.setDimension([100,100],'dmaj');
    m.setDimension([10,10],'dmin');    
    m.removeClass('translucent');
});

document.getElementsByClassName('def-sec')[2].addEventListener('mouseenter',function(){
    m.config['follow']['type']['classic'] = false;
    m.refreshFollow()
});
document.getElementsByClassName('def-sec')[2].addEventListener('mouseleave',function(){
    m.config['follow']['type']['classic'] = true;
    m.refreshFollow()
});