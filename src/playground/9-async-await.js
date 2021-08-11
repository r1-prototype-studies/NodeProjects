const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject(new Error("Numbers must be non-negative"));
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  let sum = await add(1, 2);
  sum = await add(sum, 3);
  sum = await add(sum, -1);
  return sum;
};

// console.log(doWork());
doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
