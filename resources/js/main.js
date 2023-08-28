let addButton = document.querySelector(".add");

addButton.addEventListener("click", function() {
  this.classList.toggle("friends");

  if(this.classList.contains("friends")) {
    this.innerHTML = "Friends";
  } else {
    this.innerHTML = "Add Friend";
  }
})
