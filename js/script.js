window.onload = function(e){
    var play_btn = document.getElementById("play");
    var green_light_btn = document.getElementById("green");
    var red_light_btn = document.getElementById("red");
    
    $(".yellow_truck").hide();
    $(".red_car").hide();
    $(".jeep").hide();
    $(".fire_truck").hide();

    play_btn.onclick = play_animation;
    red_light_btn.onclick = red;
    green_light_btn.onclick = green;
    
    
    function play_animation(){
        $("#welcome").fadeOut(2000); 
        $("#red-dot").css("background-color", "#fff");
        $("#green-dot").css("background-color", "#32CD32");
    
        $(".yellow_truck").show();
        $(".red_car").show();
        $(".jeep").show();
        $(".fire_truck").show();
    }
    function green(){
        $(".yellow_truck").css("animation-play-state", "running");
        $(".red_car").css("animation-play-state", "running");
        $(".jeep").css("animation-play-state", "running");
        $(".fire_truck").css("animation-play-state", "running");
        $(".yellow_truck_rim_one").css("animation-play-state", "running");
        $(".yellow_truck_rim_two").css("animation-play-state", "running");
        $(".red_car_rim_one").css("animation-play-state", "running");
        $(".red_car_rim_two").css("animation-play-state", "running");
        $(".jeep_rim_one").css("animation-play-state", "running");
        $(".jeep_rim_two").css("animation-play-state", "running");
        $(".fire_truck_rim_one").css("animation-play-state", "running");
        $(".fire_truck_rim_two").css("animation-play-state", "running");
        $("#red-dot").css("background-color", "#fff");
        $("#green-dot").css({"background-color": "#32CD32", "trasition": "1s ease-out"});
    }
    function red(){
        $(".yellow_truck").css("animation-play-state", "paused");
        $(".red_car").css("animation-play-state", "paused");
        $(".jeep").css("animation-play-state", "paused");
        $(".fire_truck").css("animation-play-state", "paused");
        $(".yellow_truck_rim_one").css("animation-play-state", "paused");
        $(".yellow_truck_rim_two").css("animation-play-state", "paused");
        $(".red_car_rim_one").css("animation-play-state", "paused");
        $(".red_car_rim_two").css("animation-play-state", "paused");
        $(".jeep_rim_one").css("animation-play-state", "paused");
        $(".jeep_rim_two").css("animation-play-state", "paused");
        $(".fire_truck_rim_one").css("animation-play-state", "paused");
        $(".fire_truck_rim_two").css("animation-play-state", "paused");
        $("#green-dot").css("background-color", "#fff");
        $("#red-dot").css("background-color", "#ff0000");
    }
}