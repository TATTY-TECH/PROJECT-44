class Security {

    constructor(){
       this.access1 = createInput("Code1");
       this.access1.position(100,90);
       this.access1.style('background','white');

       this.access2 = createInput("Code2");
       this.access2.position(700,180);
       this.access2.style('background','white');

       this.access3 = createInput("Code3");
       this.access3.position(100,280);
       this.access3.style('background','white');


    }

    display(){

    this.button1.mousePressed(() => {
        if(system.authenticate(accessCode1,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
        }
    });


    }

    
}