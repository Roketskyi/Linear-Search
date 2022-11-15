const massOfObj = [
  { index: 11, userName: 'John Duo', age: 22, occupation: 'plumber' },
  { index: 21, userName: 'Roman Roketskyi', age: 31, occupation: 'taxi driver' },
  { index: 33, userName: 'Ivan Naval', age: 15, occupation: 'realtor' },
  { index: 45, userName: 'Taras Byrych', age: 68, occupation: 'seller' },
  { index: 15, userName: 'Viktor Dutkevych', age: 17, occupation: 'housemaid' },
]

function find(arr, el){
  for (let i = 0; i < arr.length; i++){
    if (arr[i].index === el){
      console.log(arr[i]);
    }
  }
  return -1;
}

console.log(`Found by object index: ${find(massOfObj, 15)}`);