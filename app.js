
let preloader = document.querySelector(".preloader")
class UI{
    stopPreloader(){
        preloader.style.display = "none";
    }

}

let ui = new UI


window.addEventListener("load",() => {
    ui.stopPreloader();
  
}
)

let
