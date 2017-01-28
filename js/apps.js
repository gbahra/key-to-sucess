$(function(){
  var p1keys = ['q' , 'w', 'e', 'a', 's', 'd','z','x','c'];
  var p2keys = ['t', 'y', 'u','g', 'h','j','b','n','m']
  var p1WinCounter = 0;
  var p2WinCounter = 0;
  var player1Area = $("player1");
  var player2Area = $("player2");


function callNextKey(){

        var rand = Math.floor(Math.random()*p1keys.length);

        return p1keys[rand] ;
}

function playButtons(){
    var myButtons = $("button");
    var keyArea = $("currentKey");
    myButtons[0].addEventListener("click",function(){
        var currentKey = callNextKey();
        keyArea.innerHTML = currentKey;

         // $(document).keydown(function(event) {
         // if(event.keypress() == currentKey.charCodeAt(0)){
         //   alert( "Handler for .keyup() called." );

         // }
         $(document).keypress(function(event){
            if(String.fromCharCode(event.which) == currentKey){
              alert("yeah");
            }

        });
        });
        //});
  }
//         for(var i = 0; i<3; i++){
//             if(player1[i] === cBall){
//              p1WinCounter++;
//              console.log(p1WinCounter)
//              player1Area.children[i].style.color = "red";
//             } else if(player2[i] === cBall){
//                 p2WinCounter++;
//                 console.log(p2WinCounter)
//                 player2Area.children[i].style.color = "red";

//             }
//         }
//         if (p1WinCounter ==3){
//             var button = document.getElementById("callNext");
//             button.style.display = 'none';
//             player1Area.innerHTML = "p1 winner"

//         } else if(p2WinCounter ==3){
//             var button = document.getElementById("callNext");
//             button.style.display = 'none';
//             player2Area.innerHTML = "p2 winner"
//         }

// }

playButtons();

});
