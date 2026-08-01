// TYPEWRITER FUNCTION

function typeWriter(element, text, speed = 45){

    let i = 0;

    element.innerHTML = "";

    let timer = setInterval(()=>{

        element.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

        }

    }, speed);

}




// INITIAL MESSAGE

window.onload = ()=>{

    typeWriter(

        document.getElementById("introText"),

        "Hey ShreyAwwShyy...\nSomeone is trying to steal your attention..."

    );

};





// CHANGE SCREEN

function changeScreen(id){

    document.querySelectorAll(".screen")
    .forEach(screen=>{

        screen.classList.remove("active");

    });


    document.getElementById(id)
    .classList.add("active");

}





// OPEN GIFT BUTTON

function openGift(){

    changeScreen("giftScreen");

}





// GIFT BOX CLICK

function openBox(){

    createConfetti();


    let gift =
    document.querySelector(".gift");


    gift.style.transform="scale(1.3)";



    setTimeout(()=>{


        gift.classList.add("hidden");


        document.querySelector("#giftContent")
        .classList.remove("hidden");


    },700);


}





// STORY

function goToStory(){

    changeScreen("storyScreen");


    setTimeout(()=>{

        typeWriter(

            document.getElementById("storyText"),

`Happy Birthday, my favorite headache. ❤️

You're somehow...

cute...

annoying...

hot...

dramatic...

and impossible...

all at the same time.

And you know what?

I absolutely love this combination.`

        );


    },300);


}





// CHOICES

function showChoices(){

    changeScreen("choiceScreen");

}





// HUG

function showHug(){

    changeScreen("hugScreen");

}





// ROMANTIC SURPRISE

function showLove(){

    changeScreen("loveScreen");

}





// BACK BUTTON

function backHome(){

    changeScreen("choiceScreen");

}





// FINAL SCREEN

function finalScreen(){

    changeScreen("finalScreen");

    createConfetti();

}





// CONFETTI EFFECT

function createConfetti(){


    for(let i=0;i<80;i++){


        let piece =
        document.createElement("div");


        piece.className="confetti";


        piece.style.left =
        Math.random()*100+"vw";


        piece.style.background =
        randomColor();



        piece.style.animationDuration =
        (Math.random()*2+2)+"s";



        document.body.appendChild(piece);



        setTimeout(()=>{

            piece.remove();

        },4000);


    }


}





function randomColor(){

    let colors=[

        "#ff4d9d",

        "#ffd166",

        "#ffffff",

        "#ff85c8",

        "#06d6a0"

    ];


    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}
