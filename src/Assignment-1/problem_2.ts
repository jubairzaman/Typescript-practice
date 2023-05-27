interface personProfile {
    name : string ,
    age : number 
}

function persons ( person : personProfile[]):personProfile[]{

    return person.filter((person)=>person.age >=18);



}

const person :personProfile[]= [
    { name : 'jubair' , age : 20},
    { name : 'jubair' , age : 20},
    { name : 'jubair' , age : 20}
];


const result6 = persons(person);

console.log(result6);