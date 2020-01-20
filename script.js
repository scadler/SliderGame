var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;
var counter = 0;
var obj = {
    collision: false,
}
$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
if(obj.collision === false){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp - 25)/20);
$yp += (($mouseY - $yp -25)/20);
$("#ship").css({left:$xp +'px', top:$yp +'px'}); 
} 
}, 30);

setInterval(function(){
    if(obj.collision === false){
    var row = Math.floor(Math.random()*10)+1
    var speed = (Math.floor(Math.random()*14)+1)+15
    if($("#div"+row).contents().hasClass('torpedo')=== false){
    $("#div"+row).append(`<marquee class="torpedo" id="torpedo${row}" loop="1" scrollamount=${speed}><p class="torpedoImg" id="img${row}"> torpedo</p> </marquee>`);
    }
    else{
        var x = $("#img"+row).offset().left
        if(x <= -35){
            $("#torpedo"+row).remove();
            $("#div"+row).append(`<marquee class="torpedo" id="torpedo${row}" loop="1" scrollamount=${speed}><p class="torpedoImg" id="img${row}"> torpedo</p> </marquee>`);
        }
    }
}
}, 500)

setInterval(function(){
    if(obj.collision === false){
    var img = document.getElementById("img1");
    collisionDetect(img, 1)
    img = document.getElementById("img2");
    collisionDetect(img, 2)
    img = document.getElementById("img3");
    collisionDetect(img, 3)
    img = document.getElementById("img4");
    collisionDetect(img, 4)
    img = document.getElementById("img5");
    collisionDetect(img, 5)
    img = document.getElementById("img6");
    collisionDetect(img, 6)
    img = document.getElementById("img7");
    collisionDetect(img, 7)
    img = document.getElementById("img8");
    collisionDetect(img, 8)
    img = document.getElementById("img9");
    collisionDetect(img, 9)
    img = document.getElementById("img10");
    collisionDetect(img, 10)
    }
}, 50)

function collisionDetect(img, i){
    if($("#img"+i).length && $("#img"+i).offset().left !== 8 && $("#img"+i).offset().left >= -20){
 var ship = document.getElementById("ship");
    var object_1 = ship.getBoundingClientRect();
    var object_2 = img.getBoundingClientRect();
    if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
        object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
        console.log("collision")
        // torpedo1.stop(true, true);
        // torpedo2.stop(true, true);
        // torpedo3.stop(true, true);
        // torpedo4.stop(true, true);
        // torpedo5.stop(true, true);
        // torpedo6.stop(true, true);
        // torpedo7.stop(true, true);
        // torpedo8.stop(true, true);
        // torpedo9.stop(true, true);
        // torpedo10.stop(true, true);
        obj.collision = true;
  }
    }
}