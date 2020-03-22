//Sorting an array using Bubble Sort Algorithm
//Time Complexity for Bubble Sort: O(n^2)
function bubble(arr){
    for(var i=0; i<arr.length; i++){
        var elem = 0;
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                
                elem = 1;
            }
        }
        if(elem === 0) break;
    }
    return arr;
}
console.log(bubble([6,5,7,4,8,3,9,2,0,1]));