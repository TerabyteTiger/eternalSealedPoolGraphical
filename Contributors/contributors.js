console.log("Loading");
/* No 's allowed in contrib list (at this time) */
const contributors = [
    {
        name: "12vanblart",
        picture: "https://github.com/12vanblart.png",
        caption: "12vanblart, Maintainer",
        link: "https://github.com/12vanblart"
    }
];
var outputHTML = "";
for (i = 0; i < contributors.length; i++) {
    console.log(contributors[i].caption);
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
document.getElementById("cont").innerHTML = outputHTML;
