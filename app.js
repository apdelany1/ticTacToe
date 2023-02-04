let marker = "X";

const mark = document.querySelectorAll(".cell");

mark.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("hello");
    element.textContent = marker;
    if (marker === "X") {
      marker = "O";
    } else {
      marker = "X";
    }
  });
});
