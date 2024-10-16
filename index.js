const colorInt = document.getElementById("colorInt")
const colorType = document.getElementById("colorType");
const getColorBtn = document.getElementById("btn")
const colorBox = document.getElementById("colorsBox");
const selector = document.querySelectorAll("selector");


getColorBtn.addEventListener("click", function () {
    colorBox.innerHTML = ""
    //Fetch get a promise back as response to to decode it we need to use .then()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInt.value.slice(1)}&mode=${colorType.value}&count=5`)
        
        // Same as fetch .json() returns a promise
      .then((a) => a.json())
        
        // Renders the JSON data
        .then((x) => {
            
            console.log(x)
            console.log(x.colors)
            const a = x.colors

            a.forEach(color => {
                console.log(color.hex.value)
                const newDiv = document.createElement('div')
                const value = document.createElement("p")
                colorBox.appendChild(newDiv)
                newDiv.appendChild(value)
                value.textContent = `${color.hex.value}`;
                value.classList.add("selector")
                newDiv.style.backgroundColor = `${color.hex.value}`;
            });
        });
})


