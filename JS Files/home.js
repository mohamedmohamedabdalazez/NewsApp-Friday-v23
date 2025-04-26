

var allItems=[];
var interestNews=new Array();
var countryLinks = document.querySelectorAll('nav li');
var searchInput = document.querySelector('#search');
var dateFrom = document.querySelector('#DateFrom');
var dateTo = document.querySelector('#DateTo');
var editInterests = document.querySelector("#editBtn")


const username = JSON.parse(localStorage.getItem("username"));
console.log(username.name);

const interests = JSON.parse(localStorage.getItem("interestsList"));
console.log(interests);


/*********************************************/
var userData = {
    Name: username.name,
    Interests : interests,
}

var userExists = false;
var user_index;

var storedUserNameAndInterests = JSON.parse(localStorage.getItem("userNameAndInterests"));
var userNameAndInterests = Array.isArray(storedUserNameAndInterests) ? storedUserNameAndInterests : [];

if (userNameAndInterests.length == 0) userNameAndInterests.push(userData);
else{
    for(var i=0; i<userNameAndInterests.length; i++){
        if(userData.Name == userNameAndInterests[i].Name){
            console.log("userData is already added to the list");
            user_index = i;
            userExists = true;
            userNameAndInterests[i].Interests = interests;
            break;
        }
    }
    if(!userExists){
        console.log("New UserData will be added");
        userNameAndInterests.push(userData);
    }
}    

console.log(userNameAndInterests);

localStorage.setItem("userNameAndInterests", JSON.stringify(userNameAndInterests));
var newUserData = JSON.parse(localStorage.getItem("userNameAndInterests"));
console.log(newUserData);

/*********************************************/



for( var i=0 ; i<countryLinks.length ;i++)
{
   countryLinks[i].addEventListener('click',function(eventInfo)
   {
       var countryCode = eventInfo.target.getAttribute('Shortcut');
       if(countryCode == "home") getInterests(interests);
       else getNews(countryCode);
      console.log(eventInfo.target);
   })
}

/********************************************************************************/

 function getNews (Title,From,To)
 {

    var myHttp = new XMLHttpRequest();

    if(From != "" && To != "")
    {
       myHttp.open('GET',`https://newsapi.org/v2/everything?q=${Title}&from=${From}&to=${To}&apiKey=9076844f769c4345b673fe113beab7d5`);
       console.log(`https://newsapi.org/v2/everything?q=${Title}&from=${From}&to=${To}&apiKey=9076844f769c4345b673fe113beab7d5`);
    }
    else if(From != "" && To == "")
    {
        myHttp.open('GET',`https://newsapi.org/v2/everything?q=${Title}&from=${From}&apiKey=9076844f769c4345b673fe113beab7d5`);
        console.log(`https://newsapi.org/v2/everything?q=${Title}&from=${From}&apiKey=9076844f769c4345b673fe113beab7d5`);
    }
    else if(From == "" && To != "")
    {
        myHttp.open('GET',`https://newsapi.org/v2/everything?q=${Title}&to=${To}&apiKey=9076844f769c4345b673fe113beab7d5`);
        console.log(`https://newsapi.org/v2/everything?q=${Title}&to=${To}&apiKey=9076844f769c4345b673fe113beab7d5`);
    }
    else
    {
        myHttp.open('GET',`https://newsapi.org/v2/everything?q=${Title}&apiKey=9076844f769c4345b673fe113beab7d5`);
        console.log(`https://newsapi.org/v2/everything?q=${Title}&apiKey=9076844f769c4345b673fe113beab7d5`);
    }
   
    myHttp.send();

    myHttp.addEventListener('readystatechange',function()
    {
        if(myHttp.readyState==4)
        {
           allItems = JSON.parse(myHttp.response).articles;
            displayNews(allItems); 
        }
    });
    
}

function getInterests (ArrayLists)
{
    interestNews = [];
    let counter = 0;
    console.log(interestNews);
    for(var i=0 ; i<ArrayLists.length ; i++)
    {
        const interest = ArrayLists[i]; 
        const myHttp = new XMLHttpRequest();
        console.log(`https://newsapi.org/v2/everything?q=${interest}&apiKey=9076844f769c4345b673fe113beab7d5`);
        myHttp.open('GET',`https://newsapi.org/v2/everything?q=${interest}&apiKey=9076844f769c4345b673fe113beab7d5`);  
        myHttp.send();
        myHttp.addEventListener('readystatechange',function()
        {
            if(myHttp.readyState==4&&myHttp.status==200)
            {
                interestNews = interestNews.concat(JSON.parse(myHttp.response).articles);

                counter++;
                if (counter == ArrayLists.length)
                {
                    console.log(interestNews);
                    displayNews(interestNews); 
                }
            }
        });
    }
}


function displayNews(displayItems)
{
    var box = ``;
    displayItems.sort(function(a,b)
    {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    });
    
    console.log(displayItems.length);
    for(var i=0 ; i < displayItems.length ; i++)
    {
        if(displayItems[i].urlToImage == null || displayItems[i].title == null  ||  displayItems[i].description == null) continue;
        box += `<div class="col-md-3">
                    <div class="item">
                    <img class="w-100" src="${displayItems[i].urlToImage}"/>
                    <h2>${displayItems[i].title}</h2>
                    <p>${displayItems[i].publishedAt}</p>
                    <p>${displayItems[i].description}</p>
                    </div>
                </div>`
    }
    document.getElementById('rowData').innerHTML = box;
}

/**********************************************************************/

if(logOutBtn){
    logOutBtn.onclick = function(){
        localStorage.removeItem(interests);
        storedUserIndex = -1;
        window.location.href = "signUp.html";
    }
}


/***************Animations***************/

var userNameElement = document.querySelector(".UserName");
if (userNameElement && username && username.name) {
    userNameElement.textContent = username.name;
}

var closeBtn = document.querySelector(".close");
var contentMessage = document.querySelector(".contact-message");
var imgContact = document.querySelector(".img");

closeBtn.addEventListener("click", function () {
    contentMessage.style.width = "0";
    contentMessage.style.overflow = "hidden";
    // Hide the user-data element when close button is clicked
    document.querySelector(".user-data").style.opacity = "0";
});

imgContact.addEventListener("click", function () {
    contentMessage.style.width = "250px";
    contentMessage.style.transition = "0.6s ease-in-out";
    // Show the user-data element when image is clicked
    document.querySelector(".user-data").style.opacity = "1";
});



/***************Edit Interersts*************/

editInterests.onclick = function(){
    localStorage.setItem("userIndex", JSON.stringify(user_index));
    var storedUserIndex = JSON.parse(localStorage.getItem("userIndex")??-1);
    console.log(storedUserIndex);

    window.location.href = "interests.html";

    // localStorage.removeItem(storedUserIndex);
}