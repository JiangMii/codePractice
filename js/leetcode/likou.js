// function insertSort(arr){
//     for(let i=1;i<arr.length;i++){//第一层循环：遍历待比较的数组元素
//         let temp=arr[i];
//         for(var j=i-1;j>=0 && arr[j]>temp;j--){//第二层循环：将待比较的与已经排序的元素比较
//            arr[j+1]=arr[j];
//         }
//         //交换位置
//         arr[j+1]=temp;
//     }
//     return arr;
// }
// console.log(insertSort([2,7,1,9,5]))

// function shellSort(arr){
//     let n=arr.length,d=n;
//     while(d>1){
//         d=Math.floor(d/2);
//         for(var i=d;i<n;i++){
//             var temp=arr[i]
//             for(var j=i-d;j>=0 && arr[j]>temp;j=j-d){
//                 arr[j+d]=arr[j];
//             }
//             arr[j+d]=temp;
//         }
//         }
//         return arr;
// }
// console.log(shellSort([7,59,1,9,5]))

// function directSelectSort(arr){
    
//     for(var i=0;i<arr.length;i++){
//         let minIndex=i,temp=arr[i];
//         for(var j=i+1;j<arr.length;j++){//找出最小值
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         arr[i]=arr[minIndex];//最小值与待排序元素第一个交换
//         arr[minIndex]=temp;
//     }
//     return arr
// }
// console.log(directSelectSort([7,50,1,9,5]))

// function bubbleSort(arr){
//     let l=arr.length;
//     for(let i=1;i<l;i++){
//         for(let j=0;j<l-i;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //解构赋值进行交换
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([1,6,4,9,34]))//[1, 4, 6, 9, 34]

// function bubbleSort1(arr){
//     let l=arr.length, pos=l;//初始化无序元素的范围
//     while(pos!==0){
//         var bound=pos;//本趟无序元素的范围
//         pos=0;
//         for(let i=0;i<bound;i++){
//             if(arr[i]>arr[i+1]){
//                 [arr[i],arr[i+1]]=[arr[i+1],arr[i]];//解构赋值交换
//                 pos=i;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort1([1,5,7,3,9]))//[1,3,5,7,9]

// function QuickSort(arr){
//     if(arr.length<=1)return arr;
//     var pivot=arr.splice(0,1)[0];//确定基准元素
//     var left=[],right=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<=pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return QuickSort(left).concat([pivot],QuickSort(right));//递归
// }
// console.log(QuickSort([7,0,9,5,3,8]))

// function merge(left,right){//合并两个有序数组
//     var res=[];
//     while(left.length>0 && right.length>0){
//         if(left[0]<=right[0]){
//             res.push(left.shift());//删除第一个元素并将其返回
//         }else{
//             res.push(right.shift());
//         }
//     }
//     return res.concat(left,right)
// }

// function mergeSort(arr){
//     if(arr.length===1){
//         return arr;
//     }
//     var mid=Math.floor(arr.length/2)
//     var left=arr.slice(0,mid);
//     var right=arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right));
// }
// console.log(mergeSort([7,2, 3, 4, 5, 10, 7, 8,21]));

//基数排序
// function radixSort(arr, maxDigit) {   //maxDigit表示最大数字的位数
//     var counter = [];
//     var mod = 10;  //以十进制进行排序
//     var dev = 1;
//     for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
//         for(var j = 0; j < arr.length; j++) {
//              var bucket = parseInt((arr[j] % mod) / dev);//可能为0~9
//             if (counter[bucket]==null) {//初始化该容器
//                 counter[bucket] = [];
//              }
//             counter[bucket].push(arr[j]);
      
//         }
//         var pos = 0;
//         for(var j = 0; j < counter.length; j++) {
//             var value = null;
//             if(counter[j]!=null) {
//                while ((value = counter[j].shift()) != null) {
//                 arr[pos++] = value;
//                 }
//             }
//         }
//     }
//     console.log(arr)
//     return arr;
// }
// var a = [3, 4, 5, 10, 713, 8,21,4,2,124];
// console.log(radixSort(a, 3));


// function heapSort(arr) {  
//     len = arr.length;
//     //建堆
//     for(let i = Math.floor(len/2); i >= 0; i--){
//         heapify(arr, i);
//     }
    
//     for(let i = len - 1; i > 0; i--){
//         //输出堆顶元素
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         len--;
//         //重新调整堆
//         heapify(arr, 0);
//     }
//     return arr;
// }

// //调整堆
// function heapify(arr, i) {
//     var left = 2 * i + 1,
//         right = 2 * i + 2,
//         largest = i;
//     if(left < len && arr[left] > arr[largest]){
//         largest = left;
//     }
//     if(right < len && arr[right] > arr[largest]){
//         largest = right;
//     }
//     if(largest !== i){
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, largest);
//     }
// }
// console.log(heapSort(6,7,3,9,188,5))


