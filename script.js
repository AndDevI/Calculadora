let buttons = document.querySelector(".buttons")
let btn = document.querySelectorAll("span")
let value = document.getElementById("value")
let numberClicked = false

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML === "=") {
      if (numberClicked) {
        value.innerHTML = eval(value.innerHTML)
        numberClicked = false
      }
    } else if (this.innerHTML.trim().toLowerCase() === "clear") {
      value.innerHTML = ""
      numberClicked = false
    } else if (/[0-9]/.test(this.innerHTML)) {
      value.innerHTML += this.innerHTML
      numberClicked = true
    } else {
      if (numberClicked) {
        value.innerHTML += this.innerHTML
        numberClicked = false
      }
    }
  })
}
