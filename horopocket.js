const fortunes = [
  "今日はラッキーなことが起こりやすい日。小さな幸せを見逃さないで。",
  "少し疲れを感じやすい日。無理せず自分のペースで。",
  "新しいことに挑戦すると吉。勇気を出して行動して。",
  "大切な人とのコミュニケーションが運気アップの鍵。",
  "金運・恋愛運ともに安定。いつも通りの生活で良い日。"
];

function showFortune(){
  const name = document.getElementById("name").value.trim();
  const birth = document.getElementById("birth").value.trim();
  const today = new Date().toISOString().slice(0,10);

  if(!name || !birth){
    document.getElementById("result").innerText = "名前と生年月日を入力してね！";
    return;
  }

  const seed = name.length + birth.replace(/-/g,'') + today.replace(/-/g,'');
  const index = seed % fortunes.length;

  document.getElementById("result").innerText = fortunes[index];
}
