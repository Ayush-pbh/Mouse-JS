class MJ{
    constructor(){
        //first creating two div elements in the body.
        this.dmaj = document.createElement('div');   //major
        this.dmin = document.createElement('div');   //minor
        this.img = document.createElement('img');
        //appending the Major and Minor to Body
        this.dmaj.classList.add('dmaj');
        this.dmin.classList.add('dmin');    
        this.img.classList.add('mj-img');    
        
        
        
        this.config = {
            'follow':{
                'status':true,
                'type':{
                    'classic':true,
                    'image':true,
                    'text':true,
                } //classic text image button
            }            
        }
        this.follow_classic_config = {
            'visibility' : {
                'dmaj':true,
                'dmin':true,
                'cursor':true
            },
            'destroyed':{
                'dmaj':true,
                'dmin':true
            },
            'dimension':{
                'dmaj':{
                    'height':100,
                    'width':100
                },
                'dmin':{
                    'height':10,
                    'width':10
                }
            },

            'border' : {
                'dmaj':{
                    'type':'solid',
                    'width':1,
                    'radius':50,
                    'color':'#000'
                },
                'dmin':{
                    'type':'none',
                    'width':2,
                    'radius':50,
                    'color':'#ccc'

                }
            },

            'color':{
                'dmaj':{
                    'background':'transparent'
                },
                'dmin':{
                    'background':'#111' 
                }
            },

            'backdropfilter':{
                'dmaj':'none',
                'dmin':'none'
            },
        }
        this.follow_image_config = {
            'visibility' : {
                'img':true,
            },
            'destroyed':true,
            'image':{
                'url':'images/1.jpg',
                'max-height':500,
                'max-width':500,
                'border-radius':0,
                'hold-x':0,     //position of mouse relative to the image.
                'hold-y':0
            }
        }

        this.follow_text_config = {
            'visibility' : {
                'dmaj':true,
                'dmin':true,
                'cursor':true
            },
            'text':{
                'text':'',
                'color':'',
                'size':'',
                'font-family':'',
                'border':'',
                'shadow':'',
                'holdx':0,
                'holdy':0,
                'custom-css':''
            }
        }
        this.follow_button_config = {
            'visibility' : {
                'dmaj':true,
                'dmin':true,
                'cursor':true
            },
            'button':{
                'custom-css':''
            }
        }
        //animation config helps binding predefined/custom animations to the desiered event.
    }
    refreshFollow(){
        //this fucntion refreshes the things following the cursor
        if(this.config['follow']['type']['classic']){
            //Agar Classic Follow Chaiye to upar wali value to true karna hoga...

            this.followClassic()
            console.log("Follow Classic Activated")
            let addclasses = 'default-mouse-js-property-for-follow-classic'
            this.dmaj.classList.add(addclasses);
            this.dmin.classList.add(addclasses);

        }
        if(!this.config['follow']['type']['classic']){this.revVisibility()}



        if(this.config['follow']['type']['image']){
            //Image follow karne ke liye steps
            //1. Image Banao agar pahle se nahi hai to
            //2. Image ki properties set karo config se dekh ke 
            //3. Image ko moveDss se hook kar do

            //1. 
            this.followImage()


        }
        if(!this.config['follow']['type']['image']){}

    }
    followImage(){
        this.revVisibilityImage();
        this.revImageURL();
        this.revDimensionImage();
        this.revBorderImage();
        console.log("Image");
    }
    revImageURL(){
        this.img.src = this.follow_image_config['image']['url'];
        console.log("Changed URL")
    }
    
    revDimensionImage(){
    }
    revBorderImage(){}
    revVisibilityImage(){
        if(this.config['follow']['type']['image']){
            //if image is dead we bring it to life again...
            if(this.follow_image_config['destroyed']){
                //if it is destroyed.. we relive if
                this.make(this.img)
                this.follow_image_config['destroyed'] = false
            }
            if(this.follow_image_config['visibility']['img']){
                //since the image is alive and visible we will add it's visibility css...
                this.img.style.display = 'block'
                this.removeClass('mj-fade-out')

            }
            else{
                setTimeout(0,()=>{this.img.style.display = 'none'})
                this.addClass('mj-fade-out')
            }
        }
        else if(!this.config['follow']['type']['image']){
            //IF IMG IS alive we kill it without mercy...
            this.destroy(this.img)
            this.follow_image_config['destroyed'] = true
        }
    }
    //Follow Engine...
    moveDss(e){
        if(this.config['follow']['type']['classic']){
            if(this.follow_classic_config['destroyed']['dmaj']){this.make(this.dmaj);this.follow_classic_config['destroyed']['dmaj']=false}
            if(this.follow_classic_config['destroyed']['dmin']){this.make(this.dmin);this.follow_classic_config['destroyed']['dmin']=false}
            if(this.follow_classic_config['visibility']['dmaj']){
                let x = ((e.clientX - this.follow_classic_config['dimension']['dmaj']['width']/2) -  this.follow_classic_config['border']['dmaj']['width']) + 'px';
                let y = ((e.clientY - this.follow_classic_config['dimension']['dmaj']['height']/2)-  this.follow_classic_config['border']['dmaj']['width']) + 'px';
    
                this.dmaj.style.transform = 'translate('+x +','+y +')';
            }
    
            if(this.follow_classic_config['visibility']['dmin']){
                let x = ((e.clientX - this.follow_classic_config['dimension']['dmin']['width']/2) -  this.follow_classic_config['border']['dmin']['width']) + 'px';
                let y = ((e.clientY - this.follow_classic_config['dimension']['dmin']['height']/2) -  this.follow_classic_config['border']['dmin']['width']) + 'px';
    
                this.dmin.style.transform = 'translate('+x +','+y +')';
            }
        }

        if(this.config['follow']['type']['image']){
            // if(this.follow_image_config['destroyed']){this.make(this.img);this.follow_image_config['destroyed']=false}
            if(this.follow_image_config['visibility']['img']){
                let x = (e.clientX - (this.img.width/2))
                let y = (e.clientY - (this.img.height/2))

                this.img.style.transform = 'translate('+x+','+y+')';
            }
        }
    }
    addClass(name,elem='both'){
        //this function is used to add classes to the dmaj and dmin or both.
        //these classes can be used to do animations.
        switch(elem){
            case 'both':
                this.dmaj.classList.add(name);
                this.dmin.classList.add(name);
                break
            default:
                elem.classList.add(name);
                break
        }
    }
    removeClass(name,elem='both'){
        //this function is used to remove classes to the dmaj and dmin or both.
        //these classes can be used to undo animations.
        switch(elem){
            case 'both':
                this.dmaj.classList.remove(name);
                this.dmin.classList.remove(name);
                break
            default:
                elem.classList.remove(name)
                break
        }
    }
    //Animation Funcitons ----END---
    followClassic(){
        //this method sets value of css properties.
        this.revVisibility();    //revise all
        this.revDimension();
        this.revBorder();
        this.revBackground();
    }

    revVisibility(elem=-1){
        if(this.config['follow']['type']['classic']){
            let val = this.follow_classic_config['visibility'];
            switch (elem){
                case 0:
                    val = val['dmaj'];
                    this.dmaj.style.display = (val)?'block':'none';
                    break;
                case 1:
                    val = val['dmin'];
                    this.dmin.style.display = (val)?'block':'none';
                    break;
                case 2:
                    val = val['cursor'];
                    document.getElementsByTagName('body')[0].style.cursor=val?'default':'none';
                    break;
                case -1:
                    document.getElementsByTagName('body')[0].style.cursor=val['cursor']?'default':'none';
                    this.dmaj.style.display = (val['dmaj'])?'block':'none';
                    this.dmin.style.display = (val['dmin'])?'block':'none';
                    break;
            }
        }
        else if(!this.config['follow']['type']['classic']){
            //if the user sets usage to false we are killing all the instances...
            this.destroy(this.dmaj)
            this.follow_classic_config['destroyed']['dmaj']=true
            this.destroy(this.dmin)
            this.follow_classic_config['destroyed']['dmin']=true
        }
    }
    destroy(elem){
        setTimeout(0,()=>{document.getElementsByTagName('body')[0].removeChild(elem)});
        this.addClass('mj-fade-out')
    }
    make(elem){
        document.getElementsByTagName('body')[0].appendChild(elem);
        this.removeClass('mj-fade-out')
    }
    revDimension(elem=-1){
        let val= this.follow_classic_config['dimension'];
        switch(elem){
            case 0:
                if(!this.follow_classic_config['visibility']['dmaj']){break;}
                val = val['dmaj'];
                this.dmaj.style.height = val['height']+'px';
                this.dmaj.style.width = val['width']+'px';
                break;
            case 1:
                if(!this.follow_classic_config['visibility']['dmin']){break;}
                val = val['dmin'];
                this.dmin.style.height = val['height']+'px';
                this.dmin.style.width = val['width']+'px';
                break;
            case -1:
                if(this.follow_classic_config['visibility']['dmaj']){
                    this.dmaj.style.height = val['dmaj']['height']+'px';
                    this.dmaj.style.width = val['dmaj']['width']+'px';
                }
                if(this.follow_classic_config['visibility']['dmin']){
                    this.dmin.style.height = val['dmin']['height']+'px';
                    this.dmin.style.width = val['dmin']['width']+'px';
                }
                break;
        }
    }

    revBorder(elem=-1){
        let val = this.follow_classic_config['border'];
        switch(elem){
            case 0:
                if(!this.follow_classic_config['visibility']['dmaj']){break}
                val = val['dmaj'];
                this.dmaj.style.border = val['type']+' '+val['width']+'px '+val['color'];
                this.dmaj.style.borderRadius = val['radius']+'%';
                break;
            case 1:
                if(!this.follow_classic_config['visibility']['dmaj']){break}
                val = val['dmin'];
                this.dmin.style.border = val['type']+' '+val['width']+'px '+val['color'];
                this.dmin.style.borderRadius = val['radius']+'%';
                break;
            case -1:
                if(this.follow_classic_config['visibility']['dmaj']){
                    val = val['dmaj'];
                    this.dmaj.style.border = val['type']+' '+val['width']+'px '+val['color'];
                    this.dmaj.style.borderRadius = val['radius']+'%';
                }
                if(this.follow_classic_config['visibility']['dmin']){
                    val = this.follow_classic_config['border']['dmin'];
                    this.dmin.style.border = val['type']+' '+val['width']+'px '+val['color'];
                    this.dmin.style.borderRadius = val['radius']+'%';
                }
                break;
        }
    }

    revBackground(elem=-1){
        let val = this.follow_classic_config['color'];
        switch(elem){
            case 0:
                if(!this.follow_classic_config['visibility']['dmaj']){break}
                val = val['dmaj'];
                this.dmaj.style.backgroundColor = val['background'];
                break;
            
            case 1:
                if(!this.follow_classic_config['visibility']['dmin']){break}
                val = val['dmin'];
                this.dmin.style.backgroundColor = val['background'];
                break;
            
            case -1:
                if(this.follow_classic_config['visibility']['dmaj']){
                    val = val['dmaj'];
                    this.dmaj.style.backgroundColor = val['background'];
                }
                if(this.follow_classic_config['visibility']['dmin']){
                    val = this.follow_classic_config['color']['dmin'];
                    this.dmin.style.backgroundColor = val['background'];
                    console.log("HEylola")
                }
                break;
        }
    }
    //User setters funcitons
    setDMAJDimension(height,width){
        this.follow_classic_config['dimension']['dmaj']['height'] = height;
        this.follow_classic_config['dimension']['dmaj']['width'] = width;
        this.revDimension(0);
    }
    setDMINDimension(height,width){
        this.follow_classic_config['dimension']['dmin']['height'] = height;
        this.follow_classic_config['dimension']['dmin']['width'] = width;
        this.revDimension(1);
    }

    //Universal Setters
    setBackground(color,elem='both'){
        switch (elem) {
            case 'dmaj':
                this.follow_classic_config['color']['dmaj']['background'] = color;
                this.revBackground(0);
                break;
            case 'dmin':
                this.follow_classic_config['color']['dmin']['background'] = color;
                this.revBackground(1);
                break;
            
            default:
                this.follow_classic_config['color']['dmaj']['background'] = color;
                this.follow_classic_config['color']['dmin']['background'] = color;
                this.revBackground(-1);
                break;
        }
    }

    setDimension(dimen , elem='both'){
        //dimen = {height , width}
        switch (elem) {
            case 'dmaj':
                this.follow_classic_config['dimension']['dmaj']['height'] = dimen[0];
                this.follow_classic_config['dimension']['dmaj']['width'] = dimen[1];
                this.revDimension(0);
                break;
        
            case 'dmin':
                this.follow_classic_config['dimension']['dmin']['height'] = dimen[0];
                this.follow_classic_config['dimension']['dmin']['width'] = dimen[1];
                this.revDimension(1);
                break;
        
            default:
                this.follow_classic_config['dimension']['dmaj']['height'] = dimen[0];
                this.follow_classic_config['dimension']['dmaj']['width'] = dimen[1];
                this.follow_classic_config['dimension']['dmin']['height'] = dimen[0];
                this.follow_classic_config['dimension']['dmin']['width'] = dimen[1];
                this.revDimension();
                break;
        }
    }
}









