const CODE = "X234"
console.log("hello world" + CODE);

let empName: string = "John Doe";
let salary: number = 123_456_789;
let hasJoined = false;

let avoidUsingAny: any;
avoidUsingAny = 1;
avoidUsingAny = "456";

function getEmployee(id: number) {
}

let numbers: number[] = [1, 2, 3]

numbers.forEach(n => console.log(n.toString()))

// fixed length array 
let employee: [number, string] = [1, "John"]

// this one is a gap/issue in the TS now
employee.push(15);


// Enums 
enum Size1 {
    Small = 1,
    Medium = 2,
    Large = 3
}

// adding const optimize the JS code generated, check the JS code in both the cases
const enum Size2 {
    Small = 1,
    Medium = 2,
    Large = 3
}

let mySize1: Size1 = Size1.Medium;

let mySize2: Size2 = Size2.Medium;

// functions
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear > 2026) {
        return 0;
    }
    if (income > 5_00_000) {
        return income * 5 / 100;
    }
    return 0;
}

// objects - optional, readonly, 

let user: { readonly id: number, name?: string, displayName: (moduleId: number) => void } = {
    id: 1,
    displayName(moduleId: number) {
        if (moduleId == 5) {
            console.log("John")
        } else {
            console.log(this.name)
        }
    }
}
user.name = 'Davis';

let d = { id: 'number' }


