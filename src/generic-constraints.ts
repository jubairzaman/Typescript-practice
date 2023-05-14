
// const addmeinmyCrushMind = <T extends {name : string, age : number,salary: number } > (myInfo: T)=>{
//     const crush = " Totini";
//     const newData = {...myInfo,crush};
//     return newData

// }

// type MyInfoType={
//     name : string;
//     age : number;
//     salary : number;
//     other1: boolean;
// }

// const myInfo = {
//     name : " jubair",
//     age : 24,
//     salary: 0,
//     other1 : true
// }


// const result = addmeinmyCrushMind(myInfo);

// console.log(result);

interface mendatoryType { name : string , age : number , salary : number}



const Addinfo = <T extends mendatoryType> (myinfo: T)=>{
    const crush = " totini";
    const newdata = {...myinfo,crush};
    return newdata;

}

const myinfo = {
    name : " jubair",
    age : 20,
    salary : 100 

}

const result = Addinfo(myinfo);

console.log (result);