
const container = document.querySelector("#container")
let btn= document.querySelector("button")

function createGrid(n){
    for(let row=0; row<n; row++){
        for(let column=0; column<n; column++){
            let div1=document.createElement("div")
            div1.classList.add("grid")
            div1.style.background="pink"
            container.appendChild(div1)

        }
    }
}
createGrid(24);

container.addEventListener('mouseover',handleHover);
function handleHover(e){
    e.target.style.background ="red"
    createGrid(24);
}
btn.addEventListener('click', function clear(e){
    let gridSquares= e.target.btn;
    gridSquares= prompt("Please enter the number of squares per side for a new grid");
    if(gridSquares>=1 && gridSquares<=100){
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild); // removes all grid squares
        }
        createGrid(gridSquares);
    } else {
        alert ('Choose a number between 1-100'); 
    }
    
})
function clearGrid(){
    location.reload();
} 