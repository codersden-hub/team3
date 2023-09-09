'use strict'

const science = document.querySelector('.science')
const music = document.querySelector('.music')
const general = document.querySelector('.general-class')
const sports = document.querySelector('.sport-class')
const history = document.querySelector('.history-class')
const computer = document.querySelector('.computer-class')

//Displaying welcome user on landing page 

const userEmail = sessionStorage.getItem('userEmail')
if(userEmail){

    //remove @gmail.com
    const name = userEmail.split('@')[0]
    const welcomeMessage = document.querySelector('.welcome')
    welcomeMessage.textContent = `Welcome, ${name}!`;

}

science.addEventListener('click', function(){
    window.location.href = "./science/sciencemodal.html";
})

music.addEventListener('click', function(){
    window.location.href = "./music/musicmodal.html";
})

general.addEventListener('click', function(){
    window.location.href = "../general/generalmodal.html";
    
})


sports.addEventListener('click', function(){
    window.location.href = "../sports/sportsmodal.html";
})

history.addEventListener('click', function(){

    window.location.href = "./history/historymodal.html";
})

computer.addEventListener('click', function(){
    window.location.href = "./computer/computermodal.html";
})


