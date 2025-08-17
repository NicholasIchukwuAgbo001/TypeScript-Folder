"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageContainer {
    contents;
    constructor() {
        this.contents = [];
    }
    addItems(item) {
        this.contents.push(item);
    }
    getItems(index) {
        return this.contents[index];
    }
}
const usernames = new StorageContainer();
usernames.addItems("Niko");
usernames.addItems("Agbo");
console.log(usernames.getItems(0));
//# sourceMappingURL=prt3.js.map