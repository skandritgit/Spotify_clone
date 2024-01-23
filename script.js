console.log("welcome to spotify")

let songIndex=0;
let audioElement=new Audio(`./songs/1.mp3`);
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let songItem= Array.from((document.getElementsByClassName('songItem')));
let mastersong=document.getElementById('mastersong');

let songs=[
    {songName:"Chaleye-Jawan",filePath:"songs/1.mp3",coverPath:"covers/1.png"},
    {songName:"Heriye",filePath:"songs/2.mp3",coverPath:"covers/2.png"},
    {songName:"Chandan-sa-badan",filePath:"songs/3.mp3",coverPath:"covers/1.png"},
    {songName:"Heriye",filePath:"songs/4.mp3",coverPath:"covers/2.png"},
    {songName:"Chaleye-Jawan",filePath:"songs/5.mp3",coverPath:"covers/1.png"},
    // {songName:"Heriye",filePath:"songs/6.mp3",coverPath:"covers/2.png"},
    // {songName:"Chaleye-Jawan",filePath:"songs/7.mp3",coverPath:"covers/1.png"},
    // {songName:"Heriye",filePath:"songs/8.mp3",coverPath:"covers/2.png"},
]

songItem.forEach((element,i)=>{
    console.log(element)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style
    }
    else{
        audioElement.pause();
        makepause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    }
})


audioElement.addEventListener('timeupdate',()=>{
    // console.log("timeupdate");
    progress=parseInt((audioElement.currentTime/audioElement.duration*100));
    // console.log(progress);
    myprogressBar.value=progress;

})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;;
})

const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
       element.classList.add("fa-play-circle");
       element.classList.remove("fa-pause-circle");
    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target)
        makeallplay();
        songIndex=parseInt(e.target.id);
        console.log(e.target);
        if(e.target.classList.contains("fa-play-circle")){
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src= `songs/${songIndex+1}.mp3 `;
        mastersong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        }
        else{
        e.target.classList.add("fa-play-circle");
        e.target.classList.remove("fa-pause-circle");
        audioElement.src= `songs/${songIndex+1}.mp3 `;
        mastersong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        }
        // else{
        //     makepause(e);
        // }
       

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }else{
        songIndex+=1;
    }
        audioElement.src= `songs/${songIndex+1}.mp3 `;
        audioElement.currentTime=0;
        audioElement.play();
        mastersong.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(index<=0){
            songIndex=0;
        }else{
            songIndex -=1;
        }
            audioElement.src= `songs/${songIndex+1}.mp3 `;
            audioElement.currentTime=0;
            audioElement.play();
            mastersong.innerText=songs[songIndex].songName;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        
        })

      const makepause=(e)=>{
         Array.from(document.getElementsByClassName("songItempause")).forEach((element)=>{
            //   element.classList.add("fa-play-circle");
            //   element.classList.remove("fa-pause-circle");
               //element.addEventListener('click',(e)=>{
                e.target.classList.add("fa-play-circle");
                e.target.classList.remove("fa-pause-circle");
                audioElement.pause();
                masterPlay.classList.add('fa-play-circle');
                masterPlay.classList.remove('fa-pause-circle');
               
              
        })
    // const makepause=()=>{
    //     Array.from(document.getElementsByClassName("songItempause")).forEach((element)=>{
    //          element.classList.add("fa-play-circle");
    //          element.classList.remove("fa-pause-circle");
    //          audioElement.pause();
               
              
             
    //    });
    // }

      }
