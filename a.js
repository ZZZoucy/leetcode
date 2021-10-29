var kthSmallest = function (root, k) {
    const res = [];
    var inorderTraversal = function (root) {
        if (!root) return res;
        inorderTraversal(root.left, res);
        res.push(root.val);
        inorderTraversal(root.right, res);
        return res;
    };
    inorderTraversal(root);
    return res[k - 1];
};
