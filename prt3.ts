class StorageContainer<T> {
    private contents: T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(index: number): T | undefined {
        return this.contents[index];
    }

    getAll(): T[] {
        return [...this.contents]; 
    }
}

const usernames = new StorageContainer<string>();
usernames.addItem("Nicholas");
usernames.addItem("Ichukwu");
console.log("First username:", usernames.getItem(0));
console.log("All usernames:", usernames.getAll());

const numbers = new StorageContainer<number>();
numbers.addItem(10);
numbers.addItem(20);
console.log("First number:", numbers.getItem(0));
console.log("All numbers:", numbers.getAll());

interface Product {
    id: number;
    name: string;
}

const products = new StorageContainer<Product>();
products.addItem({ id: 1, name: "Laptop" });
products.addItem({ id: 2, name: "Phone" });
console.log("First product:", products.getItem(0));
console.log("All products:", products.getAll());
