// key of guard 


type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {


    if (param1 == " number" && param2 == " number") {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString()
    }
}




//   console.log (add('2','1'),
//   add(1,2))


// in Guard 


type normalUser = {
    name: string;
}

type adminUser = {
    name: string;
    role : "Admin";
};


 function getuser ( user : normalUser| adminUser){
    if ('role' in user){
         return ` I am An ${user.role}`
    }else { 
        return 'I am a normal usre'
    }
 }


 const userinfo: normalUser={ name : 'jubairzaman'};
 const admininfo : adminUser ={ name : 'Admin Vai', role: 'Admin'}

console.log( getuser(userinfo), getuser(admininfo));


// instance of guard 


class Animale {
    name : string ;
    species : string;

    constructor(name : string , species : string){

        this.name = name ;
        this.species = species;  

    }

    makeSound (){
        console.log('I am making sounds')
    }

}


class dog extends Animale {

    constructor (name : string , species : string){
        super(name , species );
    }

    makeBark(){
        console.log( 'i am barking ');
    }

}
class cat extends Animale {

    constructor (name : string , species : string){
        super(name , species );
    }

    makeMeaw (){
        console.log('I Am Meawing');
    }
}


function getAnimel (obj: Animale ){
    if (obj instanceof dog){
        obj.makeBark();
    }
    else if(obj instanceof cat){
        obj.makeMeaw();
    }
}

const animel1 = new dog ('German Bhai', 'dog');
const animel2 = new cat ( 'persian' , 'cat');


