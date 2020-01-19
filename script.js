var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp - 25)/20);
$yp += (($mouseY - $yp -25)/20);
$("#ship").css({left:$xp +'px', top:$yp +'px'});  
}, 30);

setInterval(function(){
    var row = Math.floor(Math.random()*9)+1
    var speed = (Math.floor(Math.random()*14)+1)+15
    console.log(row+", "+speed)
    if($("#div"+row).contents().hasClass('torpedo')=== false){
    $("#div"+row).append(`<marquee class="torpedo" id="torpedo${row}" loop="1" scrollamount=${speed}><p class="img" id="img${row}"> torpedo</p> </marquee>`);
    }
    else{
        var x = $("#img"+row).offset().left
        console.log(x)
        if(x <= -35){
            $("#torpedo"+row).remove();
            $("#div"+row).append(`<marquee class="torpedo" id="torpedo${row}" loop="1" scrollamount=${speed}><p class="img" id="img${row}"> torpedo</p> </marquee>`);
        }
    }
}, 500)