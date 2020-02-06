var $mouseX=0,
$mouseY=0;
var $xp=0,
$yp=0;
var counter=0;
a=0
$("#spaceshipExploded").hide();
var obj= {
    collision: false,
    score: 0,
}
$(document).mousemove(function(e) {
        $mouseX=e.pageX;
        $mouseY=e.pageY;
    }
);
var $loop=setInterval(function() {
        if(obj.collision===false) {
            // higher # = slower tracking
            $xp +=(($mouseX - $xp - ($("#spaceship").width()/2))/20);
            $yp +=(($mouseY - $yp - ($("#spaceship").height()/2))/20);
            $("#ship").css({left:$xp +'px', top:$yp +'px'});
        }
    }, 30);
setInterval(function() {
        if(obj.collision===false) {
            var row=Math.floor(Math.random()*20)+1;
             var speed=(Math.floor(Math.random()*30)+1)+40;
              var image=Math.floor(Math.random()*4)+1;
               if(image===1) {
                image="https://i.imgur.com/gBYpE7D.gif"
                color="normal";
            }
            else if(image===2) {
                image="https://i.imgur.com/fz0XQg8.gif"
                color="normal";
            }
            else if(image===3) {
                image="https://imgur.com/QJOQJuK.gif"
                color="normal";
            }
            else {
                image="https://i.imgur.com/9aw0c4f.gif"
                color="normal";
            }
            if($("#div"+row).contents().hasClass('torpedo')===false) {
                $("#div"+row).append(`<marquee class="torpedo" id="torpedo${row}" loop="1" scrollamount=${speed}><img class="torpedoImg" id="img${row}"src=${image}> </marquee>`);
            }
            else{
                var x=$("#img"+row).offset().left;
                if(x <=-20) {
                    $("#torpedo"+row).remove();
                    $("#div"+row).append(`<marquee class="torpedo" id="torpedo${row}" loop="1" scrollamount=${speed}><img class="torpedoImg" id="img${row}" src=${image}> </marquee>`);
                    obj.score = obj.score +1;
                }
            }
        }
        console.log(obj.score)
    } , 150);
     setInterval(function() {
        if(obj.collision===false) {
            var img=document.getElementById("img1");
            collisionDetect(img, 1); 
            img=document.getElementById("img2");
            collisionDetect(img, 2); 
            img=document.getElementById("img3");
            collisionDetect(img, 3); 
            img=document.getElementById("img4");
            collisionDetect(img, 4); 
            img=document.getElementById("img5");
            collisionDetect(img, 5); 
            img=document.getElementById("img6");
            collisionDetect(img, 6); 
            img=document.getElementById("img7");
            collisionDetect(img, 7); 
            img=document.getElementById("img8");
            collisionDetect(img, 8); 
            img=document.getElementById("img9");
            collisionDetect(img, 9); 
            img=document.getElementById("img10");
            collisionDetect(img, 10);
            img=document.getElementById("img11");
            collisionDetect(img, 11); 
            img=document.getElementById("img12");
            collisionDetect(img, 12); 
            img=document.getElementById("img13");
            collisionDetect(img, 13); 
            img=document.getElementById("img14");
            collisionDetect(img, 14); 
            img=document.getElementById("img15");
            collisionDetect(img, 15); 
            img=document.getElementById("img16");
            collisionDetect(img, 16); 
            img=document.getElementById("img17");
            collisionDetect(img, 17); 
            img=document.getElementById("img18");
            collisionDetect(img, 18); 
            img=document.getElementById("img19");
            collisionDetect(img, 19); 
            img=document.getElementById("img20");
            collisionDetect(img, 20);
        }
    }, 50);
    function collisionDetect(img, i) {
    if($("#img"+i).length && $("#img"+i).offset().left !==8 && $("#img"+i).offset().left >=-20) {
        var ship=document.getElementById("ship");
        var object_1=ship.getBoundingClientRect();
        var object_2=img.getBoundingClientRect();
        if (object_1.left < object_2.left + object_2.width && object_1.left + object_1.width > object_2.left && object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
             obj.collision=true;
            $("#spaceship").hide();
            $("#spaceshipExploded").show();
        }
    }
}
$("body").click(function(){
    obj.collision=false;
    $("#spaceship").show();
    $("#spaceshipExploded").hide();
});