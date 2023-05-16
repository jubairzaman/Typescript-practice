const arrayofnumber = [1,2,3];


const arrayOfString = arrayofnumber.map((number)=>number.toString());
console.log(arrayOfString);


type  AreaNumber ={
    height : number;
    width: number ;

}
type A = AreaNumber ["height"]