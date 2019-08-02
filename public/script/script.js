$(document).ready(function(){
	function startWorker(){
		if(typeof(Worker)!=="undefined"){
			if(typeof(w)=="undefined"){
				w = new Worker("webworker.js");
			}
			w.onmessage = function(event){
				$(".home_content").css("background-image","url('img/jg2')");
			}
		}

	}
    $("#menu").click(function(){
      $(".navi_menu").slideDown();
      $(".navigator").css("background-color", "#111010");
      $(".navigator").css("height", "200px");
      $("#x").slideDown();
      $("#menu").hide();
      $("#name").hide();
    });
      $("#x").click(function(){
        $(".navi_menu").hide();
        $("#menu").show();
        $("#name").show();
        $("#x").hide();
        $(".navigator").css("background-color", "white");
        $(".navigator").css("height", "50px");
        $("#menu").css("color", "#111010");
      });
  });
