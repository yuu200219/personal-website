const toggle = document.querySelector('.theme-mode')
const body = document.querySelector('body')
const topSection = document.querySelector('.top-section')
const titlePage = document.querySelector('.title-page')
const workPage = document.querySelector('.work-page')

toggle.onclick = function() {
    toggle.classList.toggle('dark-mode')
    body.classList.toggle('dark-background')
    topSection.classList.toggle('dark-top-section')
    titlePage.classList.toggle('dark-titlePage')
    workPage.classList.toggle('dark-workPage')
}