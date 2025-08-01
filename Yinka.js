
		$(document).ready(function(){
			$("#demo").click(function(){
         $("#demo").css({"background-color":"red","color":"#fff"})
		 .css({"background-color":"blue","color":"red"})
		 .css({"background-color":"#cc88ff", "color":"#cc44aa","font-size": "20px"})
         .hide(2000).fadeIn(3000).fadeOut(3000).animate({
          left:'250px',
           opacity:'0.6',
           height:'150px',
           width:'150px'
         });
			});
		});
	
        
		$(document).ready(function(){
			$("#demo").mouseenter(function(){
         $("#demo").css("background-color","red","color","#fff")
		 .css("background-color","blue","color","red")
		 .css("background-color","#cc88ff", "color","#cc44aa","font-size", "20px")
         .hide(2000).fadeIn(3000).fadeOut(3000);
			});
		});
	
        
		$(document).ready(function(){
			$("#demo").mouseleave(function(){
         $("#demo").css({"background-color":"red","color":"#fff"})
		 .css({"background-color":"blue","color":"red"})
		 .css({"background-color":"#cc88ff", "color":"#cc44aa","font-size": "20px"})
         .hide(2000).fadeIn(3000).fadeOut(3000);
			});
		});
	
        
		$(document).ready(function(){
			$("#demo").mouseenter(function(){
         $("#demo").css({"background-color":"red","color":"#fff"})
		 .css({"background-color":"blue","color":"red"})
		 .css({"background-color":"#cc88ff", "color":"#cc44aa","font-size": "20px"})
         .hide(2000).fadeIn(3000).fadeOut(3000);
			});
		});
	