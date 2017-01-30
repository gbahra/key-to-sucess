$(function(){
  var sentence = 'sit on the chair'
  var p1Keyboard = ['q', 'w', 'e', 'r', 't','a','s','d', 'f',
  'z', 'x', 'c', 'v']
  var p2Keyboard = ['y', 'u','i','o', 'p','g', 'h', 'j', 'k',
  'l', 'b', 'n', 'm']
  var p1keys = [];
  var p2keys = [];
  var player1Area = $("player1");
  var player2Area = $("player2");
  var winner = false;
  function callNextKey(){
    sentence = sentence.replace(/\s/g, '');
    for(var i = 0; i<sentence.length; i++){
      for(var j = 0; j<p1Keyboard.length; j++){
        if(sentence[i] == p1Keyboard[j]){
          p1keys.push(sentence[i])
        } else if (sentence[i] == p2Keyboard[j]){
        p2keys.push(sentence[i])
        }
      }
    }
  }
  function nextGo(){
    for(var i = 0; i<sentence.length; i++){
      if(p2Keyboard.indexOf(sentence[i]) != -1){
        return 'p2'
      }
      if(p1Keyboard.indexOf(sentence[i]) != -1){
        return 'p1'
      }
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
    var p1keyArea = $("#p1currentKey");
    var p2keyArea = $("#p2currentKey");
    var p1cKey = p1keys[0];
    var p2cKey = p2keys[0];
    var turn = nextGo();
    if (p1keys.length == 0 && p2keys.length == 0){
      p1keyArea.html('you win');
      p2keyArea.html('you win');
    }
    if(turn== 'p1'){
      p1keyArea.html(p1cKey);
      p2keyArea.html(' ');
      $(document).keypress(function(event){
        if((String.fromCharCode(event.which) == p1cKey)){
          audioElement.play();
          p1keys.splice(0,1)
          keyPress();
        }
      })
    }
    else if(turn == 'p2'){
      p2keyArea.html(p2cKey);
      p1keyArea.html(' ');
      $(document).keypress(function(event){
        if((String.fromCharCode(event.which)  == p2cKey)){
          audioElement.play();
          p2keys.splice(0,1)
          keyPress();
        }
      })
    }
  }
  // function keyPress(){
  //   var audioElement = document.createElement('audio');
  //   audioElement.setAttribute('src', 'DJ Khaled Another One Sound Effect (HD).mp3');
  //   var audioElementWinner = document.createElement('audioWinner');
  //   audioElementWinner.setAttribute('src', 'DJ Khaled - All I Do Is Win ft. T-Pain, Ludacris, Rick Ross, Snoop Dogg.mp3');
  //   var p1keyArea = $("p1currentKey");
  //   var p2keyArea = $("p2currentKey");
  //   var p1cKey = p1randomKeys[(p1randomKeys.length)-(p1randomKeys.length-1)];
  //   var p2cKey = p2randomKeys[(p2randomKeys.length)-(p2randomKeys.length-1)];
  //   if(p1randomKeys.length === 0 && p2randomKeys.length != 0){
  //     p1currentKey.innerHTML = "you win";
  //     p2currentKey.innerHTML = "you lose";
  //     winner = true
  //   }else if(p2randomKeys.length === 0 && p1randomKeys.length != 0) {
  //     p1currentKey.innerHTML = "you lose";
  //     p2currentKey.innerHTML = "you win";
  //     winner = true
  //   }else{
  //     p1currentKey.innerHTML = p1cKey;
  //     p2currentKey.innerHTML = p2cKey;
  //     }
  //   if(winner === true){
  //     audioElementWinner.play();
  //   }
  //   $(document).keypress(function(event){
  //     if((String.fromCharCode(event.which) === p1cKey)){
  //       audioElement.play();
  //       var indexToSplice = p1randomKeys.indexOf(p1randomKeys.length-1);
  //       p1randomKeys.splice(indexToSplice,1)
  //       keyPress();
  //     }
  //     if((String.fromCharCode(event.which) === p2cKey)){
  //       audioElement.play();
  //       var indexToSplice = p2randomKeys.indexOf(p2randomKeys.length-1);
  //       p2randomKeys.splice(indexToSplice,1)
  //       keyPress();
  //     }
  //   })
  // }
  function runGame(){
    callNextKey();
    startButton();
  }
  runGame();
});
