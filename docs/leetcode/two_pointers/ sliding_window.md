```js
var slidingWindow = (arr)=>{
    let left =0, right = 0
    while(right < arr.length){
        window.add(arr[right])
        right++//扩大窗口
        //进行窗口内的数据更新

        //if need shrink
        while(){
            window.remove(arr[left])
            left++//缩小窗口
            //进行窗口内的数据更新
        }
    }
}

```

## 细节
- 如何添加元素
- 如何缩小元素
- 什么时候更新结果



## leetcode 
- 76 