let modal = document.getElementById("mainModal");
let modalImage = document.getElementById("mainModalImage")

const collection = document.getElementsByClassName("gallerymedia")

console.log(collection.length)

for (let i = 0; i < collection.length; i++){
    collection[i].onclick= function (){
        modal.style.display = "block";
        SetModal(collection[i].src)
    }
}

function SetModal(imgsrc){
    modalImage.src = imgsrc;
}

const collection2 = document.getElementsByClassName("close")

for (let i = 0; i < collection2.length; i++){
    collection2[i].onclick = function (){
        modal.style.display = "none";
    }
}

/*

onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

function GetMouseDistance(objectPosition,mousePosition)
{
    objectPosition.x
}

 */