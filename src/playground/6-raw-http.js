const http = require("http"); //use https for https url
const apiKey = "6637c8d7a2df469dea2117ded3eaec77";
const unit = "f"; // m s
const zipcode = "philly";

const weatherUrl = `http://a1pi.weatherstack.com/current?access_key=${apiKey}&query=${zipcode}&units=${unit}`;

const request = http.request(weatherUrl, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    console.log(chunk);
    data += chunk.toString();
  });

  response.on("end", () => {
    console.log(data);
  });
});

request.on("error", (error) => {
  console.log("Error occurred: --> ", error);
});
request.end();
