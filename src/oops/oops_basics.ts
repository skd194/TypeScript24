export function OopsBasics() {

    class Account {
        // -- readonly property
        // readonly id: number;
        // owner: string;
        // -- private access modifier
        // private _balance: number;
        // -optional property
        private _nickname?: string

        // constructor(id: number, owner: string, balance: number) {
        //     this.id = id;
        //     this.owner = owner;
        //     this._balance = balance;
        // }

        // Parameter Properties
        constructor(
            public readonly id: number,
            public owner: string,
            private _balance: number) {

        }

        deposit(amount: number): void {
            if (amount <= 0) {
                throw new Error("Invalid amount");
            }
            this._balance += amount;
        }

        get balance(): number {
            return this._balance;
        }

        set nickname(nickname: string) {
            this._nickname = nickname;
        }

        printNickname() {
            console.log(this._nickname);
        }
    }

    let account = new Account(1, "John", 10);
    account.deposit(15);
    console.log(account);

    // type of account
    console.log(typeof account);

    // instance of account 
    console.log(account instanceof Account)

    // getter method 
    console.log(account.balance);

    // setter method
    account.nickname = "Johnny"
    console.log(account.nickname);

    // -- Index signature property
    class SeatAssignment {
        // S1, S2, S3... -> John, Smith, Bond...

        // -- Index signature property
        [seatNumber: string]: string
    }

    let seats = new SeatAssignment();
    seats.S1 = 'John';
    seats.S2 = "Smith";
    seats.S3 = 'Bond';


    // -- Static Members
    class Ride {
        private static _activeRides: number = 0;

        start() { Ride._activeRides++; }
        stop() { Ride._activeRides--; }

        static get activeRides() {
            return Ride._activeRides;
        }
    }

    let ride1 = new Ride();
    ride1.start();

    let ride2 = new Ride();
    ride2.start();

    console.log("Active rides: ", Ride.activeRides);

}