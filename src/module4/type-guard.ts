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