var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const transBtn = document.getElementById('transBtn');
const exitBtn = document.getElementById('exitBtn');

const index =  {
  "APACHE": 1,
  "API": 2,
  "ASP": 3,
  "BASH": 4,
  "C#": 5,
  "CMS": 6,
  "CPU": 7,
  "CSS": 8,
  "CSV": 9,
  "CSV__1": 10,
  "CUI": 11,
  "C言語": 12,
  "DAAS": 13,
  "DDOS攻撃": 14,
  "DEVOPS": 15,
  "DHCB": 16,
  "DNS": 17,
  "DOCKER": 18,
  "DSL": 19,
  "DX": 20,
  "ECサイト": 21,
  "FGO": 22,
  "FTP": 23,
  "GEIT": 24,
  "GITHUB": 25,
  "GUI": 26,
  "HDD": 27,
  "HTML": 28,
  "IPアドレス": 29,
  "JAVA": 30,
  "JAVASCRIPT": 31,
  "JS": 32,
  "JSON": 33,
  "LARAVEL": 34,
  "LINUX": 35,
  "MDM": 36,
  "MYSQL": 37,
  "NAS": 38,
  "NGINX": 39,
  "NIC": 40,
  "NTP": 41,
  "OS": 42,
  "PHP": 43,
  "PULL": 44,
  "PUSH": 45,
  "PYTHON": 46,
  "QIITA": 47,
  "RAILS": 48,
  "RUBY": 49,
  "SAAS": 50,
  "SAO": 51,
  "SEO": 52,
  "SHELL": 53,
  "SLA": 54,
  "SPA": 55,
  "SRE": 56,
  "SSD": 57,
  "SSH": 58,
  "SSL": 59,
  "SSO": 60,
  "TCP": 61,
  "TKG": 62,
  "TLS": 63,
  "UDP": 64,
  "UI": 65,
  "UX": 66,
  "VM": 67,
  "VPN": 68,
  "VPS": 69,
  "VSCODE": 70,
  "WORDPRESS": 71,
  "アジャイル": 72,
  "アセンブラ": 73,
  "アルゴリズム": 74,
  "インクリメント": 75,
  "インジェクション": 76,
  "インシデント": 77,
  "インスタンス": 78,
  "インターフェース": 79,
  "インタラクティブ": 80,
  "インフラ": 81,
  "エンジニア": 82,
  "エンジニンガル": 83,
  "オープンソース": 84,
  "オブジェクト指向": 85,
  "オプトイン": 86,
  "オンプレミス": 87,
  "カラム": 88,
  "クエリ": 89,
  "クラウド": 90,
  "クラウドファンディング": 91,
  "グラフィックボード": 92,
  "クリエイター": 93,
  "クローン": 94,
  "コーディング": 95,
  "コード": 96,
  "コミット": 97,
  "コンテナ": 98,
  "コンパイラ": 99,
  "コンポーネント": 100,
  "サーバー": 101,
  "ジョイン": 102,
  "スクラッチ開発": 103,
  "スクリプト": 104,
  "スクレイピング": 105,
  "スタック": 106,
  "ストリーミング": 107,
  "ストレージ": 108,
  "スプール": 109,
  "ダウンリンク": 110,
  "タスク": 111,
  "チャットボット": 112,
  "ディレクトリ": 113,
  "データベース": 114,
  "データ構造": 115,
  "デクリメント": 116,
  "デッドロック": 117,
  "デバッガー": 118,
  "デプロイ": 119,
  "ドメイン": 120,
  "ドメイン名": 121,
  "トランザクション": 122,
  "パケット": 123,
  "バックエンド": 124,
  "バッチ処理": 125,
  "パブリッククラウド": 126,
  "バリデーション": 127,
  "ビュー": 128,
  "ファイアオール": 129,
  "ファシリテーション": 130,
  "ファシリテーター": 131,
  "ファシリテート": 132,
  "プラグイン": 133,
  "プラットフォーム": 134,
  "フレームワーク": 135,
  "プロトコル": 136,
  "プロバイダ": 137,
  "フロントエンド": 138,
  "ホスティング": 139,
  "マイグレーション": 140,
  "ミドルウェア": 141,
  "メモリ": 142,
  "モジュール": 143,
  "ユーザビリティ": 144,
  "ライブラリ": 145,
  "ランサムウェア": 146,
  "リコメンド": 147,
  "リストア": 148,
  "リポジトリ": 149,
  "ルーター": 150,
  "ルーティング": 151,
  "レコメンド": 152,
  "レンタルサーバ": 153,
  "ローカル": 154,
  "ロードバランサ": 155,
  "脆弱性": 156,
  "怒られた": 157,
  "シーケンス": 158,
  "DBMS": 159,
  "エンドユーザー": 160,
  "バックログ": 161,
  "シームレス": 162,
  "ISO": 163,
  "IOT": 164,
  "アドイン": 165,
  "アドウェア": 166,
  "イーサネット": 167,
  "オフショア": 168,
  "ビルド": 169,
  "ローンチ": 170,
  "ロールバック": 171,
  "ハッカソン": 172,
  "ルータ": 173,
  "TCP__1": 174,
  "フロント": 175
};

var recognition;

function testSpeech() {
  transBtn.disabled = true;
  recognition = new SpeechRecognition();
  recognition.lang = 'ja';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    const speechResult = event.results[0][0].transcript.toLowerCase();
    const beforeTrans = document.getElementById('rawText');
    if(speechResult!==null){
      beforeTrans.value = beforeTrans.value + "\n" + speechResult;
      morphoAnalysis(speechResult);
    }
  }

  recognition.onerror = function (event) {
    console.log('SpeechRecognition.onerror: ' + event.error);
  }

  recognition.onend = function (event) {
    recognition.stop();
    recognition.start();
    console.log('SpeechRecognition.onend');
  }
}

function morphoAnalysis(speechResult){
  let tokens ="";

  kuromoji.builder({ dicPath: "./dict" }).build(function (err, tokenizer) {
    if (err) {
      console.log(err);
    } else {
      tokens = tokenizer.tokenize(speechResult);
      (async function () {
        let morphoText = "\n";
        for (let token of tokens) {
          let key = token.surface_form.toUpperCase();
          if (index[key] !== undefined) {
            morphoText = morphoText + await getTranslation(index[key], key);
          } else {
            morphoText = morphoText + token.surface_form;
          }
        }
        document.getElementById('translatedText').value = document.getElementById('translatedText').value + morphoText;
      }());
    }
  });
}

async function getTranslation(id,text){
  const baseURL = "https://" + document.getElementById('debugIP').value;
  let translation = "";
  await axios.get(baseURL+'/getTranslation?id=' + id + '&text=' + text)
  .then(function (response) {
    translation = response.data.data.translation;
  }).catch(function (error) {
    translation = text;
  });
  return translation;
}


window.onload = function() {
  // ダウンロードボタンを押した際のイベントを登録
  document.getElementById('downloadBtn').onclick = () => {
    const blob = new Blob([document.getElementById('rawText').value + "\n\n" + document.getElementById('translatedText').value], { "type": "text/plain" });
    document.getElementById('downloadBtn').href = window.URL.createObjectURL(blob);
  };
};

transBtn.addEventListener('click', testSpeech);
