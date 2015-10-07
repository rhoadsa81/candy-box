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
     if (GAME.candies === 1){
         GAME.addButton('eat', 'Eat all the candies', GAME.eatAllCandies);
     }
 }
 
 GAME.eatAllCandies = function(){
     GAME.candies = 0;
     GAME.redraw();
 }
 
 GAME.redraw = function(){
     GAME.setText('candy-counter', 'You have' + GAME.candies +'candies');
 }
