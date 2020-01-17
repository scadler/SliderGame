var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp - 25)/12);
$yp += (($mouseY - $yp -25)/12);
$("#ship").css({left:$xp +'px', top:$yp +'px'});  
}, 30);