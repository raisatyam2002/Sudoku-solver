const isValid: (
  grid: number[][],
  row: number,
  col: number,
  value: number
) => boolean = (grid, row, col, value) => {
  for (let i = 0; i < 9; i++) {
    if (i != row) {
      if (grid[i][col] === value) return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (j != col) {
      if (grid[row][j] === value) return false;
    }
  }
  const startRow = 3 * Math.floor(row / 3);
  const startCol = 3 * Math.floor(col / 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const r = startRow + i;
      const c = startCol + j;
      if ((r !== row || c !== col) && grid[r][c] === value) return false;
    }
  }

  return true;
};

export const check: (grid: number[][]) => boolean = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (!isValid(grid, row, col, grid[row][col])) return false;
    }
  }
  return true;
};
