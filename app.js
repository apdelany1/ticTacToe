let marker = "X";

const mark = document.querySelectorAll(".cell");

mark.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("hello");
    if (element.textContent === "") {
      element.textContent = marker;
      if (marker === "X") {
        marker = "O";
      } else {
        marker = "X";
      }
    }

  });
});
