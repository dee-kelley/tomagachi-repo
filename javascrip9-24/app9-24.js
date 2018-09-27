// global variable
//===================================================
let seconds = 0;
// let hungry = 0;
// let bored = 0;
// let sleepy = 0;
// let old = 0;
const $body = $('body');

//=====================================================


// function playAudio() { 
//     music.play(); 

// } 
// const fuckinA = $('<audio autoplay controls id="myAudio"> <source src="Mortal-Kombat.mp3"></audio>');
// $(document).on('click', ".music", function(){
//     $body.append(fuckinA)
//     $('.music').remove();
// });

//==================================================
//window.alert("Toma-GOTCHA NOW BITCH")
//Toma constructor
//const game = {} game.timer = setInterval clearInterval(game.timer)
//======================================================

  // First select the input
  // Then maybe find its VALUEEEE

  class Tomagachi {
    constructor(name) {
        this.name = name;
        this.hungry = 0;  //25000 seconds
        this.bored = 0; //50000 seconds
        this.sleepy = 0; //1000000 seconds
        this.age = 0;
        this.alive = true
}}

const naming = prompt("Please enter your pet's name", "Name");
let pet = new Tomagachi(naming);
$('.name').append(naming)
$('#pic').append('<img src = "https://78.media.tumblr.com/2a24e5730af3f37ed8d8eb54bf5105f4/tumblr_o60ghokDWV1umhm4zo2_r1_250.gif"></img')


const stats = () =>{
    $('.age').text(pet.age);
}

// const timePassing = () => {
// 	updateTamagotchi();
// 	seconds++;
// 		if(seconds % 7 == 0) {
// 			pet.hunger++;
// 			$('.hungry').empty().append(pet.hunger);
// 		}
const timePassingFeed = setInterval (()=>{
    seconds++;
    if(seconds%2 ===0){
        pet.hungry++;
        $('.hunger').text(pet.hungry)
        console.log(pet.hungry)
    } 
    // else if(pet.hungry == 10){
    //     pet.alive = false;
    //     clearInterval(timePassingFeed);
    //     //pet dies - write a function for dying with a reason as parameter const die = (reason) => {clear interval $('mesg').text}
    // }
}, 1000)

const timePassingSleep = setInterval (()=>{
    if(seconds%2 ===0){
        pet.sleepy++;
        $('.sleepy').text(pet.sleepy)
        console.log(pet.sleepy)
        
        }
        // else if(pet.sleepy == 10){
        // pet.alive = false;
        // clearInterval(timePassingSleep);
        // }
}, 1000)

const timePassingPlay = setInterval (()=>{
    if(seconds%5 ===0){
        pet.bored++
        $('.bored').text(pet.bored)
        console.log(pet.bored)
        }}, 1000)

const timePassingAge = setInterval (()=>{
    if(seconds%3 === 0){
        pet.age++
        $('.age').text(pet.age)
        //change picture
    } if(seconds === 5){
        alert(`${naming} IS EVOLVING!`)
        $('#pic > img').remove();
        $('#pic').append('<img src = "https://pa1.narvii.com/6597/d64a6d75fc3e31854691fe5c3a53bff8b6c424db_hq.gif"></img>');
    } if(seconds === 10){
        alert(`${naming} IS EVOLVING AGAAAIIIIIN!`)
        $('#pic > img').remove();
        $('#pic').append('<img src = "https://pa1.narvii.com/6437/9f8771e4760bed80cef05e19eb145393e4bdea00_128.gif"></img>');
    
    } else if(pet.age == 10 || pet.hungry == 10 || pet.bored ==10 || pet.sleepy ==10 ){
    pet.alive = false;
    alert(`YOU LET ${naming} DIE`);
    $('#pic > img').remove();
    $('header').append('<img src = "https://media.giphy.com/media/5kFVk4thXEW7FzTEYx/giphy.gif"></img>');
        $('.title').replaceWith("MURDER MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    $('#notice').replaceWith("SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x SENPAI NOTICED ME  x_x")
    $('.name').replaceWith(`<h4 class="nameTwo">HERE LIES ${naming}</h4>`)
    clearInterval(timePassingAge);
        clearInterval(timePassingPlay);
        clearInterval(timePassingSleep);
        clearInterval(timePassingFeed);
        console.log(timePassingAge)
    }
}, 1000);

$('.feed').on('click', ()=> { 
    pet.hungry-= 2;
    console.log(`THIS IS HUNGRY ${pet.hungry}`);
	if (pet.hungry <= 1 ) {                                         //|| this.sleepy <= 1
        alert(`I'm full, Kevin Spacey!`);
        return
	}
   
        console.log(pet.hungry)
		// updateTamagotchi();
});

$('.sleep').on('click', ()=> {
    pet.sleepy-= 1;
    console.log(`CLICKED WORKED ${pet.sleepy}`);
	if (pet.sleepy <= 1) {                                      //pet.hungry <= 1 || 
		alert(`I am awake, baka!`);
		return
	}
    
    //jquery to update page =======================================================

        console.log(pet.sleepy)
		// updateTamagotchi();
});
$('.play').on('click', ()=> {
    pet.bored-= 1;
    console.log(`THIS IS BORED ${pet.bored}`);
	if (pet.bored <= 1) {                                               //pet.hungry <= 1 || 
		alert(`That was fun, senpai!`);
		return
	
}
        console.log(pet.bored)
		// updateTamagotchi();
});

//.attr(the source thing you want to change, what you are changing it to)

// $('button').on('click', () => {
//     const $input = $('input').val();
//     console.log($input);
//   });

// $(document).on('click', ".age", function() {
//     console.log(`THIS IS AGE ${pet.age}`)
// 	if (pet.age = 10) {      
//         pet.alive=false;                                            //pet.hungry <= 1 || 
// 		alert(`Time makes you older...`);
// 		return
// 	}
//     pet.age+= 1;
//         console.log(pet.age)
// 		// updateTamagotchi();
// });

/*$('.feed').on('click', ()=> {
 
    // clearInterval(timePassingFeed);
    hungry++;
    $('header > img').remove();
       // $('header').append('<img src = "https://c3.legalinsurrection.com/wp-content/uploads/2015/03/Dick-Cheney-620x435.jpg"></img>')
        //$('<h2>Tomagotcha is purr-eased </h2>').appendTo($('header'));
        console.log("click")
});
$('.sleep').on('click', ()=> {
    sleepy++;
    // clearInterval(timePassingSleep);
    $('header > img').remove();
   // $('header').append('<img src = "https://secure.i.telegraph.co.uk/multimedia/archive/01242/cheney_1242441c.jpg"></img>')
    console.log("click")
});
$('.play').on('click', ()=> {
    bored++;
    // clearInterval(timePassingPlay);
    $('header > img').remove();
    //$('header').append('<img src = "https://vignette.wikia.nocookie.net/clubpenguin/images/a/a7/Kermit_sprite_running.gif/revision/latest?cb=20150513171656"></img>')

    console.log("click")
});
// const music = play(()=>{
//     const audio = document.getElementById("audio");
//     audio.play();
//               })

//just keep hungry stat going up and hungry level will go down when you feed it


//scoreboards or messages that have to pop up
//<h2>your pet has ( happiness)<> or time: <>  make elements the <span class=whatever>-small part of it that looks different 
//than everything elsegrap that span and use .text
//<h2> your happiness<span class = "happy">0</span></h2>*/