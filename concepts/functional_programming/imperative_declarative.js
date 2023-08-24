const string = "Restaurants in Hanalei";

//Imperative
let urlFriendlyImp = "";
for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendlyImp += "-";
  } else {
    urlFriendlyImp += string[i];
  }
}
console.log(urlFriendlyImp);

//Declarative
const urlFriendlyDecl = string.replaceAll(" ", "-");
console.log(urlFriendlyDecl);
