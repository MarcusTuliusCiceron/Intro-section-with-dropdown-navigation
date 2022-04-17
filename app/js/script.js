const featuresMenu = document.querySelector('.Features_menu')
const featuresBtn = document.querySelector('.Features_link')
const companyMenu = document.querySelector('.Company_menu')
const companyBtn = document.querySelector('.Company_link')

const hamburgerBtn = document.querySelector('.hamburger_btn')
const hamburgerMenu = document.querySelector('.hamburger_menu_overlay')

let featuresOpen = false
let companyOpen = false
let hamburgerOpen = false

featuresBtn.addEventListener("click", ()=>{
    console.log("click feature")
    if (featuresOpen){
        featuresMenu.classList = "header_dropdown_menu Features_menu fadeout"
    }
    else{
        featuresMenu.classList = "header_dropdown_menu Features_menu fadein"
    }
    featuresOpen = !featuresOpen
})

companyBtn.addEventListener("click", ()=>{
    console.log("click company")
    if (companyOpen){
        companyMenu.classList = "header_dropdown_menu Company_menu fadeout"
    }
    else{
        companyMenu.classList = "header_dropdown_menu Company_menu fadein"
    }
    companyOpen = !companyOpen
})

hamburgerBtn.addEventListener("click", ()=>{
    console.log("click")
    if (hamburgerOpen){
        hamburgerBtn.classList = "hamburger_btn toggleout"
        hamburgerMenu.classList = "hamburger_menu_overlay fadeout"
    }
    else
    {
        hamburgerBtn.classList = "hamburger_btn togglein"
        hamburgerMenu.classList = "hamburger_menu_overlay fadein"
    }
    hamburgerOpen = !hamburgerOpen
})