let openCheckCount = 1;
let count = 0;

const ansers = [
  '0',
  '0',
  '2',
  '1',
  '0',
  '0'
];

// openModal(openCheckCount, normalCount);

// function openModal(openCount, count){

  if(document.getElementById("checkExist") != null){
    
    // let chatText = document.getElementById(`chatAnser${openCount}`).textContent;
    let nameText = document.getElementById(`nameAnser${count}`).textContent;

    console.log('マッチングポイントです');
  
  
    if(nameText[count].match(ansers[count])){
      console.log('マッチしてます');
      count++;
    }else{
      console.log('マッチしてません');
      count++;
    }
  }
// }


let matchCount = 0;


  if(document.getElementById("checkExist") != null){
    
    let nameText = document.getElementById(`nameAnser${matchCount}`).textContent;

    console.log('マッチングポイントです');
  
  
    if(nameText[count].match(ansers[matchCount])){
      console.log('マッチしてます');
      matchCount++;
    }else{
      console.log('マッチしてません');
      matchCount++;
    }
  }