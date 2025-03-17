let projectName = document.getElementById("project-name");
let projectDescription = document.getElementById("project-description");
let projectLinks = document.getElementById("project-links");
let projectGrid = document.getElementById("project-grid");



let urlData = window.location.href.split('?')[1];

document.title = urlData;

    getProjectData(urlData).then((result)=>{
    projectName.innerHTML = result.name;
    projectDescription.innerHTML = result.description;
    projectLinks.innerHTML = result.links;
    
    if(result.links.length <= 0){
        projectLinks.parentElement.remove();
    }

    for (let i = 0; i < result.content.length; i++) {
        
        let contentWrapper = document.createElement('div');
        contentWrapper.className = 'content-wrapper';
        projectGrid.appendChild(contentWrapper);
        
        let contentURL = result.content[i].url;
        let image = document.createElement(result.content[i].type);
        image.className = 'gallery-media img-frame content ' + result.content[i].type + '-content';
        image.src = contentURL;
        
        document.body.appendChild(image);
        contentWrapper.appendChild(image);
        
        image.onclick= function (){
            SetModal(collection[i].src,result.content[i].type);
        }

        if(result.content[i].type == 'iframe'){
            image.contentWindow.document.onclick = function () {
                SetModal(collection[i].src,result.content[i].type);
            };
        }
    }
    
});

async function getProjectData(id){
    let response = await fetch("Data/ProjectDataJson.json");

    if(response.ok){
        let jsonText = await response.json();

        console.log(jsonText.projectArray.length);

        for (let i = 0; i < jsonText.projectArray.length; i++) {
            if(jsonText.projectArray[i].id == id){
                return jsonText.projectArray[i];
            }
        }
        
        return jsonText;
    }
}

function OpenPage(url){
    window.open(url)
}