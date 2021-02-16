var i =0;//global var for default number

function Basic(){
    if (i ==0){
        i=1;

        //local variable for each ID
        var elem = document.getElementById("userBar");
        var gbbar = document.getElementById("gbbar");
        var projectbar = document.getElementById("projectbar");
       
        //width of the progress bar by setting up the number
        var width = 1;
        var id = setInterval(frame,10);//set the animation time 

        function frame(){
            if(width >= 5){//percentage of the bar for each container
                clearInterval(id);//getting id from the varible of setframe time
                i=0;//if not selected it will remain 0 until user do not click on it.
            }else{
                width++;

                //Style and percentage on the container click for each price
            elem.style.width = width + "%";
         

            gbbar.style.width = width + "%";
    
            projectbar.style.width = width + "%";
         
            }
        }

    }
}


function Pro(){ 
    if (i ==0){
        i=1;

        var elem = document.getElementById("userBar");
        var gbbar = document.getElementById("gbbar");
        var projectbar = document.getElementById("projectbar");
       
        var width = 1;
        var id = setInterval(frame,10);
        function frame(){
            if(width >= 50){
                clearInterval(id);
                i=0;
            }else{
               width++;

           elem.style.width = width + "%";

            gbbar.style.width = width + '%';
      
            
            projectbar.style.width = width + "%";
          
        }

    }

}
}

function Premium(){
    if (i ==0){
        i=1;

        var elem = document.getElementById("userBar");
        var gbbar = document.getElementById("gbbar");
        var projectbar = document.getElementById("projectbar");
       
        var width = 1;
        var id = setInterval(frame,10);
        function frame(){
            if(width >= 100){
                clearInterval(id);
                i=0;
            }else{
                width++;

            elem.style.width = width + "%";

            gbbar.style.width = width + "%";
            
            projectbar.style.width = width + "%";
            }
        }

    }

}
