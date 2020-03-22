//Sorting an array using Count Sort Algorithm
//Time Complexity for Count Sort: O(n+k)
var arr = [6,5,7,4,8,3,9,2,0,1];
function countSort(arr, k){
    var n = arr.length;
    var result = [];
    var count = [];
    
    for(var i=0; i<=k; i++){
        count[i] = 0;
    }
    for(i=0; i<n; i++){
        count[arr[i]]++;
    }
    for(i=1; i<=k; i++){
        count[i] = count[i] + count[i-1];
    }
    for(i=0; i<n; i++){
        result[--count[arr[i]]] = arr[i];
    }
    return count;
}
console.log(countSort(arr, 9));