

const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navMobileMenu = document.querySelectorAll("ul .menu");
const themeColors = document.querySelectorAll(".themes span");

const settingSection = document.querySelector(".settings__section");
const themeMenuIcon = document.querySelector(".setting__icon");
const darkLightIcon = document.querySelector(".dark__light__icon");



const scrollUp = document.querySelector(".scroll__up");
const scrollUpArrow = document.querySelector(".scroll__up span");

//LOAD THEME COLORS AUTOMATICALLY
function loadColors(){
    themeColors.forEach( (color,index) => {
            color.style.backgroundColor = themes[index]
    })
    
}
//THEME COLORS

const themes = ["salmon","orange","lightblue","navy","pink"];

themeColors.forEach( (color,index) => {
    color.addEventListener("click", ()=> {
        //settingSection.classList.toggle("show")
        document.body.classList.toggle(themes[index])
        color.classList.toggle("show")
    })
})
loadColors();

//MOBILE MENU
navMobileMenu.forEach( li => {
    li.addEventListener("click", ()=> {
        nav.classList.remove("show")
    })
})



//HAMBURGER MENU
hamburgerMenu.addEventListener("click", ()=> {
    nav.classList.toggle("show")
    window.scrollTo(0,0)
    hamburgerMenu.classList.toggle("show")
})

//THEME ACCORDION MENU
function themeMenu(){
    if( settingSection.classList.contains("show")){
        settingSection.classList.remove("show")
       
    }else {
        settingSection.classList.toggle("show")
    }
    setTimeout(()=> {
        if( settingSection.classList.contains("show")){
            settingSection.classList.remove("show")
           
        }else {
            settingSection.classList.toggle("show")
        }
    },5000)
}
themeMenuIcon.addEventListener("click", themeMenu)


//DARK LIGHT MODE CHANGE
function darkLight(){
    document.body.classList.toggle("light")
}
darkLightIcon.addEventListener("click", darkLight)


//SCROLL UP FLASHING BUTTON
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 500){
        scrollUp.classList.add("show")
        scrollUpArrow.style.top = "-30px";
    }else{
        scrollUp.classList.remove("show")
        scrollUpArrow.style.top = "-1000px";
    }
})

//SCROLL UP TO HOME
scrollUp.addEventListener("click", ()=> {
    window.scrollTo(0,0)
})


