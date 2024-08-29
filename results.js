// URLパラメータから選択されたオプションを取得
const urlParams = new URLSearchParams(window.location.search);
const traffic = urlParams.get("traffic");
const road = urlParams.get("road");
const shadow = urlParams.get("shadow");

// 結果を表示する要素を取得
const result = document.getElementById("result");
const resultImagesContainer = document.getElementById("resultImages");

// 結果のパターンと画像を設定
const resultsMapping = {
  high_high_medium: {
    text: "1",
    images: [{ src: "hhm.jpg" }],
  },
  high_high_low: {
    text: "影が多く、人通りも多い場所です。\nA",
    images: [
      { src: "C.jpg", caption: "2" },
      { src: "Y.jpg", caption: "3" },
      { src: "Z.jpg", caption: "" },
      { src: "hhl.jpg" },
    ],
  },
  high_medium_high: {
    text: "あなたが選んだのは\n1",
    images: [
      { src: "A.jpg", caption: "2" },
      { src: "W.jpg", caption: "3" },
      { src: "alpha.jpg", caption: "" },
      { src: "hmh.jpg" },
    ],
  },
  high_medium_low: {
    text: "影が多く、人通りは普通です。",
    images: [{ src: "N.jpg", caption: "" }, { src: "hml.jpg" }],
  },
  high_low_high: {
    text: "影が多く、人通りは少ないです。",
    images: [
      { src: "B.jpg", caption: "影が多い場所" },
      { src: "D.jpg", caption: "静かな環境" },
      { src: "X.jpg", caption: "おすすめの場所" },
      { src: "hlh.jpg" },
    ],
  },
  medium_high_high: {
    text: "影が普通で、人通りは多いです。",
    images: [
      { src: "O.jpg", caption: "バランスの取れた場所" },
      { src: "mhh.jpg" },
    ],
  },
  medium_high_medium: {
    text: "影も人通りも普通です。",
    images: [{ src: "J.jpg", caption: "一般的な場所" }, { src: "mhm.jpg" }],
  },
  medium_high_low: {
    text: "影が普通で、人通りは少ないです。",
    images: [{ src: "K.jpg", caption: "落ち着いた場所" }, { src: "mhl.jpg" }],
  },
  medium_medium_medium: {
    text: "1",
    images: [{ src: "U.jpg", caption: "" }, { src: "mmm.jpg" }],
  },
  low_low_high: {
    text: "影も人通りも少ないです。",
    images: [
      { src: "F.jpg", caption: "人通りが少ない場所" },
      { src: "L.jpg", caption: "影も少ない" },
      { src: "M.jpg", caption: "静かな環境" },
      { src: "O.jpg", caption: "おすすめの場所" },
      { src: "V.jpg", caption: "静かで落ち着く" },
      { src: "llh.jpg" },
    ],
  },
  low_low_medium: {
    text: "影が少なく、人通りは普通です。",
    images: [
      { src: "H.jpg", caption: "明るい場所" },
      { src: "I.jpg", caption: "人通りは普通" },
      { src: "P.jpg", caption: "快適な場所" },
      { src: "S.jpg", caption: "適度な明るさ" },
      { src: "T.jpg", caption: "おすすめの場所" },
      { src: "llm.jpg" },
    ],
  },
  low_low_low: {
    text: "影も人通りも少ないです。",
    images: [
      { src: "Q.jpg", caption: "影も人通りも少ない" },
      { src: "R.jpg", caption: "静かで落ち着く" },
      { src: "lll.jpg" },
    ],
  },
  // 他の組み合わせも追加できます
};

if (traffic && road && shadow) {
  const resultKey = `${traffic}_${road}_${shadow}`;
  const resultData = resultsMapping[resultKey];
  if (resultData) {
    // 結果テキストの表示
    result.innerHTML = `<p style="font-size: 18px;">${resultData.text.replace(
      /\n/g,
      "<br>"
    )}</p>`;

    // 既存の内容をクリア
    resultImagesContainer.innerHTML = "";

    // 画像とキャプションを縦並びで追加
    resultData.images.forEach((imageData) => {
      // 画像を追加
      const imgElement = document.createElement("img");
      imgElement.src = imageData.src;
      imgElement.alt = imageData.caption || "";
      imgElement.style.width = "300px";
      imgElement.style.display = "block";
      imgElement.style.margin = "10px 0";
      resultImagesContainer.appendChild(imgElement);

      // キャプションを追加（存在する場合）
      if (imageData.caption) {
        const captionElement = document.createElement("p");
        captionElement.textContent = imageData.caption;
        captionElement.style.fontSize = "18px"; // フォントサイズを18pxに設定
        captionElement.style.margin = "10px 0";
        resultImagesContainer.appendChild(captionElement);
      }
    });
  } else {
    result.innerHTML = `<p style="font-size: 18px;">結果が見つかりません。</p>`;
    resultImagesContainer.innerHTML = "";
  }
} else {
  result.innerHTML = `<p style="font-size: 18px;">すべて選択してください。</p>`;
  resultImagesContainer.innerHTML = "";
}
