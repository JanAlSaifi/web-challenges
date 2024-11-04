const data = NaN;

switch (typeof data) {
  case "undefined":
    console.log(typeof data, "!");
    break;
  case "number":
    if (Number.isNaN(data)) {
      console.log("NaN !");
    } else {
      console.log("Number!");
    }
    break;
  case "string":
    console.log(typeof data, "!");
    break;
  case "boolean":
    console.log(typeof data, "!");
    break;
  case "function":
    console.log(typeof data, "!");
    break;
  case "object":
    if (data === null) {
      console.log(null, "!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    } else {
      console.log("object !");
    }
    break;
  default:
    console.log("I have no idea!");
}
