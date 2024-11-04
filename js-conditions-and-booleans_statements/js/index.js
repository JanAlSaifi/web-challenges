console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log(number, " is an even Number.");
} else {
  console.log(number, " is an odd Number.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 100;

if (numberOfHotdogs < 5) {
  console.log("2 Euro per hotdog.");
} else if (numberOfHotdogs < 100) {
  console.log("1.50 Euro per hotdog");
} else if (numberOfHotdogs <= 1000000) {
  console.log("1 euro per hotdog");
} else if (numberOfHotdogs >= 1000000) {
  console.log("0.10 cents per hotdog");
} else {
  console.log("Too much to handle!");
}

// Part 4: Daytime
const currentHour = 16;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = userName !== "" ? "Hello " + userName + "!" : "Hello Coach!";

console.log(greeting);
