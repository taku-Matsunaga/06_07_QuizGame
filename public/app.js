//自分自身の情報を入れる
const IAM = {
  token: null, // トークン
  name: null // 名前
};
let countQues = -1;
// let ansCount = -1;
let ansCount = 0;


//-------------------------------------
// STEP1. Socket.ioサーバへ接続
//-------------------------------------
const socket = io();

// 正常に接続したら
socket.on("connect", () => {
  // 表示を切り替える
  $("#nowconnecting").style.display = "none"; // 「接続中」を非表示
  $("#inputmyname").style.display = "block"; // 名前入力を表示
});

// トークンを発行されたら
socket.on("token", (data) => {
  IAM.token = data.token;
});

//-------------------------------------
// STEP2. 名前の入力
//-------------------------------------
/**
 * [イベント] 名前入力フォームが送信された
 */
$("#frm-myname").addEventListener("submit", (e) => {
  // 規定の送信処理をキャンセル(画面遷移しないなど)
  e.preventDefault();

  // 入力内容を取得する
  const myname = $("#txt-myname");
  if (myname.value === "") {
    return (false);
  }

  // 名前をセット
  $("#myname").innerHTML = myname.value;
  IAM.name = myname.value;

  // 表示を切り替える
  $("#inputmyname").style.display = "none"; // 名前入力を非表示
  $("#chat").style.display = "block"; // チャットを表示
});


//-------------------------------------
// STEP3. チャット開始
//-------------------------------------
/**
 * [イベント] 発言フォームが送信された
 */
// console.log(document.getElementById('frm-post'));


// $("#frm-post").addEventListener("submit", (e)=>{
//   // 規定の送信処理をキャンセル(画面遷移しないなど)
//   e.preventDefault();

//   // 入力内容を取得する
//   const msg = $("#msg");
//   if( msg.value === "" ){
//     return(false);
//   }

//   // console.log(msg.value);

//   // Socket.ioサーバへ送信
//   socket.emit("post", {
//     text: msg.value,
//     token: IAM.token,
//     name: IAM.name
//   });

//   // 発言フォームを空にする
//   msg.value = "";
// });

// 選択肢の情報送信

console.log(document.getElementById('choicePost'));

document.getElementById("choicePost").addEventListener("submit", (e) => {
  // 規定の送信処理をキャンセル(画面遷移しないなど)
  e.preventDefault();

  // inputのvalueの取得
  const getChoicePost = document.getElementById('choicePost');

  const radioNodeList = getChoicePost.choices;

  const ans = radioNodeList.value;

  if (ans == "") {
    return (false);
  } else if (ans == 0) {
    const msgChoice = ans;
    console.log(msgChoice);
    socketEmit(msgChoice);
    // console.log(countQues);
  } else if (ans == 1) {
    const msgChoice = ans;
    console.log(msgChoice);
    socketEmit(msgChoice);
    // console.log(countQues);

  } else if (ans == 2) {
    const msgChoice = ans;
    console.log(msgChoice);
    socketEmit(msgChoice);
    // console.log(countQues);
  } else {
    console.log('error');
  }



  function socketEmit(submitChoice) {

    countQues++;

    // Socket.ioサーバへ送信
    socket.emit("post", {
      text: submitChoice,
      token: IAM.token,
      name: IAM.name,
      countable: countQues,
      sumAnsCount: ansCount
    });

    // 発言フォームを空にする
    submitChoice = "";

  }

});

// ------------------

/**
 * [イベント] 誰かが発言した
 */
socket.on("member-post", (msg) => {
  const is_me = (msg.token === IAM.token);
  addMessage(msg, is_me);
});


/**
 * 発言を表示する
 *
 * @param {object}  msg
 * @param {boolean} [is_me=false]
 * @return {void}
 */

let matchCounts = 0;


