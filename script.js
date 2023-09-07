$( document ).ready(function() {
   
  $('#kloggins').click( 
    function(
    ){
      //code goes here
      console.log("position: ", $('#kloggins').position() );
    }
  ); 
  
 
  $( "#kloggins" ).draggable({
      stop: function() {
        if(  $('#kloggins').position().left > 500){
        //  alert("you haswss wowzazzz ");
          
           $('#kloggins').attr('src','https://i.kym-cdn.com/entries/icons/original/000/029/198/Dark_Souls_You_Died_Screen_-_Completely_Black_Screen_0-2_screenshot.png');
    }
     
        else if( $('#kloggins').position().left > 300 && $('#kloggins').position().left < 500){
          alert("Don't push your luck, pal  ");
        }    
        else {
          alert("You're walking on thin ice, buddy ");
        }
    }
    
    
  
    
    
  });
  
  
  
  
  
});