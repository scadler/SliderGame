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
    var speed = (Math.floor(Math.random()*2)+1)*8
    console.log(row+", "+speed)

}, 1500)