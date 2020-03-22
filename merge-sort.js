//Sorting an array using Merge Sort Algorithm
//Time Complexity for Merge Sort: O(nlogn)
function mergeSort(arr){
    var n = arr.length;
    if(n <= 1) return arr;
    
    var mid = Math.floor(n / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, n);
    
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    var result = [];
    while(left.length || right.length){
        if(left.length && right.length){
            if(left[0] < right[0]){
                result.push(left.shift())
            }
            else{
                result.push(right.shift())
            }
        }
        else if(left.length){
            result.push(left.shift())
        }
        else{
            result.push(right.shift())
        }
    }
    return result;
}
var arr = [6,5,7,4,8,3,9,2,0,1];
console.log(mergeSort(arr));