//Generates containers for the main drawing art boundary
function createContainer() {
    let columnContainer = document.createElement("div");
    columnContainer.style.display = 'flex';
    columnContainer.style.flexDirection = "column";
    columnContainer.style.backgroundColor = 'gray';
    columnContainer.style.flexGrow = 1;
    columnContainer.style.alignContent = 'center';
    columnContainer.style.userSelect = 'none'; //This was the key to all my problems
    return(columnContainer)
}
//Generated boxes for the containers
function createBox() {
    const box = document.createElement("div")
    box.style.display = 'flex';
    box.style.backgroundColor = 'black';
    // box.style.margin = '1px'; //Disable not necessary 
    box.style.flexGrow = 1;
    box.style.backgroundColor = 'white' //Seperate this to another function
    
    //Setting up event listeners per box
    box.addEventListener("mouseenter", () => {
        if (isMouseDown) {
            box.style.backgroundColor = randomColor()
        }
    })
    box.addEventListener("mousedown", () => {
        box.style.backgroundColor = randomColor()})
    return(box);
}

//fitting boxes into containers based on number
function fitBoxes(container, quantity){
    for (let i = 0; i < quantity; i++){
        container.appendChild(createBox())
    }
}

//Generates a container filled with boxes. Input value correlates with number of boxes in container
function generateSubContainer(quantity){
    container = createContainer()
    fitBoxes(container, quantity);
    return (container)
}


//Master Function for generating all boxes on the drawing grid
function fillMasterContainer(masterContainer, input){
    
    //Limits how many drawing spaces can be made to avoid user overloading program
    if (input > 100) {
        input = 100;
    }

    if (masterContainer) {
        for (let i = 0; i < input; i++){
            masterContainer.appendChild(generateSubContainer(input))
        }
    }
    else{
        console.error("No entity found");
    }
}


//Generate random color function
function randomColor(){
    
    let letters = '0123456789ABCDEF'
    let color = '#'
    
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return(color)
}

let art_box_boundary = document.querySelector(".art_box_boundaries")
fillMasterContainer(art_box_boundary, 4)

//-----------------------------------------------------------------------
//Mouse Commands: When mouse press down, update square color
const boxes = document.querySelectorAll('.art_box_boundaries > div > div');
let isMouseDown = false;

// document.addEventListener('mousedown', () => {
//     isMouseDown = true;
//     console.log("mouse down")
// })
// document.addEventListener('mouseup', () => {
//     isMouseDown = false;
//     console.log("mouse up")
// })

art_box_boundary.onmousedown = () => (isMouseDown = true)
art_box_boundary.onmouseup = () => (isMouseDown = false)


//Future plans consider using document.createDocumentFragment() for optimzation