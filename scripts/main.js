window.onload = function () {
    var turn = '<i class="fas fa-times"></i>';
    var gameNodes = document.querySelectorAll("ul#ticTacToeBoard li");
    var resetButton = document.querySelector("div.game button.game-resetButton");
    var xArr = [];
    var oArr = [];
    var gameCount = 0;
    var displayTurn = document.querySelector("p.playerTurn");  
    
   
  
   function checkForWin(playerTurn){ 
     if(xArr.includes("2") && xArr.includes("4") && xArr.includes("6") || (oArr.includes("2") && oArr.includes("4") && oArr.includes("6"))){
       announceWin(playerTurn);
     }else{
       announceDraw();
     }
     if(xArr.includes("0") && xArr.includes("4") && xArr.includes("8") || (oArr.includes("0") && oArr.includes("4") && oArr.includes("8"))){
       announceWin(playerTurn);
     }else{
      announceDraw();
    }
     
     if(xArr.includes("0") && xArr.includes("3") && xArr.includes("6") || (oArr.includes("0") && oArr.includes("3") && oArr.includes("6"))){
       announceWin(playerTurn);
     }else{
      announceDraw();
    }
     if(xArr.includes("1") && xArr.includes("4") && xArr.includes("7") || (oArr.includes("1") && oArr.includes("4") && oArr.includes("7"))){
       announceWin(playerTurn);
     }else{
      announceDraw();
    }
     if(xArr.includes("2") && xArr.includes("5") && xArr.includes("8") || (oArr.includes("2") && oArr.includes("5") && oArr.includes("8"))){
       announceWin(playerTurn);
     }else{
      announceDraw();
    }
     
     if(xArr.includes("0") && xArr.includes("1") && xArr.includes("2") || (oArr.includes("0") && oArr.includes("1") && oArr.includes("2"))){
       announceWin(playerTurn);
     }else{
      announceDraw();
    }
     if(xArr.includes("3") && xArr.includes("4") && xArr.includes("5") || (oArr.includes("3") && oArr.includes("4") && oArr.includes("5"))){
       announceWin(playerTurn);
     }else{
      announceDraw();
    }
     if(xArr.includes("6") && xArr.includes("7") && xArr.includes("8") || (oArr.includes("6") && oArr.includes("7") && oArr.includes("8"))){
      announceWin(playerTurn);
     }else{
      announceDraw();
    }

    }


   function announceWin(playerTurn){
    if(playerTurn.classList == "xPos-js"){
       swal("X Wins!", "success");
      }else{
        swal("O Wins!", "success");
      }
  }

  function announceDraw(){
    if(gameCount == 9) {
      swal("It's a draw!", "please try again");
    }
  }
     
    function setTurn(playerTurn){
      var turnPos = playerTurn.getAttribute("data-pos");
      if(turn == '<i class="fas fa-times"></i>'){
        playerTurn.classList.add("xPos-js");
        xArr.push(turnPos);
        turn = '<i class="far fa-circle"></i>';
      }else{
        oArr.push(turnPos);
        playerTurn.classList.add("oPos-js");
        turn = '<i class="fas fa-times"></i>';
      }
      checkForWin(playerTurn);
      
    }
  
    function resetGameBoard(){
      for (var i=0; i<gameNodes.length; i++){
        gameNodes[i].innerHTML = '';
        gameNodes[i].classList = '';
        turn='<i class="fas fa-times"></i>';
        displayTurn.innerHTML = '<i class="fas fa-times"></i> goes first';
      }
      xArr = [];
      oArr = [];
      gameCount = 0;
    }
   
    function updateTurn(){
      displayTurn.innerHTML = "It's " + turn +"'s turn!"
    }

    function addEventListeners() {
        var gameBoard = document.getElementById("ticTacToeBoard");
        gameBoard.addEventListener('click', function(event) {
            if (event.target && event.target.matches("li")) {
                if (event.target.innerHTML === ""){
                   gameCount +=1;
                   event.target.innerHTML = '<span style="background-color:red;">' + turn + "</span>";
                   setTurn(event.target);
                   updateTurn();
                }

                if (event.target.innerHTML != "") {
                    return;
                }
              
            }
        }, false);
        
        resetButton.addEventListener('click', function(){
          resetGameBoard();
        }, false);
      
        
    }

    addEventListeners();
}
