let button=document.querySelector('.get-button')
let theName =document.querySelector('.get-repos input')
let data_area=document.querySelector(".show-data");
//all program will run when the user press on the button
button.onclick=function (){
    showRepos()
}

function showRepos(){
    //user may press on button and dont append name in input
    if(theName.value==""){
        data_area.innerHTML="<span>there is no name to search.</span>";
        console.log("da")
    }
    else{
        fetch(`https://api.github.com/users/${theName.value}/repos`)
        .then((res)=>res.json())
        .then((repo)=>{
            data_area.innerHTML="";
            let reposLength=repo.length
            for(let i=0;i<reposLength;i++){

                //set the main div the carry name div and spans div
                let mainDiv=document.createElement("div");
                mainDiv.className="main-div"

                //set the name div
                let nameDiv=document.createElement("div");
                nameDiv.className="name-div"
                nameDiv.textContent=repo[i].name


                //set the spans div
                let spansDiv=document.createElement("div");
                spansDiv.className="spans-div"

                
                // Create Repo URL Anchor
               let theUrl = document.createElement('a');
               // Create Repo Url Text
               let theUrlText = document.createTextNode("Visit");
               // Append The Repo Url Text To Anchor Tag
               theUrl.appendChild(theUrlText);
               theUrl.href = `https://github.com/${theName.value}/${repo[i].name}`;
               theUrl.setAttribute('target', '_blank');
               theUrl.className="url"


                //second span that carry number of stars
                let sSpan=document.createElement("span");
                sSpan.className="sSpan"
                sSpan.textContent=`${repo[i].stargazers_count} Stars`



                spansDiv.appendChild(sSpan);
                spansDiv.appendChild(theUrl);
                mainDiv.appendChild(nameDiv)
                mainDiv.appendChild(spansDiv)



                data_area.appendChild(mainDiv)
            }
        })
    }
}

