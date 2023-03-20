export function merge(sortedArray1, sortedArray2) {
  let resultArray = [];
  let i = 0;
  let j = 0;
  while (resultArray.length < sortedArray1.length + sortedArray2.length) {
    if (j >= sortedArray2.length || sortedArray1[i] < sortedArray2[j]) {
      resultArray.push(sortedArray1[i]);
      i++;
    } else {
      resultArray.push(sortedArray2[j]);
      j++;
    }
  }

  return resultArray;
}

export function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

/*
[100, 2, 20, 5, 1, 9]

---- 
left: 2, right: 20 
merge: 2,20 
left: 100, right: 2,20 
merge: 2,20,100 
---- 
left: 1, right: 9 
merge: 1,9 
left: 5, right: 1,9 
merge: 1,5,9 
left: 2,20,100, right: 1,5,9 
merge: 1,2,5,9,20,100 
---- 
left: 2, right: 20 
merge: 2,20 
left: 100, right: 2,20 
merge: 2,20,100 
---- 
left: 1, right: 9 
merge: 1,9 
left: 5, right: 1,9 
merge: 1,5,9 
left: 2,20,100, right: 1,5,9 
merge: 1,2,5,9,20,100 
---- 
left: 2, right: 20 
merge: 2,20 
left: 100, right: 2,20 
merge: 2,20,100 
---- 
left: 1, right: 9 
merge: 1,9 
left: 5, right: 1,9 
merge: 1,5,9 
left: 2,20,100, right: 1,5,9 
merge: 1,2,5,9,20,100 
---- 
left: 2, right: 20 
merge: 2,20 
left: 100, right: 2,20 
merge: 2,20,100 
---- 
left: 1, right: 9 
merge: 1,9 
left: 5, right: 1,9 
merge: 1,5,9 
left: 2,20,100, right: 1,5,9 
merge: 1,2,5,9,20,100 

*/

[1, 2, 3, 4, 5, 6, 7, 8, 9][(1, 2, 3, 4)][(5, 6, 7, 8, 9)];
