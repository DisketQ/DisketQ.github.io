let modal = document.getElementById("main-modal");
let modalImage = document.getElementById("main-modal-image")

const collection = document.getElementsByClassName("gallery-media")

console.log(collection.length)

for (let i = 0; i < collection.length; i++){
    collection[i].onclick= function (){
        modal.style.display = "flex";
        SetModal(collection[i].src)
    }
}

/*modal*/
function SetModal(imgsrc){
    modalImage.src = imgsrc;
}

modal.onclick = closeModal;
modalImage.onclick = closeModal;

const collection2 = document.getElementsByClassName("close")

for (let i = 0; i < collection2.length; i++){
    collection2[i].onclick = closeModal();
}

function closeModal(){
    modal.style.display = "none";
}

/*

onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

function GetMouseDistance(objectPosition,mousePosition)
{
    objectPosition.x
}

 */