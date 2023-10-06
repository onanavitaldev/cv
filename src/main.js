/* By WebByte Agency and ONANA vital */

function mystory()
{
    let storydiv = document.getElementById("content_story").style.visibility = "visible";
    let storydivone = document.getElementById("content_story").style.animation = "fadeInLeft 1s";
}
function mystoryHidden()
{
    let storydivs = document.getElementById("content_story").style.visibility = "hidden";
}

/* Hide or delete load space */
setTimeout(() => {
    document.querySelector('.load').style.display = "none";
}, 2000);