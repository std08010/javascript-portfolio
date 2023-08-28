const template = "hh:mm:ss tt";

//"replace" is a pure function and returns a new string
const clockTime = template.replace("hh", "03").replace("mm", "33").replace("ss", "33").replace("tt", "PM");

console.log(clockTime);
