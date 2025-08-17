"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let myName = "Nicholas";
let isGood = true;
let ids = [2, 4, 6, 8, 9, 2];
let x = 3;
let xArray = ["niko", 0, true];
console.log("id:", id);
console.log("myName:", myName);
console.log("isGood:", isGood);
console.log("ids:", ids);
console.log("x:", x);
console.log("xArray:", xArray);
const concatenateValue = (a, b) => {
    return a + b;
};
console.log("Concatenated Value:", concatenateValue(5, 10));
const User = {
    name: "Niko",
    age: 25,
    occupation: "Developer",
};
if (!User.age) {
    console.log("Age is not defined");
}
else {
    console.log("User Age:", User.age);
}
const printID = (id) => {
    console.log("ID:", id);
};
printID("1234");
printID(2);
const signContract = (employee) => {
    console.log("Contract signed with:", employee.name, "at", employee.address, "with ID", employee.id, "and email", employee.email);
};
const employee = {
    name: "Nicholas",
    address: "12 Main St",
    id: 101,
    email: "nicholas@gmail.com",
};
signContract(employee);
//# sourceMappingURL=prt.js.map