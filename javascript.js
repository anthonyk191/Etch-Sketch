let paintBrush = "black"
let art_box_boundary = document.querySelector(".ArtBoxBoundaries")
fillMasterContainer(art_box_boundary, 50)

//Button Section
document.getElementById('BlackBtn').onclick = () => {
    paintBrush = "black"
}
document.getElementById('WhiteBtn').onclick = () => {
    paintBrush = "white"
}
document.getElementById('RainbowBtn').onclick = () => {
    paintBrush = "rainbow"
}
document.getElementById('ClearEverythingBtn').onclick = () => {
    fillMasterContainer(art_box_boundary, slider.value)
}
//-----------------------------------------------------------------------
//Mouse Commands: When mouse press down, update square color
const boxes = document.querySelectorAll('.ArtBoxBoundaries > div > div');
let isMouseDown = false;

//Suboptimal Code that is slower for registering mouse down and mouse up events
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

//Updating the slider
var slider = document.querySelector(".Slider");
slider.addEventListener('change', () => {
    fillMasterContainer(art_box_boundary, slider.value)
})


//ALL FUNCTIONS DOWN BELOW
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
            box.style.backgroundColor = paint(paintBrush)
        }
    })
    box.addEventListener("mousedown", () => {
        box.style.backgroundColor = paint(paintBrush)})
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
    masterContainer.innerHTML = '';
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

//Generate black color function
function blackColor() {
    return("#000000")
}

//Generate white color function
function whiteColor() {
    return("#FFFFFF")
}

//Color Manager - Converts 
function paint(paintBrush) {
    switch (paintBrush) {
        case "black":
            return(blackColor()) 
        case "white":
            return(whiteColor())
        case "rainbow":
            return(randomColor())
    }
}

//Future plans consider using document.createDocumentFragment() for optimzation