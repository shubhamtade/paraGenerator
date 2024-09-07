const apiKey = "1fb3fbcb43fb42619d428661aa102718";
const apiUrl =
  "https://randommer.io/api/Text/LoremIpsum?loremType=business&type=words";

let inputBox = document.getElementById("userInput");
let outputBox = document.getElementById("output");

function result() {
  try {
    if (inputBox.value !== "") {
      console.log(inputBox.value);
    }
  } catch (error) {
    console.log("error");
  }
}

// Curl

// curl -X 'GET' \
//   'https://randommer.io/api/Text/LoremIpsum?loremType=normal&type=words&number=50' \
//   -H 'accept: */*' \
//   -H 'X-Api-Key: 1fb3fbcb43fb42619d428661aa102718'

// Request URL
// https://randommer.io/api/Text/LoremIpsum?loremType=normal&type=words&number=50

// fetch('https://randommer.io/api/Text/LoremIpsum?loremType=business&type=words&number=50', {
//   headers: {
//     'accept': '*/*',
//     'X-Api-Key': '1fb3fbcb43fb42619d428661aa102718'
//   }
// });
