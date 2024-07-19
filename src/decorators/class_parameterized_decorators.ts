console.log("****************************parameterized decorators******************************")

interface ComponentOptions {
    selector: string;
}

// Decorator factory 
function Component2(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        }
    }
}

function Pipe(constructor: Function) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}


@Component2({ selector: "#my-element" })
@Pipe
// -- execution order decorator comes as Pipe first then Component2 like f(g(x))
class ProfileComponentP {
}