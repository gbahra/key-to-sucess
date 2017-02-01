$(function(){
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
  var messageSentence = '';
  var p1keys = [];
  var p2keys = [];
  var p1keysWord = [];
  var p2keysWord = [];
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
    messageSentence = sentence;
    sentence = sentence.replace(/[^\w\s]|_/g, "").toLowerCase();
    sentence = sentence.replace(/\s/g,'')
    oldSentence = sentence;
    for(var i = 0; i<sentence.length; i++){
      if (p1Keyboard.indexOf(sentence[i]) !== -1) {

        p1keys.push(sentence[i])
        p1keysWord.push(sentence[i])
      } else {
        p2keys.push(sentence[i])
        p2keysWord.push(sentence[i])
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
    $('footer').html("Press space bar to start");
    $(document).keypress(keyPress)
  }

  function loser(){
    p1keyArea.html('you lose');
    p2keyArea.html('you lose');
    $(document).unbind("keypress");
    sentence = oldSentence;
    p1keys = p1keysWord
    p2keys = p2keysWord
    var audioElement = $('<audio></audio>');
    audioElement.attr('src', 'Congratulations, you played yourself..mp3');
    audioElement[0].play();
    clearTimeout(timer)
    startButton();
  }

  function winner(){
    p1keyArea.html('you win');
    p2keyArea.html('you win');
    var audioElement = $('<audio></audio>');
    audioElement.attr('src', 'DJ Khaled - All I Do is Win mmv (chorus only).mp3');
    audioElement[0].play();
    clearTimeout(timer)
    startButton();
  }

  function time(){
      timer = setTimeout(function(){
        loser();
      }, 1000)
  }

  function keyPress(){
    var nextKey = String.fromCharCode(event.keyCode)
    //if(nextKey === " "){
      $('footer').html(messageSentence);
      if(p1keys.length === 0 && p2keys.length === 0){
       winner();
      }
      clearTimeout(timer)
      time();
      var nextLetter = sentence[position]
      var turn = nextGo(sentence[position]);
      $('#' + nextLetter).css('background-color', 'green')

      if(turn==='p1'){
        p1keyArea.html(nextLetter);
        p2keyArea.html(' ');
        if((String.fromCharCode(event.keyCode) === nextLetter)){
          $('#' + nextLetter).css('background-color', 'rgba(0, 0, 0, 0.2');
          playerClick(p1keys);
        }
        // else if((String.fromCharCode(event.keyCode)  !== nextLetter)){
        //   loser();
        // }
      } else {
        p2keyArea.html(nextLetter);
        p1keyArea.html(' ');
        if((String.fromCharCode(event.keyCode)  === nextLetter)) {
          $('#' + nextLetter).css('background-color', 'rgba(0, 0, 0, 0.2');
          playerClick(p2keys);
        }
        // else if((String.fromCharCode(event.keyCode)  !== nextLetter)){
        //   loser();
        // }
    //  }
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

