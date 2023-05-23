//interface 

interface IVehicle {
   startEngine(): void;
   stopEngine(): void;
   move (): void;
}


class Vehicle implements IVehicle {
    startEngine(): void {
        console.log("Engine Starting");
    }
    stopEngine(): void {
        console.log('Engine Stoping')
    }
    move(): void {
        console.log(" The Car is now moving")
    }

}

//Abstruction Class