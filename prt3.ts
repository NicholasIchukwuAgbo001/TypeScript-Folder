class StorageContainer<T> {
    private contents: T[]

    constructor() {
        this.contents = [];
    }

    addItems(item: T): void {
        this.contents.push(item);
    }

    getItems(index: number): T | undefined {
        return this.contents[index]
    }
}

const usernames = new StorageContainer<string>();

usernames.addItems("Niko");
usernames.addItems("Agbo");

console.log(usernames.getItems(0));
