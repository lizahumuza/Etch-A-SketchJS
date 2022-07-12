
const container = document.querySelector("#container")
let btn= document.querySelector("button")


window.onload = createGrid(16);
function createGrid(n){
    for(let row=0; row<n; row++){
        for(let column=0; column<n; column++){
            let div1=document.createElement("div")
            div1.classList.add("grid")
            div1.style.background="pink"
            div1.style.width=`${960/n}px`;
            div1.style.height=`${960/n}px`;
            container.appendChild(div1)

        }
    }
}

container.addEventListener('mouseover',handleHover);
function handleHover(e){
    e.target.style.background ="red"
    createGrid();
}

btn.addEventListener('click', function clear(e){
    let gridSquares= prompt("Please enter the number of squares per side for a new grid");
    if(gridSquares>=1 && gridSquares<=100){
        //while (container.hasChildNodes()) {
            //container.removeChild(container.lastChild); // removes all grid squares
        //}
        reset(container);
        createGrid(gridSquares);
    } else {
        alert ('Choose a number between 1-100'); 
    }
    
})
function reset(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
