const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 4, 7]);
    reject("Error occured");
  }, 1000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 3)
//       .then((sum) => {
//         console.log(sum);
//         add(sum, 5);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// Promise chaining
add(1, 2)
  .then((sum) => {
    console.log(sum);
    return add(sum, 3);
  })
  .then((sum) => {
    console.log(sum);
  })
  .catch((err) => console.log(err));
