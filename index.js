const generateButton = document.getElementById("generate-button");
const para = document.querySelector("p");

const nameArray = ["Father Christmas", "Willy the goblin", "Big Daddy"];
const places = ["Disney land", "White House", "soup kitchen"];
const moments = [
  "sponteneous combution",
  "turned into a slug and crawled away",
  "melted into a puddle on the sidewalk",
];

function getRandomEle(array) {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
}

function setPara() {
  const UK = document.getElementById("UK");
  const customName = document.getElementById("input").value;
  const randomName = getRandomEle(nameArray);
  const randomPlaces = getRandomEle(places);
  const randomEvent = getRandomEle(moments);
  let degree;
  let weight;
  if (!UK.checked) {
    degree = "fahrenheit";
    weight = "stone";
  } else {
    degree = "centigrade";
    weight = "pound";
  }

  console.log("customName", customName.length);

  let text = `It was 94 ${degree} outside, so ${randomName} went for a walk. When they got to the ${randomPlaces}, they stared in horror for a few moments, then ${randomEvent}. ${
    customName.length > 0 ? customName : "Bob"
  } saw the whole thing, but was not surprised — ${randomName} weighs 300 ${weight}, and it was a hot day`;
  para.innerHTML = text;
}

generateButton.addEventListener("click", () => {
  setTimeout(setPara, 0);
});
