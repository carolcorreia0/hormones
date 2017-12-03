var content_about=  `

<!--Your modal content goes here-->
<p class="title"> About </p>
<p class="content" style="font-size: 1vw;">

This website is a result of the Master’s thesis <span style="background-color:rgba(89, 17, 49,0.5); font-size:1.1vw; font-weight:500;">“Participation in social networks: a social capital perspective from 
communication processes”.</span>

</br>
This project was successfully presented at University of Savoie Mont Blanc, in France, in 
June of 2017 as a requirement for the Digital Creation degree.
</br>

The following work aims to study the motivations to participate and publish in social networks. 
</br>

We use the concept of social capital from Bourdieu to understand this scenario where the possibility for the people to make online contributions and participate has become almost an obligation to exist.
</br>

The object of this research is a Facebook group made by almost 130.000 women that is focused in to discuss the choice of not taking hormones as a form of contraception. </br>
From an interdisciplinary approach, we intended to investigate how the cooperation and the social capital circulate 
and can be altered between social groups. </p>


<p class="content" ><button class="btn" id="btn_download"> Download Full Version </button></p>

<script>
    document.getElementById('btn_download').addEventListener('click',function(){
    window.open('/static/thesis.pdf','_blank', 'fullscreen=yes') ;
    });
</script>
`;