console.log("Loading");
/* !!!!!!!! No {'}s allowed in contrib list (at this time) */

const contributors = [
    {
        name: "12vanblart",
        picture: "https://github.com/12vanblart.png",
        caption: "12vanblart, Creator",
        link: "https://github.com/12vanblart"
    }
];

var outputHTML =
    "<hr style='width: 75%; '><h1>Contributors:</h1><p> Extra thanks to the following that took time to help this project! \
    Check them out and let them know you appreciate their efforts!</p >";
for (i = 0; i < contributors.length; i++) {
    outputHTML +=
        "<a style='text-decoration: none' href='" +
        contributors[i].link +
        "' title='" +
        contributors[i].caption.toString() +
        "'> <img src='" +
        contributors[i].picture +
        "' style='width: 50px; height: 50px; border-radius: 50%; background-color: orange'> </img> </a>";
    /** Add a </br> after every 5th picture**/
    if ((i + 1) % 5 == 0) {
        outputHTML += "</br>";
    }
}

console.log(outputHTML);
document.getElementById("contributors").innerHTML = outputHTML;
