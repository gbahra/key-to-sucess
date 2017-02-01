$(function(){
  //button where loser and time bar
  var player1Area = $("player1");
  var player2Area = $("player2");
  var p1keyArea = $("#p1currentKey");
  var p2keyArea = $("#p2currentKey");
  var p1Keyboard = ['q', 'w', 'e', 'r', 't','a','s','d', 'f',
  'z', 'x', 'c', 'v']
  var p2Keyboard = ['y','u','i','o', 'p','g', 'h', 'j', 'k',
  'l', 'b', 'n', 'm']
  var khaledQuotes = ['The key to more success is coco butter', 'The key is to make it', 'Give thanks to the most high', 'They will try to close the door on u, just open it', 'They don’t want you to jet ski', 'Congratulations, you played yourself', 'You smart! You loyal! You’re a genius!', 'The other day the grass was brown, now its green cuz I ain’t give up']
  var sentence = khaledQuotes[Math.floor(Math.random() * khaledQuotes.length)]
  var oldSentence = '';
  var p1keys = [];
  var p2keys = [];
  var position = 0;
  var timer;
  function fade(){
  var time = 3000
  $("body").hide();
  setTimeout(function() {
    $("body").fadeIn(time);
  }, time);
  }
  function sortKeys(){
    oldSentence = sentence;
    sentence = sentence.replace(/[^\w\s]|_/g, "").toLowerCase();
    sentence = sentence.replace(/\s/g,'')
    console.log(sentence)
    for(var i = 0; i<sentence.length; i++){
      if (p1Keyboard.indexOf(sentence[i]) !== -1) {
        p1keys.push(sentence[i])
      } else {
        p2keys.push(sentence[i])
      }
    }
  }
  function nextGo(currentKey){
    if(p2Keyboard.indexOf(currentKey) !== -1){
      return 'p2'
    }else if(p1Keyboard.indexOf(currentKey) !== -1){
      return 'p1'
    }
  }
  function startButton(){
    $("button").click(keyPress);
    $(document).keypress(keyPress);
  }
  function loser(){
    p1keyArea.html('you lose');
    p2keyArea.html('you lose');
    sentence = "";
    $(document).unbind('keypress');
    var audioElement = $('<audio></audio>');
    audioElement.attr('src', 'Congratulations, you played yourself..mp3');
    audioElement[0].play();
    return
  }
  function keyPress(){
    $('footer').html(oldSentence);
    if(p1keys.length === 0 && p2keys.length === 0){
      p1keyArea.html('you win');
      p2keyArea.html('you win');
      var audioElement = $('<audio></audio>');
      audioElement.attr('src', 'DJ Khaled - All I Do is Win mmv (chorus only).mp3');
      audioElement[0].play();
      clearTimeout(timer)
      return;
    }
    clearTimeout(timer)
    timer = setTimeout(function(){
      loser();
    }, 2000)
    var nextLetter = sentence[position]
    var turn = nextGo(sentence[position]);
    $('#' + nextLetter).css('background-color', 'green')
    if(turn==='p1'){
      p1keyArea.html(nextLetter);
      p2keyArea.html(' ');
      if((String.fromCharCode(event.keyCode) === nextLetter)){
        $('#' + nextLetter).css('background-color', 'rgba(0, 0, 0, 0.2');
        playerClick(p1keys);
      } else if(document.onkeyup &&(String.fromCharCode(event.keyCode)  !== nextLetter)){
        loser();
      }
    } else {
      p2keyArea.html(nextLetter);
      p1keyArea.html(' ');
      if((String.fromCharCode(event.keyCode)  === nextLetter)) {
        $('#' + nextLetter).css('background-color', 'rgba(0, 0, 0, 0.2');
        playerClick(p2keys);
      } else if(document.onkeyup &&(String.fromCharCode(event.keyCode)  !== nextLetter)){
        loser();
      }
    }
  }
  function playerClick(keys) {
    var audioElement = $('<audio></audio>');
    audioElement.attr('src', 'DJ Khaled Another One Sound Effect (HD).mp3');
    audioElement[0].play();
    keys.splice(0,1);
    position++;
    keyPress();
  }
  function runGame(){
    fade();
    sortKeys();
    startButton();
  }
  runGame();
});

