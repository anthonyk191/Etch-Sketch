//margins for a box is always 5px
//gap can also be 5px?
//boxes are always evenly divided column and rows
//1 = 1 row 1 column
//3 = 3 rows 3 columns...etc

// function generateBoxes(input) {

// }
//Generates containers for the main drawing art boundary
function createContainer() {
    let columnContainer = document.createElement("div");
    columnContainer.style.display = 'flex';
    columnContainer.style.flexDirection = "column";
    columnContainer.style.backgroundColor = 'white';
    columnContainer.style.flexGrow = 1;
    columnContainer.style.alignContent = 'center';

    return(columnContainer)
}
//Generated boxes for the containers
function createBox() {
    const box = document.createElement("div")
    box.style.display = 'flex';
    box.style.backgroundColor = 'black';
    // box.style.margin = '3px'; //Disable not necessary 
    box.style.flexGrow = 1;
    box.style.backgroundColor = randomColor()
    
    return(box);
}

//fitting boxes into containers based on number
function fitBoxes(container, quantity){
    for (let i = 0; i < quantity; i++){
        container.appendChild(createBox())
    }
}

//Generates a container filled with boxes. Input value correlates with number of boxes in container
function generateFilledContainer(quantity){
    container = createContainer()
    fitBoxes(container, quantity);
    return (container)
}


//Master Function for generating all boxes on the drawing grid
function boxUpdate(masterContainer, input){
    
    //Limits how many drawing spaces can be made to avoid user overloading program
    if (input > 100) {
        input = 100;
    }
    
    if (masterContainer) {
        for (let i = 0; i < input; i++){
            masterContainer.appendChild(generateFilledContainer(input))
        }
    }
    else{
        console.error("No entity found");
    }
}

let art_box_boundary = document.querySelector(".art_box_boundaries")

//Generate random color function
function randomColor(){
    let letters = '0123456789ABCDEF'
    let color = '#'
    
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return(color)
}

boxUpdate(art_box_boundary, 30)