// 给你一个大小为 m x n 的二进制矩阵 grid
// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。
// 你可以假设 grid 的四个边缘都被 0（代表水）包围着。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0;
    let x = grid.length;
    let y = grid[0].length;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let gg = dfs(i, j, grid);
            if (gg > max) {
                max = gg;
            }
        }
    }
    return max;
    function dfs(i, j, grid) {
        let num = 0;
        if (grid[i][j] === 1) {
            num = 1;
            grid[i][j] = 0;
            if (i + 1 < x && grid[i + 1][j] === 1) {
                num += dfs(i + 1, j, grid);
            }
            if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                num += dfs(i - 1, j, grid);
            }
            if (j + 1 < y && grid[i][j + 1] === 1) {
                num += dfs(i, j + 1, grid);
            }
            if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                num += dfs(i, j - 1, grid);
            }
        }
        return num;
    }
};
