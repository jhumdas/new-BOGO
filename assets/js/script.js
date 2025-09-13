function handleClickFunction(boxId) {
  // Close all boxes first
  document.querySelectorAll(".bogo-box").forEach((box) => {
    box.style.border = "1px solid #ddd";
    box.style.background = "transparent";
    box.querySelector(".size-color-box-wrap").classList.remove("open");
    box.querySelector('input[type="radio"]').checked = false;
  });

  // Open the clicked one
  const selectedBox = document.getElementById(boxId);
  selectedBox.style.border = "3px solid #FF6B82";
  selectedBox.style.background = "#FFF9FA";
  selectedBox.querySelector('input[type="radio"]').checked = true;
  selectedBox.querySelector(".size-color-box-wrap").classList.add("open");
}
