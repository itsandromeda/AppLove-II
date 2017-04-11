/*global console, document*/
var items = [{
    path: "assets/img/img-1.jpg",
    alt: "Tayman",
    caption: "Tayman Brochure"
}, {
    path: "assets/img/img-2.jpg",
    alt: "Kerala",
    caption: "Kerala Bottle"
}, {
    path: "assets/img/img-3.jpg",
    alt: "The Brass Coq",
    caption: "The Brass Coq Menu"
}, {
    path: "assets/img/img-4.jpg",
    alt: "Sungenre",
    caption: "Sungenre Vinyl Record"
}, {
    path: "assets/img/img-5.jpg",
    alt: "Mitragyna Speciosa Bag",
    caption: "Mitragyna Speciosa"
}, {
    path: "assets/img/img-6.jpg",
    alt: "Foam King Packaging",
    caption: "Foam King"
}, {
    path: "assets/img/img-7.jpg",
    alt: "Volition",
    caption: "Volition Website"
}, {
    path: "assets/img/img-10.jpg",
    alt: "Owls & Apples",
    caption: "Owls & Apples Website"
}, {
    path: "assets/img/img-11.jpg",
    alt: "Sherwood",
    caption: "Sherwood Website"
}];

function printItems(path, caption, alt, i) {
    "use strict";
    var items = document.getElementById("items"),
        parent = document.createElement("figure"),
        img = document.createElement("img"),
        captionText = document.createTextNode(caption),
        figcaption = document.createElement("figcaption");

    img.classList.add("item");
    img.setAttribute("id", "img0" + i);
    img.setAttribute("src", path);
    img.setAttribute("alt", alt);
    figcaption.appendChild(captionText);
    figcaption.classList.add("text-uppercase");
    parent.classList.add("items-list");
    parent.appendChild(img);
    parent.appendChild(figcaption);
    items.appendChild(parent);
}

var i;
var photos = items.map(function (e) {
    "use strict";
    return e.path;
});

var caption = items.map(function (e) {
    "use strict";
    return e.caption;
});

var alt = items.map(function (e) {
    "use strict";
    return e.alt;
});

for (i = 0; i < items.length; i += 1) {
    printItems(photos[i], caption[i], alt[i], i);
}

/*MODAL*/

var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-pic");
var captionText = document.getElementById("caption");

var modalDisplay = function () {
    "use strict";
    modal.style.display = "block";
    modal.style.opacity = 1;
    modalImg.src = this.src;
};

for (i = 0; i < photos.length; i += 1) {
    document.getElementById('img0' + i).addEventListener('click', modalDisplay);
}

var close = document.getElementsByClassName("close")[0];

close.addEventListener('click', function () {
    "use strict";
    modal.style.display = "none";
});