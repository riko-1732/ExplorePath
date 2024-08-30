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
    text: "人通りが多く、道幅が広く、影の量は普通の道です",
    images: [
      { src: "hhm.jpg", caption: "1" },
      { src: "No.jpg", caption: "" },
    ],
  },
  high_high_low: {
    text: "人通りが多く、道幅が広く、影が少ない道です",
    images: [
      { src: "hhl.jpg", caption: "1" },
      { src: "C.jpg", caption: "2" },
      { src: "Y.jpg", caption: "3" },
      { src: "Z.jpg", caption: "" },
    ],
  },
  high_medium_high: {
    text: "人通りが多く、道幅が普通で、影が多い道です",
    images: [
      { src: "hmh.jpg", caption: "1" },
      { src: "A.jpg", caption: "2" },
      { src: "W.jpg", caption: "3" },
      { src: "alpha.jpg", caption: "4" },
      { src: "No.jpg", caption: "" },
    ],
  },
  high_medium_low: {
    text: "人通りが多く、道幅が普通で、影が少ない道です",
    images: [
      { src: "hml.jpg", caption: "1" },
      { src: "N.jpg", caption: "" },
    ],
  },
  high_low_high: {
    text: "人通りが多く、道幅が狭く、影は多い道です",
    images: [
      { src: "hlh.jpg", caption: "1" },
      { src: "B.jpg", caption: "2" },
      { src: "D.jpg", caption: "3" },
      { src: "X.jpg", caption: "" },
    ],
  },
  high_low_medium: {
    text: "人通りが多く、道幅は狭く、影の量は普通の道です",
    images: [
      { src: "hlm.jpg", caption: "1" },
      { src: "O.jpg", caption: "" },
    ],
  },

  medium_high_high: {
    text: "人通りは普通で、道幅は広く、影が多い道です",
    images: [
      { src: "mhh.jpg", caption: "1" },
      { src: "O.jpg", caption: "" },
    ],
  },
  medium_high_medium: {
    text: "人通りは普通で、道幅は広く、影の量は普通の道です",
    images: [
      { src: "mhm.jpg", caption: "1" },
      { src: "J.jpg", caption: "" },
    ],
  },
  medium_high_low: {
    text: "人通りは普通で、道幅は広く、影が少ない道です",
    images: [
      { src: "mhl.jpg", caption: "1" },
      { src: "K.jpg", caption: "" },
    ],
  },
  medium_medium_high: {
    text: "人通りも道幅も普通で、影は多い道です",
    images: [
      { src: "mmh.jpg", caption: "1" },
      { src: "No.jpg", caption: "" },
    ],
  },
  medium_medium_medium: {
    text: "人通りも道幅も影の量も普通の道です",
    images: [
      { src: "mmm.jpg", caption: "1" },
      { src: "U.jpg", caption: "" },
    ],
  },
  medium_low_medium: {
    text: "人通りは普通で、道幅は狭く、影の量は普通の道です",
    images: [
      { src: "mlm.jpg", caption: "1" },
      { src: "No.jpg", caption: "" },
    ],
  },

  medium_low_low: {
    text: "人通りは普通で、道幅は狭く、影の量は少ないです",
    images: [
      { src: "mll.jpg", caption: "1" },
      { src: "No.jpg", caption: "" },
    ],
  },
  low_low_high: {
    text: "人通りが少なく、道幅も狭く、影が多い道です",
    images: [
      { src: "llh.jpg", caption: "1" },
      { src: "F.jpg", caption: "2" },
      { src: "L.jpg", caption: "3" },
      { src: "M.jpg", caption: "4" },
      { src: "V.jpg", caption: "" },
    ],
  },
  low_low_medium: {
    text: "人通りが少なく、道幅も狭く、影の量は普通の道です",
    images: [
      { src: "llm.jpg", caption: "1" },
      { src: "H.jpg", caption: "2" },
      { src: "I.jpg", caption: "3" },
      { src: "P.jpg", caption: "4" },
      { src: "S.jpg", caption: "5" },
      { src: "T.jpg", caption: "" },
    ],
  },
  low_low_low: {
    text: "人通りが多く、道幅が普通で、影が少ない道です",
    images: [
      { src: "lll.jpg", caption: "1" },
      { src: "Q.jpg", caption: "2" },
      { src: "R.jpg", caption: "3" },
      { src: "No.jpg", caption: "" },
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
