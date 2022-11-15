const mas = [[9,2,6,1,3], [32,55,12,27,89], [152,923,752,162,222,333], [25,13,623,82]]

function find(arr, el){
  for (let j = 0; j < arr.length; j++)
  for (let i = 0; i < arr[j].length; i++){
    if (arr[j][i] === el){
      return '['+j+']['+i+']';
    }
  }
  console.log(arr[1].length)
  return -1;
}

console.log(`Found on index: ${find(mas, 13)}`);