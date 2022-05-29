// Primitives: number, string, boolean
// More complex types: arrays , objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: String;

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

let course = "React - The Complete Guide";

// course = 12341;
