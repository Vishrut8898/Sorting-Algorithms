//Sorting an array using Selection Sort Algorithm
//Time Complexity for Selection sort - O(n^2)
function selection(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(selection([6,5,7,4,8,3,9,2,0,1]));