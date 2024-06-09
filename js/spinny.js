var logoDiv, mainContent, postElements; 
const isMobile = navigator.userAgentData.mobile; //resolves true/false;

window.addEventListener("load", function() 
{
    console.log("Hello, World!");
    logoDiv = document.getElementById("logoDiv");
    mainContent = document.querySelectorAll(".mainContent section.row");
    postElements = document.querySelectorAll("section.row div");
});


window.addEventListener("resize", function()
{
    if (this.window.innerWidth <= 750 || isMobile)
    {
        logoDiv.style.display = "none";
        for (var i = 0; i < mainContent.length; i++)
        {
            mainContent[i].style.display = "block";
        }
        for (var i = 0; i < postElements.length; i++)
        {
            postElements[i].style.width = "100%";
        }
        for (var i = 0; i < mainContent.length; i++)
        {
            if (mainContent[i].firstChild.nextElementSibling.className == "column1")
            {
                mainContent[i].insertBefore(mainContent[i].lastChild, mainContent[i].firstChild);
            }
        }
    }   
    else if (this.window.outerWidth > 750 && !isMobile)
    {
        logoDiv.style.display = "block";
        for (var i = 0; i < mainContent.length; i++)
        {
            mainContent[i].style.display = "flex";
        }
        for (var i = 0; i < postElements.length; i++)
        {
            postElements[i].style.width = "50%";
        }
        for (var i = 0; i < mainContent.length; i++)
        {
            if (mainContent[i].firstChild.nextElementSibling.className == "" && i%2 == 1)
            {
                mainContent[i].insertBefore(mainContent[i].lastChild, mainContent[i].firstChild);
            }
        }
    }
})

window.addEventListener("click", function()
{
    //console.log(postElements);
    /*for (var i = 0; i < mainContent.length; i++)
    {
        console.log(mainContent[i].firstChild.nextElementSibling);
    }*/
    //console.log(mainContent);
})