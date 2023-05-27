class Persons {

    private name : String ;
    private age : number ;
    

    constructor ( name : string , age : number ){
        this.name = name ;
        this. age = age ;
    }

    public getDetails (){
        return ` Name : ${this.name} , Age ${this.age}`;
    }

}


class Student extends Persons {
    private grade : number ;

    constructor ( name : string , age : number, grade : number){
        super(name,age)
        this.grade = grade;
        
    }

    public getGrade (){
        return `Students Grade ${this.grade}`
    }

}