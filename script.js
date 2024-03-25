console.log("yoooo")

let i = 0;
let text = "Feminism means believing in equality of all genders, of all colours and of all origins. It's not about hating men, nor thinking that women are better. It's simply all about equality. As Chimamanda Ngozi Adichie quoted: 'Feminist: the person who believes in the social, political and economic equality of the sexes.' The way we dress nowadays as men, women and everything in between has not always been this way. Feminist waves has played a huge role in changing fashion to how it is currently. On this website you will see explanations about these different waves and how that has changed the fashion industry. hopefully you'll get involved, interested or inspired." 
let speed = 25; //duration of the effect in milliseconds per letter

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

const textJulia = document.querySelector('#juliaArticle');

function moveTextJulia(){
    if(textJulia != null){
    console.log('on hover: text Julia moves to the right')
    textJulia.animate([
        { 
            transform: "translateX(0)"
        },
        { 
            transform: "translateX(250px)"
        }],
        {
            duration: 4000, 
            fill: "forwards", 
        })};
} 
if(textJulia != null){
textJulia.addEventListener('mouseover', moveTextJulia)};

const photoJulia = document.querySelector('#juliaRoberts');

function movePhotoJulia(){
    
    console.log('on hover: photo Julia moves to the left')
    photoJulia.animate([
        { 
            transform: "translateX(0)"
        },
        { 
            transform: "translateX(-250px)"
        }],
        { 
            duration:4000, 
            fill: "forwards", 
            delay: 1000,
        })};

if(photoJulia != null){
 photoJulia.addEventListener('mouseover', movePhotoJulia)};


 const textFlorence = document.querySelector('#florenceArticle')

 function moveTextFlorence(){
    console.log('on hover: text Florence moves to the left')
    textFlorence.animate([
        {
            transform: "translateX(0)"
        },
        {
            transform: "translateX(-250px)"
        }],
        {
            duration:4000, 
            fill: "forwards", 
        });
 }
 if(textFlorence != null){
 textFlorence.addEventListener('mouseover', moveTextFlorence)};

 const photoFlorence = document.querySelector('#florencePugh')

 function movePhotoFlorence(){
    console.log('on hover: photo florence moves to the right')
    photoFlorence.animate([
        {
            transform: "translateX(0)"
        },
        {
            transform: "translateX(250px)"
        }],
        {
            duration:4000, 
            fill: "forwards", 
            delay: 1000,
        });
 }
 if(photoFlorence != null){
 photoFlorence.addEventListener('mouseover', movePhotoFlorence)};
 
// bron: https://youtu.be/LE9EaIZdjFM?si=iS1DWk_C93TVMihc 

let chanel = document.querySelector('#chanelPhoto')
chanel.src = "ff_photos/Chanel_1.jpg"
let chanelStatus = false

// function changePhotoChanel(){
//     chanel.src = "ff_photos/chanelTrousers.jpg"   
//     console.log('change foto to trousers')
// }

function changePhotoChanel(){
    if (chanelStatus){
        console.log('showing the trousers')
        chanel.src = "ff_photos/chanelTrousers.jpg"   
        chanelStatus = false
    } 
        
    else if(!chanelStatus) {
        console.log('showing chanel')
        chanel.src = "ff_photos/Chanel_1.jpg"  
        chanelStatus = true
       
    }

};
chanel.addEventListener('click', changePhotoChanel);


let yves = document.querySelector('#yvesPhoto')
yves.src = "ff_photos/YvesSaintLaurent.jpeg"
let yvesStatus = false

// function changePhotoYves(){
//     console.log('change foto to le smokin')
//     yves.src = "ff_photos/ysl_lesmokin.png"
// }

function changePhotoYves(){
if (yvesStatus){
    yves.src = "ff_photos/ysl_lesmokin.png"
    yvesStatus = false
}
else if (!yvesStatus){
     yves.src = "ff_photos/YvesSaintLaurent.jpeg"
     yvesStatus = true
}};
yves.addEventListener('click', changePhotoYves);


// homework and wessel helped me;)))))))