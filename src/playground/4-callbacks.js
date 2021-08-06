setTimeout(() => console.log("2 seconds are up"), 2000);

const geocode = (address, callback) => {
  setTimeout(() => {
    const location = {
      location: address,
      latitude: "8.77",
      longitude: "-12",
    };
    callback(location);
  }, 3000);
};

geocode("philly", (data) => {
  console.log(data);
});

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (firstNum, secondNum, callback) => {
  setTimeout(() => {
    callback(firstNum + secondNum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
