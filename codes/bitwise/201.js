// m < n

// 1 - 10

// 010
// 110

//从左边开始数 低位的 肯定会出现一个0 高位肯定会出现一个0 这样当前这列 0 和1 不同 求 &的时候 就会变成0

// 0xxxx
// 1xxxx

// 他们中间的状态
// 011111
// 100000
// 最后 & 之后 都变成
// 000000
