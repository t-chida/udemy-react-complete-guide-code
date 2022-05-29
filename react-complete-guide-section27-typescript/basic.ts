// Primitives: number, string, boolean
// More complex types: arrays , objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let personAny: any;

personAny = {
  name: "Max",
  age: 32,
};

personAny = {
  isEmployee: true,
};

let person: { name: string; age: number };

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

people = [
  {
    name: "Max",
    age: 32,
  },
  {
    name: "Max",
    age: 32,
  },
];

// Type inference

let course: string | number = "React - The Complete Guide";
course = 12341;

type Person = {
  name: string;
  age: number;
};

let personType: Person;

// Functions & types

function add2(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}
