let gridSize = 16;
let clicked = false;
const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorpicker");
grid.addEventListener('mousedown', function changeClicked(){
    clicked = true;
})

let color = colorPicker.value;

// colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener('change', function watchColorPicker(){ color = colorPicker.value})

for(let i = 0; i < gridSize*gridSize; i++){
    const el = document.createElement("div");
    let x = 100/gridSize;
    el.style.width = `${x}%`;
    el.style.height = `${x}%`;
    el.style.background = "white";
    const get = document.getElementById("grid");
    get.appendChild(el);
    el.addEventListener('click', function changeColor(){
        el.style.background = color;    
    });
    el.addEventListener('mouseover', function changeColor(){
        if(clicked === true){
            el.style.background = color;
        }
    });
}

grid.addEventListener('mouseup', function changeClicked(){
    clicked = false;
})