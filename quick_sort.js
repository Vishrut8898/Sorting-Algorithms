//Sorting an array using Merge Sort Algorithm
//Time Complexity for Merge Sort: O(nlogn)
var arr = [6,5,7,4,8,3,9,2,0,1];
function quickSort(arr, start, end){
    if(start < end){
        let pivot = partition(arr, start, end)
        
        quickSort(arr, start, pivot-1);
        quickSort(arr, pivot+1, end);
    }
}
function partition(arr, start, end){
    let pivot = end;
    
    let i = start - 1;
    let j = start;
    
    while(j < pivot){
        if(arr[j] > arr[pivot]){
            j++;
        }
        else{
            i++;
            swap(arr, j, i);
            j++;
        }
    }
    swap(arr, i+1, pivot);
    
    return i+1;
}
function swap(arr, first, sec){
    var temp = arr[first];
    arr[first] = arr[sec];
    arr[sec] = temp;
}
quickSort(arr, 0, arr.length-1)
console.log(arr);