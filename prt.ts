let id: number = 5;
let myName: string = "Nicholas";
let isGood: boolean = true;
let ids: number[] = [2, 4, 6, 8, 9, 2];
let x: any = 3;
let xArray: any[] = ["niko", 0, true];

console.log("id:", id);
console.log("myName:", myName);
console.log("isGood:", isGood);
console.log("ids:", ids);
console.log("x:", x);
console.log("xArray:", xArray);

const concatenateValue = (a: number, b: number) => {
    return a + b;
}

console.log(concatenateValue(5, 10))


interface UserInterface {
    name: string;
    age?: number;
    occupation: string
}

const User: UserInterface = {
    name: "Niko",
    age: 25,
    occupation: "Developer",
}

if(!User.age){
    console.log("Age is not defined");
}else{
    console.log(User.age)
}

type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
    console.log("ID: ",id);
}

printID("1234")
printID(2)
