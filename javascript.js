//margins for a box is always 5px
//gap can also be 5px?
//boxes are always evenly divided column and rows
//1 = 1 row 1 column
//3 = 3 rows 3 columns...etc

// function generateBoxes(input) {

// }

let art_box_boundary = document.querySelector(".art_box_boundaries")
if (art_box_boundary) {

    const box = document.createElement("div")
    box.style.display = 'flex';
    box.style.backgroundColor = 'black';
    box.style.margin = '5px';
    box.style.flexGrow = 1;
    
    art_box_boundary.appendChild(box);
}
else{
    console.error("No entity found");
}
