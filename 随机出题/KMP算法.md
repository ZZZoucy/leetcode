## KMP算法中的next数组是什么
### 直接举例：
 * s:   aabaaf
   
 * s的next：
 *  前缀：不包含末尾的所有字符串
 *  后缀：不包含开头的所有字符串
 * 
 * 前缀：               后缀：
 *   a,                  f,
 *   aa,                 af,
 *   aab,                aaf,  
 *   aaba,               baaf,
 *   aabaa,              abaaf,
 *   aabaaf, ❌          aabaaf, ❌           这一行不是前缀也不是后缀
  
 * 最长相等的前后缀：
 *   a          0  只有一个，0
 *   aa         1  前缀：a。后缀：a
 *   aab        0  前缀：a、aa。后缀：b、ab。
 *   aaba       1  前缀：a、aa、aab。后缀：a、ba、aba。
 *   aabaa      2  前缀：a、aa、aab、aaba。后缀：a、aa、baa、abaa。
 *   aabaaf     0  ....
 *  
 *  next = 【 0,1,0,1,2,0 】，next就是s的前缀表。
 * 
 *  1. next中的值代表着该子串的最长相等前后缀的长度，
 *  2. 因为数组是从0开始的，该值还表示子串最长相等前后缀的下一项的索引

 `例如： next[4] = 2， 其对应的子串是aabaa，前缀和后缀相等的只有a、aa，长度为2。 
        s[2] === b 恰好等于下一项的索引。`
