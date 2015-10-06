$(document).ready(function() {
    // The world is yours to explore!
    GAME.candies=0;
    GAME.setText('candy-counter', 'You have' + GAME.candies +'candies');
    
    GAME.getMoreCandies():
    GAME.setTExt('candy-counter', 'You have' + GAME.candies +'candies');
});
 function getMoreCandies(){
     GAME.candies = GAME.candies +1;
 }
