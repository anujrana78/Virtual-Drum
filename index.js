
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    
    document.getElementsByTagName("button") [i] .addEventListener("click", function(){


        var chara =  this.innerHTML;
        makeSound(chara);

        
    });
}

var keyPress = addEventListener("keypress", function(e){
    
    makeSound(event.key);
});
console.log(keyPress);

function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'a' :
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();

        case 's' :
        var audio = new Audio('sounds/snare.mp3');
        audio.play();

        case 'd' :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();

        case 'j' : 
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();

        case 'k' : 
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();

        case 'l' :
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
    
        default:
            break;
    }
}

   



