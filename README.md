# Tic-Tac-Toe
### Description
The following ReadMe provide information regarding a Tic-Tac-Toe game created. Sounds easy right? Unfortunately, vanilla coding with Javascript is not as easy as it looks but does provide alot of functionality that html and css probably couldn't do alone.

### Languages used
* Javascript
* Minimal HTML and CSS just to provide visualisation to the table.

### How to download
1. Search for Adnaan-m in GitHub.
2. Search for the Sparta-TicTacToe repository.
3. Download the files displayed.

### Challenges (you can include images and code block here)
1. The first obstacle that was approached was displaying the X and O's on the grid. As their classes were predetermined on the CSS file but not HTML, they had to be inserted through the back end AFTER the specific section was clicked.
2. The second issue was the alteration between the X and the O after each click. Initially, every time a box was cliced, only the X would display in appose to both symbols. This was finally fixed through a loop. The following code shows this.

```js
    tic.squares = document.getElementsByTagName ('td');
      for (let i = 0; i <tic.squares.length; i++) {
    tic.squares[i].addEventListener ('click', (e)=>{
      switch (tic.playerTurn) {
        case true:
        tic.squares[i].setAttribute('class', 'X');
        tic.squares[i].innerHTML = 'X';
        tic.playerTurn = false;
        break;
        case false:
        tic.squares[i].setAttribute('class', 'O');
        tic.squares[i].innerHTML = 'O';
        tic.playerTurn = true;
        break;
        default:
      }
    });
  }


```
3. The final obstacle was the array to provide a finish, due to the lack of time availability this was not completed but will be completed in the next sprint.

### Learning points
1. Javascript has ALOT of functionality, on the HTML and CSS side as well.
2. Thinking of the bigger picture when stuck on a bit of code functionality makes a huge difference and provides a better scope to fixing the problem.
