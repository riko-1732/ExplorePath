// URLパラメータから選択されたオプションを取得
const urlParams = new URLSearchParams(window.location.search);
const traffic = urlParams.get("traffic");
const road = urlParams.get("road");
const shadow = urlParams.get("shadow");

// 結果を表示する要素を取得
const result = document.getElementById("result");
const resultImage = document.getElementById("resultImage");

// 結果のパターンと画像を設定
const resultsMapping = {
  high_high_Low: {
    text: "影が多く、人通りも多い場所です。",
    image: "C.jpg",
    image: "Y.jpg",
    image: "Z.jpg",
  },
  high_medium_high: {
    text: "影が多く、人通りも多い場所です。",
    image: "A.jpg",
    image: "W.jpg",
    image: "alpha.jpg",
  },
  high_medium_low: {
    text: "影が多く、人通りは普通です。",
    image: "N.jpg",
  },
  high_low_high: {
    text: "影が多く、人通りは少ないです。",
    image: "B.jpg",
    image: "D.jpg",
    image: "X.jpg",
  },
  medium_high_high: {
    text: "影が普通で、人通りは多いです。",
    image: "O.jpg",
  },
  medium_high_medium: {
    text: "影も人通りも普通です。",
    image: "J.jpg",
  },
  medium_high_low: {
    text: "影が普通で、人通りは少ないです。",
    image: "K.jpg",
  },
  medium_medium_medium: {
    text: "影が少なく、人通りは多いです。",
    image: "U.jpg",
  },
  low_low_high: {
    text: "影も人通りも少ないです。",
    image: "F.jpg",
    image: "L.jpg",
    image: "M.jpg",
    image: "O.jpg",
    image: "V.jpg",
  },
  low_low_medium: {
    text: "影が少なく、人通りは普通です。",
    image: "H.jpg",
    image: "I.jpg",
    image: "P.jpg",
    image: "S.jpg",
    image: "T.jpg",
  },
  low_low_low: {
    text: "影も人通りも少ないです。",
    image: "Q.jpg",
    image: "R.jpg",
  },
  // 他の組み合わせも追加できます
};

// 選択されたオプションの組み合わせに応じた結果と画像を表示
if (traffic && road && shadow) {
  const resultKey = `${traffic}_${road}_${shadow}`;
  const resultData = resultsMapping[resultKey];
  if (resultData) {
    result.textContent = resultData.text;
    resultImage.src = resultData.image;
    resultImage.style.display = "block";
  } else {
    result.textContent = "結果が見つかりません。";
    resultImage.style.display = "none";
  }
} else {
  result.textContent = "すべて選択してください。";
  resultImage.style.display = "none";
}
