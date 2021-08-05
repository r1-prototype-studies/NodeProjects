const square = function (x) {
  return x * x;
};

const arrowSquare = (x) => {
  return x * x;
};

const improvedArrowSquare = (x) => x * x;

console.log(square(2));
console.log(arrowSquare(3));
console.log(improvedArrowSquare(4));

const eventDetail = {
  name: "Birthday party",
  printGuestList: function () {
    console.log(`Guest list for ${this.name}`);
  },
};

const eventDetail1 = {
  name: "Birthday party",
  guestList: ["Adam", "Eve", "Noah"],
  printGuestList() {
    console.log(`Guest list for ${this.name}`);
    //const that = this;
    this.guestList.forEach((guest) => {
      //    console.log(`Guest ${guest} is attending ${that.name}`);
      console.log(`Guest ${guest} is attending ${this.name}`);
    });
  },
};

eventDetail1.printGuestList();
