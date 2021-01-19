

function toggleText(status)
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("toggleButton");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Less";
      moreText.style.display = "inline";
    }
/*    if (document.getElementById("toggleButton").innerHTML == "More") {
        //document.getElementById("textArea").innerHTML=text;
        document.getElementById("textArea").style.visibility="visible";
        document.getElementById("toggleButton").innerText = "Less";
    } else if (document.getElementById("toggleButton").innerHTML == "Less") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "More";
    }
*/
}
