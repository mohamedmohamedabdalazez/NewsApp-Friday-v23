localStorage.removeItem(interestsList);
var interestsList = [];

var storedList = JSON.parse(localStorage.getItem("userNameAndInterests"));
var storedUserNameAndInterests = Array.isArray(storedList) ? storedList : [];
console.log(storedUserNameAndInterests);



// [EDIT] Update the user's interests inside userList //
var userlist = JSON.parse(localStorage.getItem("userList"));
console.log(userlist);
if (Array.isArray(userlist) && storedUserIndex !== -1) {
    userlist[storedUserIndex].interests = interestsList;
    localStorage.setItem("userList", JSON.stringify(userlist));
}


var storedUserIndex = JSON.parse(localStorage.getItem("userIndex"))?? -1;


//console.log(storedUserNameAndInterests[storedUserIndex].Interests);
console.log(storedUserIndex);


if(storedUserIndex!=-1)
{
    localStorage.removeItem("interestsList");
    var interestsList = [];
    interestsList = storedUserNameAndInterests[storedUserIndex].Interests;
    console.log(interestsList);
}
else
{
    var interestsList = [];    
}


function addInterest()
{
    if(interestsList == null) interestsList = [];
    interestsList.innerHTML = "";
    var interest = document.getElementById("interest").value;
    if(!interest) return;
    interestsList.push(interest);
    console.log(interestsList);
    showList();
    document.querySelector("#interest").value = "";
}



function showList()
{
    var interestsDiv = document.querySelector("#Interests");
    interestsDiv.innerHTML ="";
    var goToWebsiteBtn;

    interestsList.forEach(function(ele, i){
        var interestName = document.createElement("text");
        interestName.innerText = ele;
        interestName.style.padding = "15px";

        var tdiv = document.createElement("div");
        tdiv.style.backgroundColor ="var(--input-color)";
        tdiv.style.padding = "5px";
        tdiv.style.margin = "5px 0";
        tdiv.style.borderRadius = "20px";
        tdiv.style.width = "100%";
        tdiv.style.display = "flex";
        tdiv.style.justifyContent = "space-between";
        tdiv.style.alignItems = "center";
        
     
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "✘";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.margin = "0px 2px";
        deleteBtn.style.border = "none";
        deleteBtn.style.borderRadius ="50%";
        deleteBtn.style.width = "25px";
        deleteBtn.style.height = "25px";
        deleteBtn.style.display = "flex";
        deleteBtn.style.alignItems = "center";
        deleteBtn.style.justifyContent = "center";
        deleteBtn.style.cursor = "pointer"
   
        deleteBtn.onclick = function(){
            interestsList.splice(i,1);
            showList();
        };


        tdiv.appendChild(interestName);
        tdiv.appendChild(deleteBtn);
        interestsDiv.appendChild(tdiv);
    })   

    goToWebsiteBtn = document.createElement("button");
    goToWebsiteBtn.innerHTML = "Go To Website";
    goToWebsiteBtn.style.backgroundColor = "var(--accent-color)";
    goToWebsiteBtn.style.color = "var(--base-color)";
    goToWebsiteBtn.style.border = "none";
    goToWebsiteBtn.style.borderRadius = "1000px";
    goToWebsiteBtn.style.padding = "12px 25px";
    goToWebsiteBtn.style.fontWeight = "600";
    goToWebsiteBtn.style.fontSize = "1rem";
    goToWebsiteBtn.style.textTransform = "uppercase";
    goToWebsiteBtn.style.cursor = "pointer";
    goToWebsiteBtn.style.transition = "background-color 150ms ease";
    goToWebsiteBtn.style.margin = "0";
    goToWebsiteBtn.onclick = function()
    {
        localStorage.removeItem("userIndex");
        interestsList = [];
        window.location.href = "home.html";
    }
    
    interestsDiv.appendChild(goToWebsiteBtn);

    localStorage.setItem("interestsList", JSON.stringify(interestsList));
    console.log(interestsList);
}

   
