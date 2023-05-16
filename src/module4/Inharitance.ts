class parentClass {
    name : string;
    age : number ;
    address : string;

    constructor (name : string, age : number, address: string){
        this.name= name ;
        this.age= age;
        this.address = address;
    }

    makeSleep(hour: number ):string {
        return `this ${name} Will Sleep for ${hour}`;

    }



}




class Students extends parentClass {
    constructor (name : string , age : number , address : string){
        super ( name , age , address);
    }
    
}

class teacher {
     name : string ;
     age : number;
     address : string ;
    designation : string;

     constructor (name : string , age : number , adderss : string , designation : string){
        this.name = name ;
        this.age = age ;
        this .address = adderss;
        this .designation = designation ;


     }
     makeSleep(hour: number ):string {
        return `this ${this.name} Will Sleep for ${hour}`;

    };

    takeClasses (classes : number): string{
        return `this ${this.name} take ${classes} classes`

    }

     
}