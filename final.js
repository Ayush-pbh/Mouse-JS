// This is the final version of my MouseJS. If this dosen't work i will abandon this project!
/*
    Requirements -
        1 Classic two circles should follow the mouse 
        2 Images following mouse
        3 Text following mouse
        4 Parallax effect on images and text if wanted
        5 easy to write.

*/


class MJ{
    constructor(){
        this.doWant = {
            'classic':true,
            'image':true,
            'text':false
        }
        this.status = {
            'classic':false,
            'image':false,
            'text':false
        }
        this.dmaj = document.createElement('div')
        this.dmin = document.createElement('div')
        this.img = document.createElement('img')

        //misc variables
        this.classicCallback = 0
        this.imageCallback = 0
        this.imgUrl = 'images/1.jpg'
    }


    lol(){
        if(this.doWant['classic']){
            document.getElementsByTagName('body')[0].appendChild(this.dmaj)
            document.getElementsByTagName('body')[0].appendChild(this.dmin)
            // this.drawClassic()
        }
        if(this.doWant['image']){
            document.getElementsByTagName('body')[0].appendChild(this.img)
            // this.drawImage()
        }
        if(this.doWant['text']){}
    }
    //3 main functionsat the top of 
    drawClassic(){
        //checking if the user intially wanted it or not
        if(!this.doWant['classic']){return}
        //this function draws CLassic circles.
        /*
            It adds two div elements in the body tag. one is dmaj and other in dmin meaning dmajor and dminor respectivly.
            Then it styles them as specified by the user, or by default styling. and hooks it with the movementEngine.
        */
        //Everything to be done
        clearTimeout(this.classicCallback)  //incase we ccome out of the non-follow zone before the callback is executed then we don't need it anymore. It prevents from invalid status values.
        this.status['classic']=true
        //1. Make config to true.
        console.log('Draw')
        //2. Adding two div elements in the body
        this.dmaj.classList.remove('mj-opaque')
        this.dmin.classList.remove('mj-opaque')
        //3. add classes to them...
        this.dmaj.classList.add('mj-dmaj-def')
        this.dmin.classList.add('mj-dmin-def')
        // this.dmaj.classList.add('mj-transition-go-slow')
        //    this.dmaj.classList.add('mj-transition-go-slower')
       
    }
    undrawClassic(){
        //checking if the user intially wanted it or not
        if(!this.doWant['classic']){return}
        //add a fade-out property to the dmaj and dmin
        console.log('Undraw')
        this.dmaj.classList.add('mj-opaque')
        this.dmin.classList.add('mj-opaque')
        this.classicCallback = setTimeout(()=>{
            this.status['classic'] = false
        },700);

    // 
    }
    
    drawImage(url){
        if(url){
            //Agar koi url pass kiya gaya hai to use image ka source bana do
            this.imgUrl = url
        }
        //checking if the user intially wanted it or not
        if(!this.doWant['image']){return}
        //To draw image we will make a div.holder and img elements will be inside it. the number of images and there
        clearTimeout(this.imageCallback)
        this.status['image'] = true
        console.log('Draw Image')
        this.img.classList.remove('mj-opaque')
        this.img.classList.add('mj-img-def')
        this.img.src = this.imgUrl
        //the height width and 
    }
    undrawImage(){
        //checking if the user intially wanted it or not
        if(!this.doWant['image']){return}
        console.log('unDraw Image')
        this.img.classList.add('mj-opaque')
        this.imageCallback = setTimeout(()=>{this.status['image']=false},700)

    }

    drawText(){

    }
    undrawText(){

    }


    addClass(type,name,elem='both'){

    }
    removeClass(type,name,elem='both'){

    }
    movementEngine(event){
        //this function will be called everytime the mousemove event is fired.
        //this function moves Classic/Image/Text with the mouse.
        //we will check for status of each type and according to it we wil process it's respective methods.

        if(this.status['classic'] && this.doWant['classic']){
            //we will use clientX/Y as we have dmaj as position fixed.
            let x = (event.clientX - 50),
                y = (event.clientY - 50);
            this.dmaj.style.transform = 'translate('+x+'px,'+y+'px)'

            x = (event.clientX - 5)
            y = (event.clientY - 5)
            this.dmin.style.transform = 'translate('+x+'px,'+y+'px)'
        }
        if(this.status['image'] && this.doWant['image']){
            let x = (event.clientX - (this.img.width/2)),
                y = (event.clientY - (this.img.height/2));
            this.img.style.transform = 'translate('+x+'px,'+y+'px)'
        }
        if(this.status['text']){}
    }

}