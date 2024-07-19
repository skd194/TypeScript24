export function OopsIntermediate() {

    // inheritance
    class Person {
        constructor(public firstName: string, public lastName: string) {
        }
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }
        protected walk() { console.log("walk") }
        talk() { console.log("talk") }
    }

    class Student extends Person {
        constructor(
            public studentId: number,
            firstName: string,
            lastName: string) {
            super(firstName, lastName)
        }
    }

    let student = new Student(1, 'Ram', 'Joy');
    student.talk();
    console.log(student.fullName);

    class Teacher extends Person {
        constructor(public teacherId: number, firstName: string, lastName: string) {
            super(firstName, lastName);
        }
        override get fullName() {
            return 'Prof. ' + super.fullName;
        }
    }

    let teacher = new Teacher(2, 'Robert', 'Sam');
    console.log(teacher.fullName);

    class PersonPrinter {
        static printNames(people: Person[]) {
            for (let person of people) {
                console.log(person.fullName);
            }
        }
    }
    console.log("......print persons....")
    PersonPrinter.printNames([student, teacher]);


    // abstract class 
    abstract class Shape {
        constructor(public color: string) {
        }
        abstract render(): void;
    }

    class Circle extends Shape {
        constructor(public radius: number, color: string) {
            super(color);
        }

        override render(): void {
            console.log("rendering a circle")
        }
    }

    // let shape = new Shape();
    let circle = new Circle(5, 'red');
    circle.render();

    // -- interface 
    interface Calender {
        name: string;
        addEvent(): void;
        removeEvent(): void;
    }

    interface CloudCalender extends Calender {
        sync(): void;
    }

    class GoogleCalender implements CloudCalender {
        name: string = "google calender";

        sync(): void {
            console.log(this.name, "- inside sync")
        }
        addEvent(): void {
            console.log(this.name, "- inside add event")
        }
        removeEvent(): void {
            console.log(this.name, "- inside remove event")
        }
    }

    let calender: Calender = new GoogleCalender();
    calender.addEvent();

}