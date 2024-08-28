function checkTraffic(selected) {
  const checkboxes = document.querySelectorAll('input[name="traffic"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.value !== selected) {
      checkbox.checked = false;
    }
  });
}

function checkRoad(selected) {
  const checkboxes = document.querySelectorAll('input[name="road"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.value !== selected) {
      checkbox.checked = false;
    }
  });
}

function checkShadow(selected) {
  const checkboxes = document.querySelectorAll('input[name="shadow"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.value !== selected) {
      checkbox.checked = false;
    }
  });
}

function submitForm() {
  const trafficChecked = document.querySelector(
    'input[name="traffic"]:checked'
  );
  const roadChecked = document.querySelector('input[name="road"]:checked');
  const shadowChecked = document.querySelector('input[name="shadow"]:checked');

  const errorMessageElement = document.getElementById("error-message");

  if (!trafficChecked || !roadChecked || !shadowChecked) {
    errorMessageElement.textContent = "すべて選択してください";
    return;
  }

  // エラーメッセージが表示されていたらクリア
  errorMessageElement.textContent = "";

  // 全て選択されている場合、フォームを送信して結果ページへ遷移
  document.getElementById("selectionForm").submit();
}
