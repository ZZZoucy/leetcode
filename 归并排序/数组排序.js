// 归并排序利用了分治的思想来对序列进行排序。
// 对一个长为 n 的待排序的序列，我们将其分解成两个长度为 2/n的子序列。
// 每次先递归调用函数使两个子序列有序，然后我们再线性合并两个有序的子序列使整个序列有序。

// 给你一个整数数组 nums，请你将该数组升序排列。
// 输入：nums = [5,2,3,1]          输出：[1,2,3,5]
// 输入：nums = [5,1,1,2,0,0]      输出：[0,0,1,1,2,5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 归并排序
// 定义 sortArray(nums, l, r) 函数表示对 nums 数组里 [l,mid][mid+1,r] 的部分进行排序
const sortArray = (nums, left = 0, right = nums.length - 1) => {
    if (left >= right) return nums;
    const mid = Math.floor((right - left) / 2) + left;
    // 递归调用 sortArray，对左半部分、右半部分分别进行归并
    sortArray(nums, left, mid);
    sortArray(nums, mid + 1, right);

    // 此时 nums 数组里 左右区间 都已经是有序数组，因此要对两个区间进行先行归并
    // 线性归并就需要 i，j 指针，[l,mid] 里第i个位置，[mid+1,r] 里第j个位置
    let i = left;
    let j = mid + 1;
    let index = 0;
    const arr = new Array(right - left + 1);

    while (i <= mid && j <= right) {
        // 如果 nums[i] <= nums[j]，就将 nums[i] 放入临时数组 arr 中并让 i += 1 ，即指针往后移。
        // 否则，就将 nums[j] 放入临时数组 arr 中并让 j += 1 ，即指针往后移。
        if (nums[i] <= nums[j]) {
            arr[index++] = nums[i++];
        } else {
            arr[index++] = nums[j++];
        }
    }

    // 如果有一个指针已经移到了区间的末尾，那么就把另一个区间里的数按顺序加入 arr 数组中即可。
    while (i <= mid) {
        arr[index++] = nums[i++];
    }
    while (j <= right) {
        arr[index++] = nums[j++];
    }
    for (let k = 0; k < arr.length; k++) {
        nums[left + k] = arr[k];
    }
    return nums;
};
