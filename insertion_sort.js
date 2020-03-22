//Sorting an array using Insertion Sort Algorithm
//Time Complexity of Insertion Sort - O(n^2)
function insertion(arr){
    var n = arr.length;
    for(var i=1; i<n; i++){
        var value = arr[i];
        while(i > 0 && arr[i-1] > value){
            arr[i] = arr[i-1];
            i = i-1;
        }
        arr[i] = value;
    }
    return arr;
}
console.log(insertion([6,5,7,4,8,3,9,2,0,1]));