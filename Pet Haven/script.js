var buttons = document.querySelectorAll(".btn");
var cards = document.querySelectorAll(".item");
buttons[0].addEventListener("click", function () {
  cards.forEach(function (card) {
    card.style.display = "block";
  });
});

buttons[1].addEventListener("click", function () {
  cards.forEach(function (card) {
    if (card.classList.contains("cat")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

buttons[2].addEventListener("click", function () {
  cards.forEach(function (card) {
    if (card.classList.contains("dog")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

buttons[3].addEventListener("click", function () {
  cards.forEach(function (card) {
    if (card.classList.contains("hamster")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

buttons[4].addEventListener("click", function () {
  cards.forEach(function (card) {
    if (card.classList.contains("others")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
