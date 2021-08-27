class MJ{
    constructor(){
        //first creating two div elements in the body.
        this.dmaj = document.createElement('div');   //major
        this.dmin = document.createElement('div');   //minor
        //appending the Major and Minor to Body
        
        this.config = {
            'follow':{
                'status':true,
                'type':'classic', //classic text image button
            },
            'animation':{
                'status':true,
                'events':{'hover':true,'click':true,'drag':true,},
            },            
        }

        this.follow_classic_config = {
            'visibility' : {
                'dmaj':true,
                'dmin':true,
                'cursor':true
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
                    'width':0,
                    'radius':50,
                    'color':'#ccc'
                },
                'dmin':{
                    'type':'none',
                    'width':0,
                    'radius':50,
                    'color':'#ccc'

                }
            },

            'color':{
                'dmaj':{
                    'background':'teal'
                },
                'dmin':{
                    'background':'coral' 
                }
            },

            'backdropfilter':{
                'dmaj':'none',
                'dmin':'none'
            },
            'animation':{
                //default animations are def-(rotate, buzz)
                'name':'def-rotate',
                'duration':'1s',
                'delay':'',
                'iteration-count':'',
                'direction':'',
                'timing-function':'',
                'fill-mode':''
            }
        }

        this.follow_image_config = {
            'visibility' : {
                'dmaj':true,
                'dmin':true,
                'cursor':true
            },
            'image':{
                'url':'',
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

    default(){
        this.dmaj.classList.add('dmaj');
        this.dmin.classList.add('dmin');    
        
        document.getElementsByTagName('body')[0].appendChild(this.dmaj);
        document.getElementsByTagName('body')[0].appendChild(this.dmin);
        //now depending upon the main config we will find out wether user wants classic floowers or else.
        if(this.config['follow']['status']){
            //that means user wants divs  to follow cursor.
            let addclasses = '';
            switch(this.config['follow']['type']){
                case 'classic':
                    console.log('Classic');
                    //adding its unique class
                    addclasses = 'default-mouse-js-property-for-follow-classic';
                    //calling specific funtions.
                    this.followClassic();
                    break;
                case 'text':
                    console.log('Text');
                    break;
                case 'button':
                    console.log('Button');
                    break;
                case 'image':
                    console.log('Image');
                    break;
                default:
                    console.error(this.config['follow']['type']+' not recognised : main config follow type ivalid \n Supported types (classic, text, button, image)');                        
            }
            console.log(addclasses);
            this.dmaj.classList.add(addclasses);
            this.dmin.classList.add(addclasses);    
        
        }
    }
    //Follow Engine...
    moveDss(e){
    // e.clientY;
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

    followClassic(){
        //this method sets value of css properties.
        this.revVisibility();    //revise all
        this.revDimension();
        this.revBorder();
        this.revBackground();
    
    }

    revVisibility(elem=-1){
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









