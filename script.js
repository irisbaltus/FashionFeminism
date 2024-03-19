console.log("yoooo")

let i = 0;
let text = "Feminism means believing in equality of all genders, of all colours and of all origins. It's not about hating men, nor thinking that women are better. It's simply all about equality. As  Chimamanda Ngozi Adichie quoted: 'Feminist: the person who believes in the social, political and economic equality of the sexes.' The way we dress nowadays as men, women and everything in between has not always been this way. Feminist waves has played a huge role in changing fashion to how it is currently. On this website you will see explanations about these different waves and how that has changed the fashion industry. hopefully you'll get involved, interested or inspired." 
let speed = 40; //duration of the effect in milliseconds

function typeWriter() {
    if (i < text.length){
        document.querySelector("#intro").textContent += text.charAt(i); //the value that was already there stays, it adds the new ones to it
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()

const img = document.querySelector("#juliaRoberts")

function hoverOver(){
    document.querySelector("#juliaRobertsInfo").textContent = "It all started at the global awards in 1990, this is where Julia Roberts achieved her first major award for her role in Magnolia Steels. Roberts wore a grey men's suit from Giorgio Armani.  In 2014 she said  “I clearly didn't care what anyone thought about it” in an interview. Well apperentaly everybody loved it. Back then it wasn't as self-evident to wear a men's suit to a red carpet as nowadays. She's been a connoisseur of button-ups and suit pants. It was assigned to Julia to make those gender-bending fashion statements."
}

document.querySelector("#juliaRoberts").addEventListener("mouseover ", hoverOver)

// let allLi = document.querySelectorAll("#waves"(li))
// allLi.forEach((li)=> li.style.color = '#FF0000'
    
// );


// function showHint(){
//     hintP.textContent = "see the button"
//     setTimeout(controleerGetal, 3000); // recieves a function and time in milliseconds
// }
// function hideHint(){
//     hintP.textContent = ""
// }
// showHint()