const apiKey = "1fb3fbcb43fb42619d428661aa102718";
const apiUrl =
  "https://randommer.io/api/Text/LoremIpsum?loremType=business&type=words&number=";

let inputBox = document.getElementById("userInput");
let outputBox = document.getElementById("output");
let addResult = document.getElementById("container");

async function result() {
  try {
    if (inputBox.value !== "") {
      const URL = apiUrl + inputBox.value;
      const response = await fetch(URL, {
        headers: {
          accept: "*/*",
          "X-Api-Key": apiKey,
        },
      });

      if (response.ok) {
        const loremData = await response.json();

        // console.log(loremData);

        let item = document.createElement("p");
        item.textContent = loremData;
        item.id = "output";
        addResult.appendChild(item);
      } else {
        throw new Error(`Response status: ${response.status}`);
      }
    } else {
      throw new Error("Please enter number of word you want to generate.");
    }
  } catch (error) {
    alert(error.message);
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
