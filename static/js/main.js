var body = document.body;
var centerDiv = document.getElementById('centerDiv');
var birdwrapper = document.getElementById('birdwrapper');
var vagina = document.getElementsByClassName('vagina');
var graph = document.getElementById('graph');
var borderTop = document.getElementById('border_top');
var borderBottom = document.getElementById('border_bottom');


$(window).load(function(){
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
   $('#overlay').fadeIn();
});


go();
window.addEventListener('resize', go);

function go(){
    var height = window.innerHeight;
    var width = window.innerWidth;
    var screenWidth = screen.width;
    borderTop.style.height = (100 + 0.2*(screen.width - window.innerWidth) - 0.2*(screen.height - window.innerHeight) )+'px';
    borderBottom.style.height = (100 + 0.2*(screen.width - window.innerWidth) - 0.2*(screen.height - window.innerHeight) )+'px';
    // borderBottom.style.height = (0.13*window.innerHeight*screen.width/window.innerWidth - 0.13*(screen.height - window.innerHeight))+'px';
    // borderTop.style.height = (-0.25*screen.height*width/screenWidth + 0.35*screen.height)+'px';
    // borderBottom.style.height = (-0.25*screen.height*width/screenWidth + 0.35*screen.height)+'px';
}


document.getElementById('btn-close-modal').onclick = close_modal_click;



function close_modal_click()
{   
    centerDiv.style.left='25%';
};

document.getElementById('o_left').addEventListener('click',function(){
    $("#content").html(content_videos);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});


document.getElementById('o_right').addEventListener('click',function(){
    $("#content").html(content_charts);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});
document.getElementById('trompa_left').addEventListener('click',function(){
    $("#content").html(content_contact);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});
document.getElementById('trompa_right').addEventListener('click',function(){
    $("#content").html(content_discussion);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});
document.getElementById('block_center').addEventListener('click',function(){
    $("#content").html(content_social_capital);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});
document.getElementById('block_down').addEventListener('click',function(){
    $("#content").html(content_hormones);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});

document.getElementById('block_up').addEventListener('click',function(){
    $("#content").html(content_about);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});



// document.getElementsByClassName('tooltip').ready(function(){
//     $('.tooltip').tooltipster();
// });

// centerDiv.onclick = function()
//     {
//     // document.getElementById("content").innerHTML='Hello world';
//     // $("#content").load("/templates/content.html");
//     $("#content").html(content1);
//     centerDiv.style.left = '0px',
//     $('#demo01').click();
//     };

// Here, the ease animation will be use for the global centerDiv.
obt3 = new Vivus('birdwrapper', {type: 'sync', duration: 300, delay:5, animTimingFunction: Vivus.EASE, pathTimingFunction: Vivus.EASE_IN});

obt3.play();


  $("#demo01").animatedModal({
                modalTarget:'animatedModal',
                animatedIn:'zoomInRight',
                animatedOut:'zoomOutRight',
                animationDuration:'1s',
                left:'55%',
                top:'0%',
                color: 'rgba(89, 17, 49,0.4)',
                overflow: 'auto',
                opacityIn:'1',
                opacityOut:'0',
                zIndexin:'0',
                width:'45%',
                height:'100%'
            });
