const element =document.getElementById("main");
element.remove("main");

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Maria is the champion!"; 

document.body.append(newHeader);



