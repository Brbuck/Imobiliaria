
const botao = document.querySelector('.toggle')
const menu = document.querySelector('nav')

botao.addEventListener('click', ()=>{
  menu.classList.toggle('showMenu')
})

const nav_imovies = document.querySelector('.nav_imoveis')
const menu_imovies = document.querySelector('.menu_imoveis')
nav_imovies.addEventListener('click', ()=>{
menu_imovies.classList.toggle('showImoveis')
})

const nav_Institucional = document.querySelector('.nav_Institucional')
const menu_Institucional = document.querySelector('.menu_Institucional')
nav_Institucional.addEventListener('click', ()=>{
menu_Institucional.classList.toggle('showInstitucional')
})

const nav_Serviços = document.querySelector('.nav_Serviços')
const menu_Serviços = document.querySelector('.menu_Serviços')
nav_Serviços.addEventListener('click', ()=>{
menu_Serviços.classList.toggle('showServiços')
})

const nav_Login = document.querySelector('.nav_Login')
const menu_Login = document.querySelector('.menu_Login')
nav_Login.addEventListener('click', ()=>{
menu_Login.classList.toggle('showLogin')
})