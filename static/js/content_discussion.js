var content_discussion=  `

<!--Your modal content goes here-->
<p class="title"> Discussion </p>
<p class="content">
    We guided our analysis according to the following aspects: 

<p class="content" style="padding-left:10%; padding-top:5%;line-height: 100%;">
    1 - <a class="link" id="discussion_1">Demographic</a>
    </br></br>
    2 - <a class="link" id="discussion_2">Relations with the use of contraceptives</a>
    </br></br>
    3 - <a class="link" id="discussion_3">Identification with feminism</a> 
    </br></br>
    4 - <a class="link" id="discussion_4">Group interest and participation</a> 
    </br></br>
    5 - <a class="link" id="discussion_5">Feelings regarding likes and interactions</a>
    </br></br>
    6 - <a class="link" id="discussion_6">Kind of relationships</a>
    </br>
</p>

<script>
    document.getElementById('discussion_1').addEventListener('click',function(){
    $("#content").html(content_discussion_1);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});

    document.getElementById('discussion_2').addEventListener('click',function(){
    $("#content").html(content_discussion_2);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});

    document.getElementById('discussion_2').addEventListener('click',function(){
    $("#content").html(content_discussion_2);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});

    document.getElementById('discussion_3').addEventListener('click',function(){
    $("#content").html(content_discussion_3);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});

    document.getElementById('discussion_4').addEventListener('click',function(){
    $("#content").html(content_discussion_4);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});
    document.getElementById('discussion_5').addEventListener('click',function(){
    $("#content").html(content_discussion_5);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});
    document.getElementById('discussion_6').addEventListener('click',function(){
    $("#content").html(content_discussion_6);
    centerDiv.style.left = '0px',
    $('#demo01').click();
});
</script>

</p>
`;
