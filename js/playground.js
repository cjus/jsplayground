window.playground = function() {
  'use strict';

  var chessboard;

  function createChessboard() {
    var rows = 8
      , cols = 8
      , r
      , c
      , chessboard;

    chessboard = new Array(rows);
    for (r = 0; r < rows; r = r + 1) {
      chessboard[r] = new Array(cols);
      for (c = 0; c < cols; c = c + 1) {
        chessboard[r][c] = 0;
      }
    }
    return chessboard;
  }

  chessboard = createChessboard();

  mcl('createChessboard code', createChessboard);
  mcl('chessboard', chessboard);
};
