let gridSize = 10;
let clicked = false;
const grid = document.getElementById("grid");
grid.addEventListener('mousedown', function changeClicked(){
    clicked = true;
})

for(let i = 0; i < gridSize*gridSize; i++){
    const el = document.createElement("div");
    let x = 100/gridSize;
    el.style.width = `${x}%`;
    el.style.height = `${x}%`;
    el.style.background = "red";
    const get = document.getElementById("grid");
    get.appendChild(el);
    el.addEventListener('click', function changeColor(){
        el.style.background = "white";    
    });
    el.addEventListener('mouseover', function changeColor(){
        if(clicked === true){
            el.style.background = "white";
        }
    });
}

grid.addEventListener('mouseup', function changeClicked(){
    clicked = false;
})