

document.getElementById('choicePost').onsubmit = function(){

  // textContentは前の数字を取得する
  if(document.getElementById('title').textContent == 0){
    document.getElementById('rightBox').insertAdjacentHTML('afterbegin', '<div id = "rightBoxInner1"><img src="https://drive.google.com/uc?id=1Ythr1cqgZJMc7tnhiY-ydU3TkvK6J4nY" alt=""><img src="https://drive.google.com/uc?id=1pXIAG4zMoRhRxCgHTPl7TQhDnjISX76R" alt=""><img src="https://drive.google.com/uc?id=1op5ydMkdy5Z6kKVQ6QcJ5AEHzLh1g-V0" alt=""></div>');
  }else if(document.getElementById('title').textContent == 1){
    document.getElementById('rightBox').insertAdjacentHTML('afterbegin', '<div id = "rightBoxInner2"><img id = "suzukaImg" src="https://drive.google.com/uc?id=1NXxX2q0QywIzl0xsOX3dvIH9fIvS0TaH" alt=""></div>');
    document.getElementById('rightBoxInner1').style.display = 'none';
    document.getElementById('suzukaImg').style.objectFit = "contain";
    document.getElementById('suzukaImg').style.width = "200px";
    document.getElementById('suzukaImg').style.height = "200px";
  }else if(document.getElementById('title').textContent == 2){
    document.getElementById('rightBox').insertAdjacentHTML('afterbegin', `<div id = "rightBoxInner3"><img src="https://drive.google.com/uc?id=192T9ShDlEnzEP3tJJrO29w2AbvkbqLFa" alt=""><img src="https://drive.google.com/uc?id=1sqyQArnyE13jdT0tVPp_XBIrCeGXO2Fh" alt=""><img src="https://drive.google.com/uc?id=1T6d4MjFZWNv3eDI6XIhuKi_wXOHTooWs" alt=""></div>`);
    document.getElementById('rightBoxInner2').style.display = 'none';
  }else if(document.getElementById('title').textContent == 3){
    document.getElementById('rightBox').insertAdjacentHTML('afterbegin', `<div id = "rightBoxInner4"><img src="https://drive.google.com/uc?id=1M7A7KuV-Rzy25KBZfACwP38fZa2eg-cQ" alt=""><img src="https://drive.google.com/uc?id=1U5LP3X9BSKuv88erINSHXnchZiOFMLEL" alt=""><img src="https://drive.google.com/uc?id=1wibuahvPJxbOZGJ7JnyYeaSex6KD-ZlN" alt=""></div>`);
    document.getElementById('rightBoxInner3').style.display = 'none';
  }else{
    document.getElementById('rightBoxInner4').style.display = 'none';
  }

  
  console.log(`テキスト${document.getElementById('title').textContent}`);
};



