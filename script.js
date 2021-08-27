m = new MJ();
m.default();

document.addEventListener('mousemove',function(event){
    m.moveDss(event);
});


// User will program like this...

document.getElementsByClassName('def-sec')[0].addEventListener('mouseenter',function(){
    m.setBackground('red','dmaj');
    m.setBackground('#111','dmin');    
    m.setDimension([400,400],'dmaj');
    m.setDimension([100,100],'dmin');
});
document.getElementsByClassName('def-sec')[1].addEventListener('mouseenter',function(){
    m.setBackground('seagreen','dmaj');
    m.setBackground('yellow','dmin');
    m.setDimension([100,100],'dmaj');
    m.setDimension([10,10],'dmin');    
});
document.getElementsByClassName('def-sec')[3].addEventListener('mouseenter',function(){
    m.setBackground('pink','dmaj');
    m.setBackground('coral','dmin');
    m.setDimension([60,100],'dmaj');
    m.setDimension([10,10],'dmin');  
});
document.getElementsByClassName('def-sec')[4].addEventListener('mouseenter',function(){
    m.setBackground('seagreen','dmaj');
    m.setBackground('yellow','dmin');
    m.setDimension([100,100],'dmaj');
    m.setDimension([10,10],'dmin');  
});
