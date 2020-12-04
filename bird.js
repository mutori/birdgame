var game = document.getElementById('game');
var counter;
var blocksCount = [];
//create Bird
var bird = document.createElement('div');
bird.setAttribute('class','bird');
bird.setAttribute('id','bird');
game.appendChild(bird);
//create blocks n space
var createBlocks = setInterval( function(){
    var block = document.createElement('div');
    var space = document.createElement('div');
    block.setAttribute('class','block');
    space.setAttribute('class','space');
    game.appendChild(block);
    game.appendChild(space);

    //make space random
    var spaceTop = parseInt(window.getComputedStyle(space).getPropertyValue('top'));
              // + (Math.floor(Math.random()))*340 + 'px';
    space.style.top = 340*(Math.random()) + 'px';
    space.style.height = 200*(Math.random()) + 80 + 'px';
}, 1000)


//create more blocks
//make space random
