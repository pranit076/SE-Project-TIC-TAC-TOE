// Unit tests using Jest
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1,,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

Function('TicTacToe', () => {
    let game;
  
    beforeEach(() => {
      game = new TicTacToe();
    });
  
    functionTest('initial board is empty', () => {
      expect(game.board).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
    });
  
    functionTest('makeMove updates board', () => {
      expect(game.makeMove(0, 0)).toBe(true);
      expect(game.board).toEqual([['X', '', ''], ['', '', ''], ['', '', '']]);
      expect(game.makeMove(0, 0)).toBe(false);
      expect(game.board).toEqual([['X', '', ''], ['', '', ''], ['', '', '']]);
      expect(game.makeMove(1, 1)).toBe(true);
      expect(game.board).toEqual([['X', '', ''], ['', 'O', ''], ['', '', '']]);
    });
  
    functionTest('checkWinner returns null when game is not over', () => {
      expect(game.checkWinner()).toBe(null);
      game.makeMove(0, 0);
      expect(game.checkWinner()).toBe(null);
    });
  
    functionTest('checkWinner returns winner when there is a row win', () => {
      game.makeMove(0, 0);
      game.makeMove(1, 0);
      game.makeMove(0, 1);
      game.makeMove(1, 1);
      expect(game.checkWinner()).toBe(null); }) })