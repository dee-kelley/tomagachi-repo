$(document).ready()
// global variable
//===================================================
let seconds=0;
let hungry = false;
let bored = false;
let sleepy = false;
let $body = $('body')

//window.alert("Toma-GOTCHA NOW BITCH")
//Toma constructor
//======================================================
$('.start').on('click', (e)=> {
    // $('button').remove();
    $(e.currentTarget).remove();
    console.log("clik")
});

class Tomagachi {
constructor(hungry, sleepy, bored) {
    this.hungry = hungry;  //25000 seconds
    this.bored = bored; //50000 seconds
    this.sleepy = sleepy; //1000000 seconds
    this.age = 0
}
};

tomagachi = {
    hungry: 0,
    bored: false,
    sleepy: false,
    age: 0
} 
$('.feed').on('click', ()=> {
    hungry++;
//    <input type="button" onclick="clearInterval(timer)" value="stop">
    $('header > img').remove();
    //setInterval.reset(timePassing)
        $('header').append('<img src = "https://c3.legalinsurrection.com/wp-content/uploads/2015/03/Dick-Cheney-620x435.jpg"></img>')

        console.log("click")
});
$('.sleep').on('click', ()=> {
    sleepy++;
    $('header > img').remove();
    $('header').append('<img src = "https://1.bp.blogspot.com/-TZMcOZBAMjM/WcNm69wvXaI/AAAAAAAAPY8/ksdfZy8NEx8d46N2EW0G3PUzZzBXVlslQCLcBGAs/s1600/Screenshot%2B2017-09-21%2Bat%2B2.07.24%2BAM.png"></img>')
    console.log("click")
});
$('.play').on('click', ()=> {
    bored++;
    $('header > img').remove();
    $('header').append('<img src = "https://static01.nyt.com/images/2015/12/08/multimedia/dick-cheney-terror/dick-cheney-terror-superJumbo.jpg"></img>')

    console.log("click")
});
//hungry
// };
// const wellBeing = () => {
// if()
// }


const timePassing = setInterval (()=>{
    seconds++;
    if(seconds%25 ===0){
        $body.append('<h1 class="hungry">FEED ME<h1>')
        console.log("hungry")
    }
    if(seconds%45 ===0){
        $body.append('<h1 class="bored">GIVE ME A NUKE<h1>')
        console.log("bored")
    }
    if(seconds%55 ===0){
        $body.append('<h1 class="sleepy">I AM TIRED<h1>')
        console.log("sleepy")
    }
    // if(age > 100){
    //     //change picture
    // }
  //   if(seconds < 10){
  //       clearInterval(timePassing);
  //       console.log("Done")
    // }
(timePassing)
}, 1000)
