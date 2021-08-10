
class MJ {
    constructor(){    
        //first creating two div elements in the body.
        this.dmaj = document.createElement('div');   //major
        this.dmin = document.createElement('div');   //minor
        //appending the Major and Minor to Body
        document.getElementsByTagName('body')[0].appendChild(this.dmaj);
        document.getElementsByTagName('body')[0].appendChild(this.dmin);
        
        this.dmaj.classList.add('default-mouse-js-property-for-div');
        this.dmaj.classList.add('dmaj');
        this.dmin.classList.add('default-mouse-js-property-for-div');    
        this.dmin.classList.add('dmin');    
        this.config = {
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
                    'width':'1px',
                    'radius':50,
                    'color':'#111'
                },
                'dmin':{
                    'type':'none',
                    'width':'2px',
                    'radius':50,
                    'color':'#111'

                }
            },

            'color':{
                'dmaj':{
                    'background':'transparent'
                },
                'dmin':{
                    'background':'#111'
                }
            }

        }

        this.reviseConfig();
        console.log('H');
        // configure the engine...
        

    }
    moveThem(e){
        // e.clientY;
        if(this.config['visibility']['dmaj']){
            this.dmaj.style.transform = 'translate('+(e.clientX - this.config['dimension']['dmaj']['width']/2) + 'px'+','+(e.clientY - this.config['dimension']['dmaj']['height']/2) + 'px'+')';
        }
        if(this.config['visibility']['dmin']){
            this.dmin.style.transform = 'translate('+(e.clientX - this.config['dimension']['dmin']['width']/2) + 'px'+','+(e.clientY - this.config['dimension']['dmin']['height']/2) + 'px'+')';
        }
    }
    reviseConfig() {
        //this method sets value of css properties.
        this.revVisibility();    //revise all
        this.revDimension();
        this.revBorder();
        this.revBackground();
    }

    revVisibility(elem=-1){
        let val = this.config['visibility'];
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
        let val= this.config['dimension'];
        switch(elem){
            case 0:
                if(!this.config['visibility']['dmaj']){break;}
                val = val['dmaj'];
                this.dmaj.style.height = val['height']+'px';
                this.dmaj.style.width = val['width']+'px';
                break;
            case 1:
                if(!this.config['visibility']['dmin']){break;}
                val = val['dmin'];
                this.dmin.style.height = val['height']+'px';
                this.dmin.style.width = val['width']+'px';
                break;
            case -1:
                if(this.config['visibility']['dmaj']){
                    this.dmaj.style.height = val['dmaj']['height']+'px';
                    this.dmaj.style.width = val['dmaj']['width']+'px';
                }
                if(this.config['visibility']['dmin']){
                    this.dmin.style.height = val['dmin']['height']+'px';
                    this.dmin.style.width = val['dmin']['width']+'px';
                }
                break;
        }
    }

    revBorder(elem=-1){
        let val = this.config['border'];
        switch(elem){
            case 0:
                if(!this.config['visibility']['dmaj']){break}
                val = val['dmaj'];
                this.dmaj.style.border = val['type']+' '+val['width']+' '+val['color'];
                this.dmaj.style.borderRadius = val['radius']+'%';
                break;
            case 1:
                if(!this.config['visibility']['dmaj']){break}
                val = val['dmin'];
                this.dmin.style.border = val['type']+' '+val['width']+' '+val['color'];
                this.dmin.style.borderRadius = val['radius']+'%';
                break;
            case -1:
                if(this.config['visibility']['dmaj']){
                    val = val['dmaj'];
                    this.dmaj.style.border = val['type']+' '+val['width']+' '+val['color'];
                    this.dmaj.style.borderRadius = val['radius']+'%';
                }
                if(this.config['visibility']['dmin']){
                    val = this.config['border']['dmin'];
                    this.dmin.style.border = val['type']+' '+val['width']+' '+val['color'];
                    this.dmin.style.borderRadius = val['radius']+'%';
                }
                break;
        }
    }

    revBackground(elem=-1){
        let val = this.config['color'];
        switch(elem){
            case 0:
                if(!this.config['visibility']['dmaj']){break}
                val = val['dmaj'];
                this.dmaj.style.backgroundColor = val['background'];
                break;
            
            case 1:
                if(!this.config['visibility']['dmin']){break}
                val = val['dmin'];
                this.dmaj.style.backgroundColor = val['background'];
                break;
            
            case -1:
                if(this.config['visibility']['dmaj']){
                    val = val['dmaj'];
                    this.dmaj.style.backgroundColor = val['background'];
                }
                if(this.config['visibility']['dmin']){
                    val = this.config['color']['dmin'];
                    this.dmin.style.backgroundColor = val['background'];
                }
                break;
        }
    }
}

// let m;
window.addEventListener('load',function(e){
    var m = new MJ();
    window.addEventListener('mousemove',function(e){
        // e.clientX, e.clientY
        m.moveThem(e);
        
    });
});