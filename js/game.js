$(document).ready(function() {
    // The world is yours to explore!
    GAME.candies=0;
    GAME.setText('candy-counter', 'You have' + GAME.candies +'candies');
    
    GAME.getMoreCandies():
    GAME.redraw();
    
    setInterval(GAME.getMoreCandies, 750);
});

 GAME.getMoreCandies = function(){
     GAME.candies = GAME.candies +1;
     if (GAME.candies >= 1){
     if (!GAME.hasItem('eat')){
         GAME.addButton('eat', 'Eat all the candies', GAME.eatAllCandies);
     }
     } else {
        GAME.disableButton('eat');
     }
         
      if (GAME>candies === 10 ){
       if(!Game.hasItem('throw')){
         GAME.addButton('throw', 'Throw 10 candies on the ground', GAME.throwCandies);
     }
     GAME.redraw();
 }
 
 GAME.throwCandies = function(){
     GAME.candies -= 10;
     GAME.redraw();
 }
 
 GAME.eatAllCandies = function(){
     GAME.candies = 0;
     GAME.redraw();
 }
 
 GAME.redraw = function(){
     GAME.setText('candy-counter', 'You have' + GAME.candies +'candies');
 }
