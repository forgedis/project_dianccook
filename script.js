//selecting all elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
const scrollGraphics = document.getElementById("scrollGraphics")
const scrollPhoto = document.getElementById("scrollPhoto")
const scrollArt = document.getElementById("scrollArt")

const filterItems = (filterName) => {
    filterImg.forEach((image)=>{
        let filterImages = image.getAttribute("data-lightbox");
        if((filterImages == filterName) || filterName == "all"){
            image.classList.remove("hide");
            image.classList.add("show");
        }else {
            image.classList.add("hide");
            image.classList.remove("show");
        }
     });
}

const goToService = (filterName) => () => {
    const portfolio = document.getElementById("portfolio")
    const selectedFilter = document.querySelector(`[data-lightbox-filter="${filterName}"]`)
    filterItem.querySelector(".active").classList.remove("active");
    selectedFilter.classList.add("active")
    filterItems(filterName)
    portfolio.scrollIntoView()
}

window.onload = ()=>{ //once window loaded
    scrollGraphics.addEventListener("click", goToService("graphics"))
    scrollPhoto.addEventListener("click", goToService("photography"))
    scrollArt.addEventListener("click", goToService("paintings"))

     filterItem.onclick = (selectedItem)=>{
         if(selectedItem.target.classList.contains("item")){
             filterItem.querySelector(".active").classList.remove("active");
             selectedItem.target.classList.add("active");
             let filterName = selectedItem.target.getAttribute("data-lightbox-filter");
             filterItems(filterName)
         }
     }
}

const lightbox = document.getElementById('lightbox')
const lightboxBackdrop = document.getElementById('lightboxBackdrop')
const lightboxClose = document.getElementById('lightboxClose')
const allClickableImages = document.querySelectorAll('[data-lightbox]');
const lightboxImage = document.getElementById('lightboxImage')
const lightboxCategory = document.getElementById('lightboxCategory')

const closeLightBox = () => {
    lightbox.classList.toggle('lightbox--show')
    document.querySelector("body").style.overflow = "initial";
    document.querySelector("body").style.pointerEvents = "initial";
}

lightboxClose.addEventListener('click', closeLightBox)
lightboxBackdrop.addEventListener('click', closeLightBox)

for (let i = 0; i < allClickableImages.length; i++) {
  const img = allClickableImages[i]
  const category = img.getAttribute('data-lightbox')
  img.addEventListener('click', () => {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.pointerEvents = "none";
    lightboxImage.src = img.querySelector("img").src
    lightboxImage.alt = img.querySelector("img").alt
    lightboxCategory.innerText = category
    lightbox.classList.toggle('lightbox--show')
  })
}

document.addEventListener('keypress', (e) => {
    console.log("press", e.code)
    if (e.code === 'Escape' && lightbox.classList.contains('lightbox--show')) {
        closeLightBox()
    }
})


