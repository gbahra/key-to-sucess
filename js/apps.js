$(function(){
  var player1Area = $("player1");
  var player2Area = $("player2");
  var p1keyArea = $("#p1currentKey");
  var p2keyArea = $("#p2currentKey");
  var p1Keyboard = ['q', 'w', 'e', 'r', 't','a','s','d', 'f',
  'z', 'x', 'c', 'v'];
  var p2Keyboard = ['y','u','i','o', 'p','g', 'h', 'j', 'k',
  'l', 'b', 'n', 'm'];
  var khaledQuotes = ['The key to more success is coco butter', 'The key is to make it', 'Give thanks to the most high', 'They will try to close the door on u, just open it', 'They don’t want you to jet ski', 'Congratulations, you played yourself', 'You smart! You loyal! You’re a genius!', 'The other day the grass was brown, now its green cuz I ain’t give up']
  var p1keys = [];
  var p2keys = [];
  var position = 0;
  var sentence;
  var messageSentence = '';
  var nextLetter;
  var timer;
  var turn;
  var winCounter = 0;
  var t = 5000;

  function resetGame() {
    sortKeys();
    keyPressListener();
  }

  function sortKeys(){
    sentence = khaledQuotes[Math.floor(Math.random() * khaledQuotes.length)]
    messageSentence = sentence;
    sentence = removeSpaces(sentence);
    for(var i = 0; i < sentence.length; i++){
      if (p1Keyboard.indexOf(sentence[i]) !== -1) {
        p1keys.push(sentence[i])
      } else {
        p2keys.push(sentence[i])
      }
    }
  }

  function removeSpaces(sentence) {
    return sentence.replace(/[^\w\s]|_/g, "").toLowerCase().replace(/\s/g,'');
  }

  function keyPressListener(){
    $('footer').html("Press space bar to start, and reset at any point");
    $(document).keypress(function(e) {
      var key = String.fromCharCode(e.keyCode);
      if (key === " ") {
        (position === 0) ? startRound() : resetGame();
      } else {

        keyPress(key);
      }
    })
  }

  function startRound(){
    clearTimeout(timer);
    time(t);
    if (p1keys.length === 0 && p2keys.length === 0) return winner();
    if(winCounter === 3) t = t-100;
    $('footer').html(messageSentence);
    nextLetter = sentence[position];
    turn = nextGo(sentence[position]);
    $('#' + nextLetter).css('background-color', 'green')
    if(turn==='p1'){
      p1keyArea.html(nextLetter);
      p2keyArea.html(' ');
    } else if(turn==='p2') {
      p2keyArea.html(nextLetter);
      p1keyArea.html(' ');
    }
  }

  function nextGo(currentKey){
    if(p2Keyboard.indexOf(currentKey) !== -1){
      return 'p2'
    }else if(p1Keyboard.indexOf(currentKey) !== -1){
      return 'p1'
    }
  }

  function time(t){
      timer = setTimeout(function(){
        loser();
      }, t)
  }

  function keyPress(key){
    console.log(key, nextLetter);
    if((key === nextLetter) && turn ==='p1'){
      $('#' + nextLetter).css('background-color', 'rgba(0, 0, 0, 0.2');
      goodKey(p1keys);
    } else if((key  === nextLetter) && turn ==='p2') {
      $('#' + nextLetter).css('background-color', 'rgba(0, 0, 0, 0.2');
      goodKey(p2keys);
    }
    else if((key  !== nextLetter)){
      loser();
    }
  }

  function goodKey(keys) {
    var audioElement = $('<audio></audio>');
    audioElement.attr('src', 'DJ Khaled Another One Sound Effect (HD).mp3');
    audioElement[0].play();
    keys.splice(0,1);
    nextLetter = sentence[position++];
    startRound();
  }

  function loser(){
    p1keyArea.html('you lose');
    p2keyArea.html('you lose');
    $('#' + nextLetter).css('background-color', 'rgba(0, 0, 0, 0.2');
    var audioElement = $('<audio></audio>');
    audioElement.attr('src', 'Congratulations, you played yourself..mp3');
    audioElement[0].play();
    winner = 0;
    clearTimeout(timer)
    position = 0;

  }

  function winner(){
    p1keyArea.html('you win');
    p2keyArea.html('you win');
    var audioElement = $('<audio></audio>');
    audioElement.attr('src', 'DJ Khaled - All I Do is Win mmv (chorus only).mp3');
    audioElement[0].play();
    clearTimeout(timer)
    position= 0;
    winner++;

  }

  function fade(){
    $("body").hide();
    setTimeout(function() {
      $("body").fadeIn(1000);
    }, 1000);
  }
  fade();
  resetGame();

});

