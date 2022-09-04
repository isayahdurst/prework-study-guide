const topics = ["HTML", "CSS", "Git", "JavaScript"];

const randomTopic = topics[Math.floor(Math.random() * topics.length)];

// function selectTopic() {
//   if (topics === "HTML") {
//     console.log("Let's Study HTML!");
//   } else if (topics === "CSS") {
//     console.log("Let's study CSS!");
//   } else if (topics === "Git") {
//     console.log("Let's study Git!");
//   } else if (topics === "JavaScript") {
//     console.log("Let's study JavaScript");
//   } else {
//     console.log("Please try again.");
//   }
// }

function listTopic() {
  for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}

const selectTopic = function () {
  if (randomTopic === "HTML") {
    console.log("Let's Study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  }
};
console.log("Here are the topics we learned through pre-work:");
listTopic();
console.log("Which topic should we study today?");
selectTopic();
