

document.getElementById("button").onclick = function(){
    var ContactName = document.getElementById("Input").value;

    if (
        ContactName === "Mufasa" ||
        ContactName === "mufasa" ||
        ContactName === "Mufasa🦁" ||
        ContactName === "Mufasa🦁💗" ||
        ContactName === "mufasa🦁" ||
        ContactName === "mufasa🦁💗"
    ) {
        document.getElementById("MainText").innerHTML = "Correct! Redirecting you to the Main Page...";
        setTimeout(function() {
            window.location.replace("/ForHer/HomePage/HomePage.html")
        },3000);
    } else {
        document.getElementById("MainText").innerHTML = "Wrong. Access has been denied, Try again.";
    }
}
