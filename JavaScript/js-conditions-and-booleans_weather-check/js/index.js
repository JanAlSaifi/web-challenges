// Change this value to test different "weather" conditions.
const weather = "snowy";

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 1;

switch (weather) {
  case "rainy":
    console.log("It is raining outside, do not forget your umbrella.");
    break;
  case "sunny":
    if (temperature >= 20) {
      console.log("It is sunny and warm");
    } else {
      console.log("It is sunny, but a bit chilly!");
    }
    break;
  case "snowy":
    if (temperature <= 0) {
      console.log("Freezing snow!");
    } else {
      console.log("It is snowing, stay warm!");
    }
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
