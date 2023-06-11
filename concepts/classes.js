//
// With prototypes
//
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);

maui.print();

//
// With class
//

class Vacation2 {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days.`);
  }
}

const trip = new Vacation2("Santiago, Chile", 7);

trip.print();

//
// Inheritance
//
class Expedition extends Vacation2 {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}
const exp = new Expedition("Iceland", 14, ["passport", "sunglasses"]);

exp.print();