function addMessage(msg, is_me = false) {
  const list = $("#msglist");
  const li = document.createElement("li");

  let displayText = document.getElementById('title').textContent;

  //------------------------
  // 自分の発言
  //------------------------
  if (is_me) {
    li.innerHTML = `<span class="msg-me" id = "checkExist${displayText - 1}"><span class="name" id = "nameAnser${displayText - 1}">${msg.name}</span>> ${msg.text}</span><p id = "chatAnser${displayText - 1}">${displayText - 1}回目の回答です</p>`;
  }
  //------------------------
  // 自分以外の発言
  //------------------------
  else {
    li.innerHTML = `<span class="msg-member"><span class="name">${msg.name}</span>> ${msg.text}</span>`;
  }

  // リストの最初に追加
  list.insertBefore(li, list.firstChild);


  // 頭一個は飛ばす、二つ目はスルー
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

  chatCheck();


  function chatCheck() {

    if (document.getElementById(`checkExist${matchCounts}`) != null) {


      // +1でカウンタを調整
      let nameText = document.getElementById(`checkExist${matchCounts}`).textContent;



      console.log(`ここはカウンタ${matchCounts}`);
      console.log(`ここはnameText${nameText}`);
      console.log(`ここはansersのカウンタ${ansers[matchCounts]}`);
      console.log(nameText.includes(ansers[matchCounts]))

      if (nameText.match(ansers[matchCounts])) {
        console.log('マッチしてます');
        document.getElementById('modal').style.display = 'flex';
        anserDetail(matchCounts);
        closeModal(matchCounts);
      } else {
        console.log('マッチしてません');
        // matchCount++;
      }
      matchCounts++;

    }
  }

}


// モーダル閉じる

function closeModal(count){
  var closeBtn = document.getElementById('closeBtn');
  
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    document.getElementById(`modalBoxInner${count}`).style.display = 'none';
    document.getElementById(`anserText${count}`).style.display = 'none';
  })
}



// モーダルの答え詳細追加処理
function anserDetail(count) {
  if (document.getElementById('title').textContent == 2) {
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "anserText${count}"><p>全員BIG4と呼ばれるメタルバンドのギタリスト。右のマーティ・フリードマンだけ<span>ロン毛</span></p></div>`);
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "modalBoxInner${count}"><img src="https://drive.google.com/uc?id=1Ythr1cqgZJMc7tnhiY-ydU3TkvK6J4nY" alt=""><img src="https://drive.google.com/uc?id=1pXIAG4zMoRhRxCgHTPl7TQhDnjISX76R" alt=""><img src="https://drive.google.com/uc?id=1op5ydMkdy5Z6kKVQ6QcJ5AEHzLh1g-V0" alt=""></div>`);
  }else if (document.getElementById('title').textContent == 3) {
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "anserText${count}"><p>世界的にも有名な三重県にある日本のサーキット。</p></div>`);
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "modalBoxInner${count}"><img id = "suzukaImg" src="https://drive.google.com/uc?id=1NXxX2q0QywIzl0xsOX3dvIH9fIvS0TaH" alt=""></div>`);
  }else if (document.getElementById('title').textContent == 4) {
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "anserText${count}"><p>横浜発祥の豚骨醤油ラーメン。横浜駅にある吉村家は並ばないと食べられない。<span>二郎ラーメンは全くの別物。</span></p></div>`);
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "modalBoxInner${count}"><img src="https://drive.google.com/uc?id=1R8291MboiiVhnknVN0PXk_xoV0PavcKM" alt=""></div>`);
  }else if (document.getElementById('title').textContent == 5) {
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "anserText${count}"><p>2003年のダイエーホークスに途中加入したのはズレータ。</p></div>`);
    document.getElementById('modalBox').insertAdjacentHTML('afterbegin', `<div id = "modalBoxInner${count}"><img src="https://drive.google.com/uc?id=1U5LP3X9BSKuv88erINSHXnchZiOFMLEL" alt=""></div>`);
  }
}