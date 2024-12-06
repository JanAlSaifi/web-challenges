import { createServer } from "node:http";
import { Chance } from "chance";
// export const server = …

const chance = new Chance();
const name = chance.name();
const profession = chance.profession();
const age = chance.age();

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});
