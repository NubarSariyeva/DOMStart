alert()
const text = document.querySelector("#text");
const color = document.querySelector("#color");
const section = document.querySelector("#list")
const h1 = document.createElement("h1")
 
function addArr() {
    section.appendChild(h1)
    if (text.value.trim() != "") {
        console.log(text.value);
        h1.innerHTML = text.value;
        h1.style.color = color.value;
        text.value ="";
       
    }
}


