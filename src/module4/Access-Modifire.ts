class BankAccount {
    Id: number;
    Name: String;
    Balance: number;


    constructor(Id: number, Name: string, Balance: number) {
        this.Id = Id;
        this.Name = Name;
        this.Balance = Balance;
    }

    myBalance() {
        console.log(`My Balance Is ${this.Balance}`)
    }

    addDiposit(ammount : number){
        this.Balance = this.Balance + ammount ;

    }


    
}



const myAccount = new BankAccount(444, 'Persian', 0);
console.log(myAccount);

