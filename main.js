const linkSection = document.querySelector('.linkSection')
const hideBack = document.querySelector('.hideBack')
const menuLogo = document.querySelector('.menuLogo')
const menuClose = document.querySelector('.menuClose')

menuLogo.addEventListener('click', ()=>{
    linkSection.style.display = 'flex'
    hideBack.style.display = 'block'
})

menuClose.addEventListener('click', ()=>{
    linkSection.style.display = 'none'
    hideBack.style.display = 'none'
})