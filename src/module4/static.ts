class Counter {    // Class 
   static counter : number = 0 ;  // Variable 

   

    static incriment (): number{   // Method
       return ( Counter.counter = Counter.counter+1);
    }

    static dicriment (): number {  // Method 2 
        
        return (Counter.counter= Counter.counter-1);
    }
}



console.log(Counter.incriment());
console.log(Counter.dicriment());