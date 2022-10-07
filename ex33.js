//crear un reloj que actualice la hora a cada segundo, solo utilizar el objeto date para conseguir la hora
 
//utilizando date siempre (prueba sin respetar el ejercicio)

function watchDate () { 
    setInterval(() => { 
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000)

    
}

watchDate();


//respetando el ejercicio

class Watch { 

    constructor(){
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds =this.date.getSeconds();
    }

    refresh(seconds){

        this.seconds += seconds; 

        //seconds
        if(this.seconds >= 60){
            this.minutes++;
            this.seconds = 0; 
        }

        //minutes
        if(this.minutes >= 60){ 
            this.hours++;
            this.minutes = 0; 
        }

        //hours
        if(this.hours >= 24){ 
            this.hours = 0; 
        }
        
    }

    show(){
        this.refresh(1); 
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    start(){
        setInterval(() => {
            this.show;
        }, 1000);
    }

}

let myWatch = new Watch(); 

myWatch.start();