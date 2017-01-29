$(function(){
  var p1keys = ['q','w','e','a','s','d','z','x','c'];
  var p1randomKeys = [];
  var p2keys = ['t', 'y', 'u','g', 'h','j','b','n','m']
  var p2randomKeys = [];
  var player1Area = $("player1");
  var player2Area = $("player2");
  function callNextKey(){
    for(var i = 0; i<10; i++){
      p1randomKeys[i] = p1keys[Math.floor(Math.random()*p1keys.length)];
      p2randomKeys[i] = p2keys[Math.floor(Math.random()*p2keys.length)];
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
    var p1keyArea = $("p1currentKey");
    var p2keyArea = $("p2currentKey");
    var p1cKey = p1randomKeys[p1randomKeys.length-1];
    var p2cKey = p2randomKeys[p2randomKeys.length-1];
    if(p1randomKeys.length === 0 && p2randomKeys.length != 0){
      p1currentKey.innerHTML = "you win";
      p2currentKey.innerHTML = "you lose";
    }else if(p2randomKeys.length === 0 && p1randomKeys.length != 0) {
      p1currentKey.innerHTML = "you lose";
      p2currentKey.innerHTML = "you win";
    }else{
      p1currentKey.innerHTML = p1cKey;
      p1currentKey.innerHTML = p2cKey;
      }

    $(document).keypress(function(event){
      if((String.fromCharCode(event.which) === p1cKey)){
        audioElement.play();
        var indexToSplice = randomKeys.indexOf(p1randomKeys.length-1);
        p1randomKeys.splice(indexToSplice,1)
        keyPress();
      }
      if((String.fromCharCode(event.which) === p2cKey)){
        audioElement.play();
        var indexToSplice = p2randomKeys.indexOf(p2randomKeys.length-1);
        p2randomKeys.splice(indexToSplice,1)
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
