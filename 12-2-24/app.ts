

let num: number = 10;
let message: string = "Hello Angular";
let isDone: boolean = true;

// Function with type annotation

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2,3));





// ------------- interface --------------

interface Person {
  name: string;
  age: number;
  greet(): string;
}

let user: Person = {
  name: "Sarvagna",
  age: 20,
  greet: () => `Hello, my name is ${user.name}`
};

console.log(user.greet());


// / --------------classes --------------


class Car {
  private brand: string;
  private model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  getDetails(): string {
    return `Car: ${this.brand} ${this.model}`;
  }
}

let myCar = new Car("Mercedez", "Benz");
console.log(myCar.getDetails());



// name space ---------------------


namespace Geometry {
  export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
  }
}

console.log(Geometry.areaOfCircle(5)); 
export{};


// ------------------- module ---------


import{ad} from "./math";
console.log(ad(5,10));
