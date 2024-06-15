

  let progress= document.getElementById("progress");
  let song= document.getElementById("song")
  let contrl= document.getElementById("contrl");

  song.onloadedmetadata= function(){
    progress.max= song.duration;
    progress.value=song.currentTime;

  }
  function playPause(){
    if( contrl.classList.contains("fa-pause")){
        song.pause();
        contrl.classList.remove("fa-pause");
        contrl.classList.add("fa-play")


    }else{
        song.play();
        contrl.classList.remove("fa-play");
        contrl.classList.add ("fa-pause")
    }
  }
  if(song.play){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
  }
  progress.onchange= function(){
    song.play();
    song.currentTime=progress.value;
    contrl.classList.remove("fa-play");
        contrl.classList.add ("fa-pause")

  }
     

