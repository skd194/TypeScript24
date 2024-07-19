console.log("******************class decorators***********************")
// depending on where we are applying the decorators 
// the number and type of parameter changes 

// if we are applying to class there will be a single parameter that represent the class constructor function
function Component1(constructor: Function) {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM")
    }
}

@Component1
class ProfileComponent {

}