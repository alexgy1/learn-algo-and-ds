//[1,4,2,8,345 ] mergeSort
//[1,4,2], [8, 345]
//[1,4] [2] [8] [345]
//[1] [4] [2] [8] [345]

//[1,4] [2,8] [345]
//[1,2,4,8] [345]
//[1,2,4,8,345]

//leftArr rightArr are sorted
const mergeSortedArr = (leftArr, rightArr) =>{
    let res = []
    let k = 0 , l =0, r = 0 

    while(index < leftArr.length && index < rightArr.length){
        if(leftArr[k] <= rightArr[k]){
            res[k++] = leftArr[index++]
        }else{
            res[k++] = rightArr[index++]
        }
    }

    while(index < leftArr.leftArr) {
        res[k++] =  leftArr[index++]
    }
    while(index < rightArr.leftArr) {
        res[k++] =  rightArr[index++]
    }

    return res 
}
const mergeSort( unOrderArray){
    if(unOrderArray.length <=1) return unOrderArray

    const mid = Math.floor(unOrderArray.length)
    const leftArr = unOrderArray.slice(0, mid)
    const rightArr = unOrderArray.slice(mid)

    return mergeSortedArr(mergeSort(leftArr), mergeSort(rightArr))
}
