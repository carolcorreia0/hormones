var content_videos= `

<!--Your modal content goes here-->
<p class="title"> Video Interviews </p>
<p class="content">
We conducted semi-structured anthropologic video interviews that were recorded in May of 2017. 
The participants were from different parts and states of Brazil (MG, SC, DF, RJ) with ages that varied from 18 to 27 years old. 
One of the participants were the founder and moderator of “Adeus Hormônios”, Luana Moreira, who naturally answered some different 
questions regarding the creation of the group. 
</p>

<div style="position:absolute;width:100%;height:100%;text-align: center;">
<div class="video" style="display: inline-block;vertical-align: middle;">
    <div class="owl-carousel owl-theme">
        <div class="item-video" data-merge="5"><a class="owl-video" href="https://www.youtube.com/watch?v=FPzG-k1bdb4"></a></div>
    </div>
</div>
</div>
<script>

$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        items:1,
        videoHeight: 250, 
        videoWidth: 350,
        lazyload:true,
        merge:true,
        loop:false,
        video:true,
        center:true,
        nav:true,
        video:true,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:4
            }
        }
    })
});

</script>
`;
