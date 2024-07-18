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

// type alias
type User = {
    readonly id: number,
    name: string,
    displayName: (moduleId: number) => void
}

// Union types
function celsiusToKelvin(temperature: number | string): number {
    // Narrowing
    if (typeof temperature === 'number') {
        return temperature + 273
    }
    return parseInt(temperature) + 273
}


// Intersection Types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag() { },
    resize() { },
}

// literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100

type Metric = 'cm' | 'm'

// optional chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// Optional Property access operator
console.log(customer?.birthday?.getFullYear())

// Optional element access operator 
// Customer?.[0]

// Optional call 
let log: any = null;
log?.('logContent')

// Nullish Coalescing operator
let speed = null;
let velocity = speed ?? 0;

// Type Assertions
let phone1 = document.getElementById('phone') as HTMLInputElement;
// or 
let phone2 = <HTMLInputElement>document.getElementById('phone');
// no casting happens here like other languages like C#, just informing the compiler 
// that this expression is of the specified type, which inturn bring the right intellisense

phone1.value;
phone2.value;

// unknown
function render(document: unknown) {
    // Narrowing
    if (typeof document === 'string') {
        document.toLowerCase();
    }
    if (document instanceof HTMLInputElement) {
        console.log(document.value)
    }
    // document.move();
    // document.fly();
    // document.something();
}

// Use unknown instead of any type bcz the compiler forces us to do some type checking
// to make sure the methods we are calling exists in the target object. 
// -------------


// never
function processEvents(): never {
    throw new Error("error")
    // while (true) {

    // }
}

processEvents();
console.log("hello")