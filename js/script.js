console.log("Welcome to Spotify ");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar')
let gif1 = document.getElementById('gif1')
let gif2 = document.getElementById('gif2')
let songitems = Array.from(document.getElementsByClassName('songitem'));


let songs=[
    {songname: "Agar tum saath ho ", filePath:"songs/1.mp3", coverPath:"img/agar.jpg" },
    {songname: "Ae dil hai muskil", filePath:"songs/1.mp3",coverPath:"img/ae.jpg" },
    {songname: "tum hi ho", filePath:"songs/2.mp3",coverPath:"img/tum.jpg" },
    {songname: "channa mereya", filePath:"songs/3.mp3",coverPath:"img/channa.jpg" },
    {songname: "tujhe kitna", filePath:"songs/4.mp3",coverPath:"img/tujhe.jpg" },
    {songname: "khairiyat", filePath:"songs/1.mp3",coverPath:"img/khairiyat.jpg" },
    {songname: "Humdard", filePath:"songs/2.mp3",coverPath:"img/humdard.jpg" },
    {songname: "sanam re", filePath:"songs/3.mp3",coverPath:"img/sanam.jpg" },
    {songname: "jaan'nisaar", filePath:"songs/4.mp3",coverPath:"img/jaan.jpg" },
    {songname: "Baatein ye kabhi na", filePath:"songs/1.mp3",coverPath:"img/baate.jpg" }]

    
songitems.forEach((element,i) => {

    // console.log(element, i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText =songs[i].songname;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.replace('fa-play-circle','fa-pause-circle')
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.replace('fa-pause-circle','fa-play-circle')
        gif1.style.opacity = 0;
        gif2.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
   
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{ 
    element.classList.add("fa-pause-click");
    element.classList.add("fa-play-click");


})

    
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{ 
    element.addEventListener('click',(e)=>{
        
        // console.log(e);
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.replace('fa-play-circle','fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0 ;
        audioElement.play();
        gif1.style.opacity=1;
        gif2.style.opacity=1;
        masterPlay.classList.replace('fa-play-circle','fa-pause-circle')
    })

})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex=0
    }
    else{
        songIndex +=1;

    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0 ;
    audioElement.play();
    masterPlay.classList.replace('fa-play-circle','fa-pause-circle')
})


document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;

    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0 ;
    audioElement.play();
    masterPlay.classList.replace('fa-play-circle','fa-pause-circle')
})

