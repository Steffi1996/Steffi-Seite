const häkel_card = document.getElementById("häkeln");
const hunde_card = document.getElementById("hunde");
const kochen_card = document.getElementById("kochen");
const backen_card = document.getElementById("backen");

const hobby_img_container_häkeln = document.getElementById("hobby-img-container__häkeln")
const hobby_img_container_hunde = document.getElementById("hobby-img-container__hunde")
const hobby_img_container_kochen = document.getElementById("hobby-img-container__kochen")
const hobby_img_container_backen = document.getElementById("hobby-img-container__backen")

const hobby_hunde_img_div_txt1 = document.getElementById("hobby-hunde-img_div-txt1")
const hobby_hunde_img_div_txt2 = document.getElementById("hobby-hunde-img_div-txt2")
const hobby_hunde_img02 = document.getElementById("hobby-hunde-img02")
const hobby_hunde_img03 = document.getElementById("hobby-hunde-img03")


//Funktion Häkel Card öffnen und Bilder anzeigen 
häkel_card.addEventListener("click", function () {

    if (hobby_img_container_häkeln.style.display = "none") {
        hobby_img_container_häkeln.style.display = "flex"
        hobby_img_container_hunde.style.display = "none"
        hobby_img_container_kochen.style.display = "none"
        hobby_img_container_backen.style.display = "none"
    } else {
        hobby_img_container_häkeln.style.display = "none"
    }

}, false)

//Funktion Hunde Card öffnen und Bilder anzeigen 
hunde_card.addEventListener("click", function () {

    if (hobby_img_container_hunde.style.display = "none") {
        hobby_img_container_hunde.style.display = "flex"
        hobby_img_container_häkeln.style.display = "none"
        hobby_img_container_kochen.style.display = "none"
        hobby_img_container_backen.style.display = "none"
    } else {
        hobby_img_container_hunde.style.display = "none"
    }

}, false)

//"hover" für Beauty und Coco porträs EINSCHALTEN 
hobby_hunde_img02.addEventListener("mouseover", function () {
    hobby_hunde_img_div_txt1.style.display = "block"
}, false)

hobby_hunde_img03.addEventListener("mouseover", function () {
    hobby_hunde_img_div_txt2.style.display = "block"
}, false)

//"hover" für Beauty und Coco porträs AUSSCHALTEN 
hobby_hunde_img_div_txt1.addEventListener("mouseleave", function () {
    hobby_hunde_img_div_txt1.style.display = "none"
}, false)

hobby_hunde_img_div_txt2.addEventListener("mouseleave", function () {
    hobby_hunde_img_div_txt2.style.display = "none"
}, false)


//Funktion Kochen Card öffnen und Bilder anzeigen 
kochen_card.addEventListener("click", function () {

    if (hobby_img_container_kochen.style.display = "none") {
        hobby_img_container_kochen.style.display = "flex"
        hobby_img_container_hunde.style.display = "none"
        hobby_img_container_häkeln.style.display = "none"
        hobby_img_container_backen.style.display = "none"
    } else {
        hobby_img_container_häkeln.style.display = "none"
    }

}, false)

//Funktion Backen Card öffnen und Bilder anzeigen 
backen_card.addEventListener("click", function () {

    if (hobby_img_container_backen.style.display = "none") {
        hobby_img_container_backen.style.display = "flex"
        hobby_img_container_hunde.style.display = "none"
        hobby_img_container_häkeln.style.display = "none"
        hobby_img_container_kochen.style.display = "none"
    }

}, false)