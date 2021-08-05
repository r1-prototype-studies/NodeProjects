const book = {
  title: "Narnia",
  author: "C.S. Lewis",
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const data = JSON.parse(bookJSON);
console.log(data.author);
