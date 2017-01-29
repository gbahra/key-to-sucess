$(function(){
  var p1keys = ['q' , 'w', 'e', 'a', 's', 'd','z','x','c'];
  var p2keys = ['t', 'y', 'u','g', 'h','j','b','n','m']
  var p1WinCounter = 0;
  var p2WinCounter = 0;
  var player1Area = $("player1");
  var player2Area = $("player2");
  var buttonClicked = false;

function callNextKey(){
        var rand = Math.floor(Math.random()*p1keys.length);
        return p1keys[rand] ;
}

function startButton(){
  console.log('ads')
    var button = $("button");
    button[0].addEventListener("click",function(){
      buttonClicked = true;
  })
    if(buttonClicked){
      return true;
    }else{
      return false;
    }
  }

  function keyPress(){
    console.log('jsfjsd');
    var keyArea = $("currentKey");
    var cKey = callNextKey();
    currentKey.innerHTML = cKey;
    console.log("hjdsjhf")
    $(document).keypress(function(event){
        if(String.fromCharCode(event.which) != cKey){
              alert('no');
            }
            else{
              alert('yes')
            }
        })
  }

  function runGame(){
      if(startButton() == true){
      keyPress();
    }
    }
  runGame();

});
