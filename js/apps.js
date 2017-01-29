$(function(){
  var p1keys = ['q','w','e','a','s','d','z','x','c'];
  var randomKeys = []
  var p2keys = ['t', 'y', 'u','g', 'h','j','b','n','m']
  var p1WinCounter = 0;
  var p2WinCounter = 0;
  var player1Area = $("player1");
  var player2Area = $("player2");
  function callNextKey(){
          for(var i = 0; i<10; i++){
            randomKeys[i] = p1keys[Math.floor(Math.random()*p1keys.length)];
          }
  }
  function startButton(){
      var button = $("button");
      button[0].addEventListener("click",function(){
        keyPress();
      })
  }
  function keyPress(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'DJ Khaled Another One Sound Effect (HD).mp3');
    var keyArea = $("currentKey");
    var cKey = randomKeys[randomKeys.length-1];
    if(randomKeys.length === 0){
      currentKey.innerHTML = "you win";
    }else{
    currentKey.innerHTML = cKey;
    }
    $(document).keypress(function(event){
      if((String.fromCharCode(event.which) === cKey)){
        audioElement.play();
        var indexToSplice = randomKeys.indexOf(randomKeys.length-1);
        randomKeys.splice(indexToSplice,1)
        console.log(randomKeys)
        keyPress();
      }
    })
  }

  function runGame(){
    callNextKey();
    startButton();
    }
  runGame();

});
