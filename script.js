console.log("yoooo")

let i = 0;
let text = "Feminism means believing in equality of all genders, of all colours and of all origins. It's not about hating men, nor thinking that women are better. It's simply all about equality. As  Chimamanda Ngozi Adichie quoted: 'Feminist: the person who believes in the social, political and economic equality of the sexes.' The way we dress nowadays as men, women and everything in between has not always been this way. Feminist waves has played a huge role in changing fashion to how it is currently. On this website you will see explanations about these different waves and how that has changed the fashion industry. hopefully you'll get involved, interested or inspired." 
let speed = 30; //duration of the effect in milliseconds

function typeWriter() {
    if (i < text.length){ 
        let intro = document.querySelector("#intro");
        if(intro != null){
        intro.textContent += text.charAt(i); //the value that was already there stays, it adds the new ones to it
        i++;
        setTimeout(typeWriter, speed);
        }
    }
}
typeWriter()
// bron: w3schools: https://www.w3schools.com/howto/howto_js_typewriter.asp 

let currentElement = 0;
let section = document.querySelectorAll('section')
let heightSec = 0;
let waves = document.querySelector('.waves');

function scrollToNext(){
    if(waves != null){ //waves not equal to null 
    section.forEach(sec=>{
        console.log(sec.offsetHeight);
    })
    console.log("scrollToNext");
    console.log(window.outerHeight); //the size of the full height
    console.log(currentElement); // the page you are at the moment

    if(currentElement == 0){
        console.log('goes to section 2');
        heightSec = section[0].offsetHeight;
        window.scroll({ //elementen in een object
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++; // adding an element to your currentElement
    }
    else if(currentElement == 1){
        console.log ('goes to section 3');
        heightSec += section[1].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;

    }

    else if(currentElement == 2){
        console.log ('goes to section 3');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 3){
        console.log('goes to section 4');
        heightSec = section[0].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }
    }
}
document.addEventListener('click', scrollToNext);

// teacher helped me :) and: MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll

let photo = document.querySelector('#juliaRoberts');
// let position = 0;
// setInterval(movePhoto, 5000);
// setTimeout(movePhoto,3000)
// const delay = 5000;

function movePhoto(){
    console.log("in movePhoto");
    photo.setAttribute("style", "left:-350px")}; //name, value

photo.addEventListener('mouseover', movePhoto);
setTimeout(movePhoto, 2000);

//bron: https://developer.mozilla.org/en-US/docs/Web/API/setInterval#delay_restrictions

//moving picture of julia roberts


// setInterval(movePhoto, 1000);
// pos = 0;
// let move = document.querySelector('#juliaRoberts').textContent

// function movePhoto(setInterval){
//    move.style.left = x + "px"; x++; 20;
// }
// document.querySelector('#juliaRoberts').addEventListener('')

// let change = document.querySelector('#juliaRoberts')
// pos = 0;
// timer = setInterval
// let x = 0;
// function() {
//         pos++;
//         change.style.left = pos+"px";
//         if ( pos == 200) clearInterval(timer);
//     };

//     change.querySelector('#juliaRoberts').addEventListener()

// function move (){
//     while(change < 200){
//         change++;
//     }

// }
// let btnContainer = document.getElementById("myDIV");
// let section = sectionContainer.querySelector('#section_1')

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function(){

//     } 

// window.scroll({
//     // top:100,
//     // left:100,
//     behavior: "smooth",
// });

// let section =  document.querySelector('#section_1')
// // const activeEl = document.activeElement('#section_1');
// const element = document.activeElement.tagName; 


// function scrollDown(){
//     if(element == '#section_1'){ 
//         section++;
// }}
// document.querySelector('#section_1').addEventListener('scroll', scrollDown)

// let allSec =  document.querySelectorAll('#waves' ('section'))
// allSec.forEach(('#waves' ('section')))



// function scrollIntoView() {
//     document.querySelectorAll(#waves (section)).textContent

// }

// element.scrollIntoView(){


// const img = document.querySelector("#juliaRoberts")

// function hoverOver(){
//     document.querySelector("#juliaRobertsInfo").textContent = "It all started at the global awards in 1990, this is where Julia Roberts achieved her first major award for her role in Magnolia Steels. Roberts wore a grey men's suit from Giorgio Armani.  In 2014 she said  “I clearly didn't care what anyone thought about it” in an interview. Well apperentaly everybody loved it. Back then it wasn't as self-evident to wear a men's suit to a red carpet as nowadays. She's been a connoisseur of button-ups and suit pants. It was assigned to Julia to make those gender-bending fashion statements."
// }

// document.querySelector("#juliaRoberts").addEventListener("mouseover ", hoverOver)



// let allLi = document.querySelectorAll("#waves"(li))
// allLi.forEach((li)=> li.style.color = '#FF0000')
    
// );


// function showHint(){
//     hintP.textContent = "see the button"
//     setTimeout(controleerGetal, 3000); // recieves a function and time in milliseconds
// }
// function hideHint(){
//     hintP.textContent = ""
// }
// showHint()