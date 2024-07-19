// -- generic class
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) { }
}
let pair = new KeyValuePair(1, "abc");

// -- generic method
class ArrayUtils {
    static warpInArray<T>(value: T): T[] {
        return [value]
    }
}
ArrayUtils.warpInArray(1);

// generic interface 
interface Result<T> {
    data: T | null;
    error: string | null;
}

interface User {
    name: string;
}

interface Product {
    title: string;
}

function fetch<T extends User | string>(url: string): Result<T> {
    if (url == null) {
        throw new Error("Not implemented");
    }
    return { data: null, error: null };
}

let result = fetch<User>("url");
console.log(result.data?.name);


function echo<T extends { name: string }>(value: T) {
    return value;
}

echo({ name: "a" });