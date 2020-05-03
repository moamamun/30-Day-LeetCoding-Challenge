var numIslands = function(grid) {
    let numOfIslands = 0
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                numOfIslands++
                dfs(grid, i, j)
            }
        }
    }
    

    return numOfIslands
};

var dfs = ((grid, r, c) => {
    const sizeOfRow = grid.length
    const sizeOfColumn = grid[0].length


    grid[r][c] = '0'
    if (r - 1 >= 0 && grid[r-1][c] == '1') dfs(grid, r - 1, c);
    if (r + 1 < sizeOfRow && grid[r+1][c] == '1') dfs(grid, r + 1, c);
    if (c - 1 >= 0 && grid[r][c-1] == '1') dfs(grid, r, c - 1);
    if (c + 1 < sizeOfColumn && grid[r][c+1] == '1') dfs(grid, r, c + 1);
    
})