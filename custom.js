
var bluecar = document.getElementById('bluecar');
var redcar = document.getElementById('redcar');
var result = document.getElementById('result');
var score = document.getElementById('score');
var game = document.getElementById('game');
var musiC = document.getElementById('music');
var counter = 0


// bluecar move.........

bluecar.addEventListener('animationiteration', function(){
    var random = Math.floor(Math.random()*3)*108;
    bluecar.style.left=random + "px";
    counter++
});



// redcar move.............

window.addEventListener('keydown', function(e){
    if(e.keyCode=="39"){var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue('left'));

    if(redcarleft < 216){
        redcar.style.left = (redcarleft + 108) + 'px'}
        musiC.play()
    };

     if(e.keyCode=="37"){
        var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue('left'));

        if(redcarleft > 0){
            redcar.style.left = (redcarleft - 108) + 'px'};
            musiC.play()
     }   
});

// Game Over..........

setInterval(function gameover (){

    var bluecartop = parseInt(window.getComputedStyle(bluecar).getPropertyValue('top'));
    var bluecarleft = parseInt(window.getComputedStyle(bluecar).getPropertyValue('left'));
    var redcarLeft= parseInt(window.getComputedStyle(redcar).getPropertyValue('left'));

        if((bluecarleft === redcarLeft) && (bluecartop > 285) && (bluecartop < 365)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML=`${counter}`

            counter=0
        };
        
        
}, 10);

