// // A type Depentds on another type 

// type a1 = string;
// type a2 = a1 extends string ? string : null;


// // nested conditional type 

// type a3 = undefined;
// type a4 = number;

// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;


// type habibi ={
//     wife1 : string;
//     wife2 : string;
// };

// // we will make a tyoe to check wife1 ase naki ... thakle true naile false 



// type checkProperty <T> = T extends {wife1: string}? true : false

// type checkwife1 = checkProperty<habibi> ;
