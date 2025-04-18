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
    // columnContainer.style.margin = '10px';
    columnContainer.style.flexGrow = 1;

    return(columnContainer)
}
//Generated boxes for the containers
function createBox() {
    const box = document.createElement("div")
    box.style.display = 'flex';
    box.style.backgroundColor = 'black';
    box.style.margin = '5px';
    box.style.flexGrow = 1;
    
    return(box)
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


//Ignore function for now
function boxUpdate(masterContainer, input){
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
boxUpdate(art_box_boundary, 2)

//Next time improve the margins of the boxes to make them all uniform