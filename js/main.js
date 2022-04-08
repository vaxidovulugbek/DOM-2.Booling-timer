
let elInput = document.querySelector("#input")
let elBtn = document.querySelector("#btn")
let elList = document.querySelector("#list")
// let elList = document.querySelector("#list")

elBtn.addEventListener("click",(e) => {
  e.preventDefault()

  let li = document.createElement("li")
  li.classList = "num-item"
  li.innerHTML = `${elInput.value}`
  elList.appendChild(li)
  console.log(li.textContent);

  let inputvalue = elInput.value
  setInterval(() =>{
    setTimeout(()=> {
      inputvalue --;
          li.textContent = inputvalue;
          if(inputvalue === 0) {
              li.style.display = "none"
          }
      })
  }, 1000);
  elInput.value = ""

})









