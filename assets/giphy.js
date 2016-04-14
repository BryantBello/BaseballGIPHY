<script type="text/javascript">
    var teams = ['New York Yankees', 'New York Mets', 'Detroit Tigers', 'Arizona Diamondbacks'];
 
    
    function appendNewButton(baseball){ 
       
        var a = $("<button>")
        
      
        a.addClass('baseball');
        a.attr('data-name', baseball);
        a.text(baseball);
        $('#buttonsView').append(a);
    
    }
    
    function renderButtons(){ 
        
        for (var i = 0; i < teams.length; i++){
            appendNewButton(teams[i])
        }
    }
 
 
    function displayBaseballInfo(){
        $('.baseballDiv').empty();
        var baseball = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + baseball + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
          var baseballDiv = $('<div class="baseballDiv">');
          var results = response.data;
               
           for (var i = 0; i < results.length; i++) {
                    
           if (results[i].rating == "r" || results[i].rating == "pg13"|| results[i].rating == "")
            {
            }
           else {
              var gifDiv = $('<div class="item">')
                    var p = $('<p id = "diamond">').text("Rating: " + results[i].rating);
                    
                  
           
 
              var baseballImage = $('<img>');
                baseballImage.addClass('ball');
                baseballImage.attr('src', results[i].images.fixed_height.url );
                baseballImage.attr('data-still' , results[i].images.fixed_height_still.url);
                baseballImage.attr('data-animate' , results[i].images.fixed_height.url);
                baseballImage.attr('data-state' , 'still');
                baseballDiv.append(p);
                 baseballDiv.append(baseballImage);
            $('#baseballView').prepend(baseballDiv);
 
                 }   
                }
        
                });
                }
             $('#baseballView').on('click', '.ball', function(){
               
                var state = $(this).attr('data-state'); 
                if ( state == 'still'){
               $(this).attr('src', $(this).data('animate'));
               $(this).attr('data-state', 'animate');
             }else{
               $(this).attr('src', $(this).data('still'));
               $(this).attr('data-state', 'still');
               }
               });
              renderButtons();
              $('#addBaseball').on('click', function(){
               var baseball = $('#baseball-input').val().trim();
                teams.push(baseball);
        
                appendNewButton(baseball);
                return false;
                });
              $(document).on('click', '.baseball', displayBaseballInfo);
    
</script>