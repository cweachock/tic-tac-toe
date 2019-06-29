window.onload = function () {
    var turn = '<i class="fas fa-times"></i>';
    var gameNodes = document.querySelectorAll("ul#ticTacToeBoard li");
    var resetButton = document.querySelector("div.game button.game-resetButton");
    var xArr = [];
    var oArr = [];
    var xScore = 0;
    var displayTurn = document.querySelector("p.playerTurn");  
    //helper functions
  
   function announceWin(playerTurn){
     if(playerTurn.classList == "xPos-js"){
        swal("X Wins!", "success");
       }
     if(playerTurn.classList == "oPos-js"){
       swal("O Wins!", "success");
     }
   }
  
   function checkForWin(playerTurn){
    
     //diagnol wins
     if(xArr.includes("2") && xArr.includes("4") && xArr.includes("6") || (oArr.includes("2") && oArr.includes("4") && oArr.includes("6"))){
       announceWin(playerTurn);
     }
     if(xArr.includes("0") && xArr.includes("4") && xArr.includes("8") || (oArr.includes("0") && oArr.includes("4") && oArr.includes("8"))){
       announceWin(playerTurn);
     }
     
     //vertical wins
     if(xArr.includes("0") && xArr.includes("3") && xArr.includes("6") || (oArr.includes("0") && oArr.includes("3") && oArr.includes("6"))){
       announceWin(playerTurn);
     }
     if(xArr.includes("1") && xArr.includes("4") && xArr.includes("7") || (oArr.includes("1") && oArr.includes("4") && oArr.includes("7"))){
       announceWin(playerTurn);
     }
     if(xArr.includes("2") && xArr.includes("5") && xArr.includes("8") || (oArr.includes("2") && oArr.includes("5") && oArr.includes("8"))){
       announceWin(playerTurn);
     }
     
     //horizontal wins
     if(xArr.includes("0") && xArr.includes("1") && xArr.includes("2") || (oArr.includes("0") && oArr.includes("1") && oArr.includes("2"))){
       announceWin(playerTurn);
     }
     if(xArr.includes("3") && xArr.includes("4") && xArr.includes("5") || (oArr.includes("3") && oArr.includes("4") && oArr.includes("5"))){
       announceWin(playerTurn);
     }
     if(xArr.includes("6") && xArr.includes("7") && xArr.includes("8") || (oArr.includes("6") && oArr.includes("7") && oArr.includes("8"))){
      announceWin(playerTurn);
     }
    
    }
    
  
    
    function setTurn(playerTurn){
      var turnPos = playerTurn.getAttribute("data-pos");
      var xOccupied = playerTurn.classList.contains("xPos-js");
      if(turn == '<i class="fas fa-times"></i>'){
        playerTurn.classList.add("xPos-js");
        xArr.push(turnPos);
        console.log("this is the x array data: " + xArr);
        turn = '<i class="far fa-circle"></i>';
      }else{
        oArr.push(turnPos);
        playerTurn.classList.add("oPos-js");
        console.log("this is the o array data: " + oArr);
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
    }
   
    function updateTurn(){
      displayTurn.innerHTML = "It's " + turn +"'s turn!"
    }

    function addEventListeners() {
        // board event listener delegation
        var gameBoard = document.getElementById("ticTacToeBoard");
        gameBoard.addEventListener('click', function(event) {
            // event target was the clicked element
            if (event.target && event.target.matches("li")) {
                //check if its empty
                if (event.target.innerHTML === ""){
                   event.target.innerHTML = '<span style="background-color:red;">' + turn + "</span>";
                   setTurn(event.target); 
                   updateTurn();
                }

                if (event.target.innerHTML != "") {
                    return;
                }
              
            }
        }, false);
        
        //add reset game listener
        resetButton.addEventListener('click', function(){
          resetGameBoard();
        }, false);
      
        
    }

    addEventListeners();

}
