// $(function () {

//   // 問題の定義
//   const question = 'コードを書くときに最も重要な要素は？？';
//   // 正解の定義
//   const collectAnswer = 2;

//   // 読み込み時に#questionに問題を表示
//   $('#question').text(question);

//   // 選択肢クリック時に正解不正解を出力
//   $('input[name = "choices"]').on('click', function () {
//     if ($(this).val() == collectAnswer) {
//       alert('ok');
//       $('#result').text('正解');
//     } else {
//       alert('ng');
//       $('#result').text('不正解');
//     }
//   });

// });

// 問題の定義
// const question = 'コードを書くときに最も重要な要素は？？';

const sockets = io();

let matchCount = 0;
let matchCountPlus = 0;
let correctTotal = 0;


sockets.on("member-post", (testSocket) => {
  let testSocketCount = testSocket.countable;
  let anserValue = testSocket.text;
  // let correctAns = testSocket.sumAnsCount;
  console.log(`ソケットのカウンタは${testSocketCount}です`);
  console.log(`ソケットの答え値は${anserValue}です`);
  let totalCorrectAns;
  anserQuiz(testSocketCount, anserValue);
});

const ansers = [
  // '0',
  // '100',
  '100',
  '2',
  '1',
  '0',
  '1',
  '0'
];



function anserQuiz(countQ, checkAnser) {

  const questions = [
    '対戦者は名前を入れて入室後、下の「送信」ボタンを押してください',
    // 'READY?',
    '一人だけ仲間外れは？',
    'これは何？',
    '家系ラーメンの発祥の店は？',
    '2003年にホークスに加入した助っ人外国人は？',
    '余り枠'
  ];

  const choices = [
    ['下の送信ボタンを', `押してマッチング`, `クイズスタート`],
    // ['準備は', `いいですか`, `？？`],
    ['ケリー・キング', 'スコット・イアン', 'マーティ・フリードマン'],
    ['知恵の輪', '鈴鹿サーキット', 'プレッツェル'],
    ['吉村家', '厚木屋', '二郎'],
    ['バルデス', 'ズレータ', 'ペドラザ'],
    ['これで', 'おしまい', 'DEATH']
  ];

  // 最初の二つは除外、最後の答えは表示されない
  // const ansers = [
  //   // '0',
  //   // '100',
  //   '100',
  //   '2',
  //   '1',
  //   '0',
  //   '1',
  //   '0'
  // ];


  // 正解の定義
  // const collectAnswer = 2;

  // const collectAnswer = [2, 1, 0];

  // 問題数カウンタ
  // let countQ = 0;

  // if (countQ >= 0) {

  //   document.getElementById('anserSubmit').onclick = function () {

  //     document.getElementById('question').innerHTML = questions[countQ];

  //     document.getElementById('textFirst').innerHTML = choices[countQ][0];
  //     document.getElementById('textSecond').innerHTML = choices[countQ][1];
  //     document.getElementById('textThird').innerHTML = choices[countQ][2];

  //     console.log(`ここはインサート${countQ}`);
  //   }

  // }


  if (countQ == 0) {

    let allCount = 0;


    document.getElementById('title').innerHTML = allCount;

    document.getElementById('question').innerHTML = questions[countQ];

    document.getElementById('textFirst').innerHTML = choices[countQ][0];
    document.getElementById('textSecond').innerHTML = choices[countQ][1];
    document.getElementById('textThird').innerHTML = choices[countQ][2];

    if (ansers[countQ] == checkAnser) {
      console.log('正解です');

    } else {
      console.log('不正解です');
    }

    console.log(`正解は${ansers[allCount]}`);

    // countQ++;
    console.log(`今はカウント${countQ}`);



  } else if (countQ > 0) {

    testAllCount = document.getElementById('title').textContent;
    allCount = Number(testAllCount) + 1;

    document.getElementById('title').innerHTML = allCount;


    document.getElementById('question').innerHTML = questions[allCount];

    document.getElementById('textFirst').innerHTML = choices[allCount][0];
    document.getElementById('textSecond').innerHTML = choices[allCount][1];
    document.getElementById('textThird').innerHTML = choices[allCount][2];

    if (ansers[allCount -1] == checkAnser) {
      localStorage.getItem('totalcorrect');
      console.log('正解です');
      correctTotal++;
      console.log(`合計の正解数は${correctTotal}です`);
      localStorage.setItem('totalcorrect', correctTotal);
    } else {
      console.log('不正解です');
    }

    console.log(`今はチェックカウント${checkAnser}`);
    console.log(`今はアンサーカウント${ansers[allCount]}`);
    console.log(`今はオールカウント${allCount}`);

    console.log(`正解は${ansers[allCount]}`);


    // クイズ終了の処理
    if(allCount == 5){
      console.log('finish');
      const getCorrectAns = localStorage.getItem('totalcorrect');
      document.getElementById('title').style.display = 'none';
      document.getElementById('question').style.display = 'none';
      document.getElementById('choiceBoxId').style.display = 'none';
      document.getElementById('inputmyname').style.display = 'none';
      document.getElementById('insertBox').insertAdjacentHTML('afterbegin', `<div id="totalAnserBox"><div id="totalAnserBoxContainer"><p>正解数は<span id="totalAnser"></span>問でした。</p></div></div>`);
      document.getElementById('totalAnser').innerHTML = getCorrectAns;
      document.getElementById('resetBtn').style.display = 'block';
      document.getElementById('resetBtn').onclick = function(){
        location.reload();
        localStorage.clear();
      }
    }

  }

}

// // document.getElementsByName("choices").onclick = function(){
// const test1 = document.getElementsByName("choices");
// const input = document.getElementsByClassName("input");
// // console.log(test1);

// test1.forEach(function(testItem){
//   console.log(testItem);
//   // const test2 = testItem.getElementsByClassName("input");
//   console.log(testItem.value);
//   if(testItem.values == collectAnswer){
//     console.log('ok');
//   }else{
//     console.log('ng');
//   }
//   // console.log('test');
// });
// // test1.addEventListener("click", check);
// input.onclick = function(){
//   check();
//   console.log('test');
// }



// function check(){
//   if(this.values == collectAnswer){
//     console.log('ok');
//   }else{
//     console.log('ng');
//   }
// }
// };

// let counting = 1;

// function chatCheck(counting) {

//   if (document.getElementById(`checkExist${matchCount}`) != null) {
//     matchCountPlus = matchCount;

//     let countingNumber = document.getElementById('title').textContent;

//     // let counting = Number(countingNumber) - 1;

//     console.log(counting);

//     // +1でカウンタを調整
//     let nameText = document.getElementById(`checkExist${counting - 1}`).textContent;
//     // let nameTextTest = document.getElementById(`checkExist${counting}`).textContent;

//     // console.log(nameText.match(ansers[matchCount]));

//     console.log(`ここはカウンタ${matchCount}`);
//     console.log(`ここはカウンティングカウンタ${counting}`);
//     console.log(`ここはカウンタplus${matchCountPlus}`);
//     console.log(`ここはnameText${nameText}`);
//     console.log(`ここはansersのカウンタ${ansers[matchCount]}`);
//     console.log(nameText.includes(ansers[matchCount]))

//     if (nameText.match(ansers[matchCount])) {
//       console.log('マッチしてます');
//       // matchCount++;
//     } else {
//       console.log('マッチしてません');
//       // matchCount++;
//     }
//     matchCount++;
//     counting++;

//   }
// }


var closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
})