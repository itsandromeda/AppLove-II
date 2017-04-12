/*global console, document, showSlides*/
var items = [{
    path: "assets/img/img-0.jpg",
    alt: "Tayman",
    caption: "Tayman Brochure"
}, {
    path: "assets/img/img-1.jpg",
    alt: "Kerala",
    caption: "Kerala Bottle"
}, {
    path: "assets/img/img-2.jpg",
    alt: "The Brass Coq",
    caption: "The Brass Coq Menu"
}, {
    path: "assets/img/img-3.jpg",
    alt: "Sungenre",
    caption: "Sungenre Vinyl Record"
}, {
    path: "assets/img/img-4.jpg",
    alt: "Mitragyna Speciosa Bag",
    caption: "Mitragyna Speciosa"
}, {
    path: "assets/img/img-5.jpg",
    alt: "Foam King Packaging",
    caption: "Foam King"
}, {
    path: "assets/img/img-6.jpg",
    alt: "Volition",
    caption: "Volition Website"
}, {
    path: "assets/img/img-7.jpg",
    alt: "Owls & Apples",
    caption: "Owls & Apples Website"
}, {
    path: "assets/img/img-8.jpg",
    alt: "Sherwood",
    caption: "Sherwood Website"
}];

function printItems(path, caption, alt, i) {
    "use strict";
    var items = document.getElementById("items"),
        parent = document.createElement("figure"),
        img = document.createElement("img"),
        captionText = document.createTextNode(caption),
        figcaption = document.createElement("figcaption"),
        /*MODALS*/
        modalContainer = document.getElementById("modal"),
        modalImg = document.createElement("img"),
        modals = document.createElement("figure");
    
    img.classList.add("item");
    img.setAttribute("id", "img-" + i);
    img.setAttribute("name", i);
    img.setAttribute("src", path);
    img.setAttribute("alt", alt);
    figcaption.appendChild(captionText);
    figcaption.classList.add("text-uppercase");
    parent.classList.add("items-list");
    parent.appendChild(img);
    parent.appendChild(figcaption);
    items.appendChild(parent);
    
    
    modals.setAttribute("id", "modal-img-" + i);
    modalImg.setAttribute("name", i);
    modalImg.classList.add("modal-pictures");
    modalImg.setAttribute("src", path);
    modals.appendChild(modalImg);
    modalContainer.appendChild(modals);
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

var modal = document.getElementById('modal'),
    slideIndex = 1,
    src,
    id;

var modalDisplay = function () {
    "use strict";
    modal.style.display = "block";
    modal.style.opacity = 1;
};

var  currentSlide = function (n) {
    "use strict";
    showSlides(slideIndex = parseInt((n), 10));
};
var trigger = function () {
    "use strict";
    modalDisplay();
    currentSlide(this.name);
};

for (i = 0; i < photos.length; i += 1) {
    document.getElementById('img-' + i).addEventListener('click', trigger);
}

var close = document.getElementsByClassName("close")[0];

close.addEventListener('click', function () {
    "use strict";
    modal.style.display = "none";
});

var prev = document.getElementById("prev"),
    next = document.getElementById("next");

function showSlides(n) {
    "use strict";
    var i,
        slides = document.getElementsByClassName("modal-pictures");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }

    slides[n].style.display = "block";
}

showSlides(slideIndex);

function plusSlides(n) {
    "use strict";
    showSlides(slideIndex += n);
}


prev.addEventListener("click", function () {
    "use strict";
    plusSlides(-1);
});

next.addEventListener("click", function () {
    "use strict";
    plusSlides(1);
});