$(function(){
  var sentence = 'sit on the chair'
  var p1keys = [];
  var p2keys = [];
  var player1Area = $("player1");
  var player2Area = $("player2");
  var winner = false;
  function callNextKey(){
    for(var i = 0; i<sentence.length; i++){
      if (sentence[i] === ' '){
        continue;
      }
      else if(i === 0 || i%2 === 0){
        p1keys.push(sentence[i])
      } else{
        p2keys.push(sentence[i])

      }
    }
    console.log(p1keys)
    console.log(p2keys)
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
    var audioElementWinner = document.createElement('audioWinner');
    audioElementWinner.setAttribute('src', 'DJ Khaled - All I Do Is Win ft. T-Pain, Ludacris, Rick Ross, Snoop Dogg.mp3');
    var p1keyArea = $("p1currentKey");
    var p2keyArea = $("p2currentKey");
    var p1cKey = p1randomKeys[p1randomKeys.length-1];
    var p2cKey = p2randomKeys[p2randomKeys.length-1];
    if(p1randomKeys.length === 0 && p2randomKeys.length != 0){
      p1currentKey.innerHTML = "you win";
      p2currentKey.innerHTML = "you lose";
      winner = true
    }else if(p2randomKeys.length === 0 && p1randomKeys.length != 0) {
      p1currentKey.innerHTML = "you lose";
      p2currentKey.innerHTML = "you win";
      winner = true
    }else{
      p1currentKey.innerHTML = p1cKey;
      p2currentKey.innerHTML = p2cKey;
      }
    if(winner === true){
      audioElementWinner.play();
    }

    $(document).keypress(function(event){
      if((String.fromCharCode(event.which) === p1cKey)){
        audioElement.play();
        var indexToSplice = p1randomKeys.indexOf(p1randomKeys.length-1);
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
    //startButton();
    }
  runGame();
});
