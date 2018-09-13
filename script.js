document.addEventListener('DOMContentLoaded', () => {

  ///OBJECT
  const tic = new Object;

  ///FOCUSES ON TD
  tic.getElementList = () =>{
    tic.squares = document.getElementsByTagName ('td');
    tic.turnXO = document.getElementsByClassName('playerTurn');
    tic.reset = document.getElementById('reset');
  }
  tic.getElementList();

  tic.playerTurn = true;

  for (let i = 0; i <tic.squares.length; i++) {
    tic.squares[i].addEventListener ('click', (e)=>{
      switch (tic.playerTurn) {
        case true:
        tic.turnXO[0].innerHTML = `It is O's turn`;
        tic.squares[i].setAttribute('class', 'X');
        tic.squares[i].innerHTML = 'X';
        tic.playerTurn = false;
        break;
        case false:
        tic.turnXO[0].innerHTML = `It is X's turn`;
        tic.squares[i].setAttribute('class', 'O');
        tic.squares[i].innerHTML = 'O';
        tic.playerTurn = true;
        break;
        default:
      }
    });
  }
  tic.reset.addEventListener('click', (e) => {
    location.reload(tic.reset);
  });
});///end of event
