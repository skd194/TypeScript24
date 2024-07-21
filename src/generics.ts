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

// extending generic classes
interface Product {
    id: number;
    name: string;
}
class Store<T> {
    protected _items: T[] = [];

    add(item: T): void {
        this._items.push(item);
    }

    // -- Keyof operator
    find(property: keyof T, value: unknown): T | undefined {
        return this._items.find(item => item[property] === value);
    }
}

let store: Store<Product> = new Store();
store.add({ id: 1, name: "Book" } as Product)

store.find("id", 1)
store.find('name', "a")
// store.find("nonExistingProperty", 5) // error

// Pass on the generic type parameter 
class CompressibleStore<T> extends Store<T> {
    compress() { };
}

// Restrict the  generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find2(name: string): T | undefined {
        return this._items.find(x => x.name === name);
    }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        if (category === '') {
            return [];
        }
        return [{ id: 1, name: 'abc' } as Product];
    }
}


interface Order {
    name: string,
    price: string,
}

// type mapping
type ReadOnlyOrder = {
    readonly [K in keyof Order]: Order[K]
}

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null
}

type OmitProperty<T, P extends keyof T> = {
    [K in keyof T as Exclude<K, P>]: T[K];
};

let orderWithNameOnly: OmitProperty<Order, 'price'> = { name: 'string' }

