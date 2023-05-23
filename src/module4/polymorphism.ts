class Person{


    TakeName () : void{
        console.log('I am Sleeping 8 Hour Per Day');
    }
}


class Students extends Person {
   TakeName(): void {

    console.log('I am Sleeping 10 Hours Per day')
       
   }
}
class Developers extends Person {
   TakeName(): void {

    console.log('I am Sleeping 5 Hours Per day')
       
   }
}


function getNap( param : Person){
    param.TakeName();
}


const person1 = new Person();
const person2 = new Students();
const person3 = new Developers();


getNap(person1);
getNap(person2);
getNap(person3);

