// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    if (matrix === null || matrix.length === 0) return result;
    let left = 0,
        right = matrix[0].length - 1,
        top = 0,
        bottom = matrix.length - 1,
        numEle = matrix.length * matrix[0].length;
    while (numEle >= 1) {
        for (let i = left; i <= right && numEle >= 1; i++) {
            result.push(matrix[top][i]);
            numEle--;
        }
        top++;
        for (let i = top; i <= bottom && numEle >= 1; i++) {
            result.push(matrix[i][right]);
            numEle--;
        }
        right--;
        for (let i = right; i >= left && numEle >= 1; i--) {
            result.push(matrix[bottom][i]);
            numEle--;
        }
        bottom--;
        for (let i = bottom; i >= top && numEle >= 1; i--) {
            result.push(matrix[i][left]);
            numEle--;
        }
        left++;
    }
    return result;
};
